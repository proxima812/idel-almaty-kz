import markdoc from "@astrojs/markdoc"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import keystatic from "@keystatic/astro"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

import metaTags from "astro-meta-tags"

// https://astro.build/config
export default defineConfig({
	site: "https://idel-almaty.kz/",
	prefetch: true,
	integrations: [
		mdx(),
		keystatic(),
		sitemap(),
		tailwind(),
		icon(),
		markdoc(),
		react(),
		metaTags(),
	],
	output: "hybrid",
	adapter: vercel(),
})
