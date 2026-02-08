import type { AstroIntegration } from "astro";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export interface IndexNowOptions {
	key?: string;
	siteUrl?: string;
	enabled?: boolean;
	dryRun?: boolean;
	maxUrls?: number;
	collections?: string[];
	sitemapFile?: string;
	waitMs?: number;
}

type Cache = Record<string, string>;

export default function indexNow(options: IndexNowOptions = {}): AstroIntegration {
	let site: string | null = null;

	return {
		name: "astro-indexnow-sitemap",

		hooks: {
			"astro:config:setup": ({ config }) => {
				site = options.siteUrl ?? (config.site ? config.site.replace(/\/$/, "") : null);
			},

			"astro:build:done": async ({ dir, logger }) => {
				if (options.enabled === false) return;
				if (!options.key) throw new Error("[indexnow] Missing key");
				if (!site) throw new Error("[indexnow] Missing site URL");

				const outDir = fileURLToPath(dir);
				const waitLimit = options.waitMs ?? 2000;
				const startedAt = Date.now();

				const candidates = options.sitemapFile
					? [options.sitemapFile]
					: ["sitemap-index.xml", "sitemap.xml"];

				function tryResolve(): string | null {
					for (const file of candidates) {
						const full = path.join(outDir, file);
						if (fs.existsSync(full)) return full;
					}
					return null;
				}

				let sitemapPath: string | null = null;

				while (!sitemapPath && Date.now() - startedAt < waitLimit) {
					sitemapPath = tryResolve();
					if (!sitemapPath) {
						await new Promise((r) => setTimeout(r, 100));
					}
				}

				if (!sitemapPath) {
					logger.warn(`[indexnow] sitemap not found after ${waitLimit}ms, skipping`);
					return;
				}

				logger.info(`[indexnow] sitemap found: ${sitemapPath}`);

				let sitemapContent = fs.readFileSync(sitemapPath, "utf-8");
				const sitemapDir = path.dirname(sitemapPath);

				/* -------- sitemap-index -------- */

				if (sitemapContent.includes("<sitemapindex")) {
					const files = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) =>
						path.basename(new URL(m[1]).pathname),
					);

					sitemapContent = files
						.map((f) => {
							const full = path.join(sitemapDir, f);
							return fs.existsSync(full) ? fs.readFileSync(full, "utf-8") : "";
						})
						.join("\n");
				}

				const urls = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)]
					.map((m) => m[1])
					.filter(Boolean);

				if (!urls.length) {
					logger.warn("[indexnow] sitemap empty");
					return;
				}

				const filtered = options.collections?.length
					? urls.filter((url) =>
							options.collections!.some(
								(col) => url === `${site}/${col}/` || url.startsWith(`${site}/${col}/`),
							),
						)
					: urls;

				const cacheFile = path.join(outDir, ".indexnow-cache.json");
				const prev: Cache = fs.existsSync(cacheFile)
					? JSON.parse(fs.readFileSync(cacheFile, "utf-8"))
					: {};

				const next: Cache = {};
				const changed: string[] = [];

				const hash = (v: string) => crypto.createHash("sha1").update(v).digest("hex");

				for (const url of filtered) {
					if (url.includes("/404")) continue;
					const h = hash(url);
					next[url] = h;
					if (prev[url] !== h) changed.push(url);
				}

				if (!changed.length) {
					logger.info("[indexnow] no changes");
					return;
				}

				fs.writeFileSync(cacheFile, JSON.stringify(next, null, 2));

				if (options.dryRun) {
					logger.info("[indexnow] dryRun, skipping submit");
					return;
				}

				try {
					const res = await fetch("https://api.indexnow.org/indexnow", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							host: new URL(site).host,
							key: options.key,
							keyLocation: `${site}/${options.key}.txt`,
							urlList: changed.slice(0, options.maxUrls ?? 10000),
						}),
					});

					if (!res.ok) {
						logger.warn(`[indexnow] request failed ${res.status}`);
						return;
					}

					logger.info(`[indexnow] submitted ${changed.length} URLs`);
				} catch {
					logger.warn("[indexnow] network error");
				}
			},
		},
	};
}
