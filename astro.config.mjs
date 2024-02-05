import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import markdoc from "@astrojs/markdoc"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"

export default defineConfig({
	site: "https://idel-almaty.kz/",
	compressHTML: true,
	prefetch: true,
	integrations: [mdx(), sitemap(), tailwind(), icon(), markdoc(), react()],
})
