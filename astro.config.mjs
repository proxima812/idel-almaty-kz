import markdoc from "@astrojs/markdoc"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

export default defineConfig({
	site: "https://idel-almaty.kz/",
	compressHTML: true,
	prefetch: true,
	integrations: [mdx(), sitemap(), tailwind(), icon(), markdoc(), react()],
})
