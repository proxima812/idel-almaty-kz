import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";
import indexNow from "./src/integrations/indexNow";

import tailwindcss from "@tailwindcss/vite";
import { config } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
	site: config.site.url,
	trailingSlash: "never",
	prefetch: {
		defaultStrategy: "viewport",
		prefetchAll: true,
	},

	integrations: [
		mdx(),
		sitemap(),
		icon(),
		metaTags(),
		indexNow({
			key: "id123eanoXJFJQl",
			enabled: true,
		}),
	],

	output: "static",

	vite: {
		plugins: [tailwindcss()],
		build: {
			sourcemap: false,
			minify: "esbuild",
		},
	},
});
