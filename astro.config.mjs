import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import keystatic from "@keystatic/astro";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";
import indexNow from "./src/integrations/indexNow";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { config } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
	site: config.site.url,

	prefetch: {
		defaultStrategy: "viewport",
		prefetchAll: true,
	},

	integrations: [
		mdx(),
		// keystatic(),
		sitemap(),
		icon(),
		metaTags(),
		indexNow({
			key: "id123eanoXJFJQl",
			collections: ["posts", "stories", "pages"],
			// 🔥 astro:content
			sitemapFile: "sitemap.xml",
			maxUrls: 10000,
			dryRun: false,
		}),
		react(),
	],

	output: "static",

	vite: {
		plugins: [tailwindcss()],
	},
});
