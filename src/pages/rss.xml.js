import { SITE_INFO } from "@/consts"
import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
	const posts = await getCollection("posts")
	return rss({
		title: SITE_INFO.MAIN_TITLE,
		description: SITE_INFO.MAIN_DESCRIPTION,
		site: context.site,
		items: posts.map(post => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	})
}
