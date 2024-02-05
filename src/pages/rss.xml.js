import rss from "@astrojs/rss"
import { getCollection } from "astro:content"

export async function GET(context) {
	const posts = await getCollection("posts")
	return rss({
		title: "Татаро-Башкирский центр Идел - Алматы",
		description:
			'Молодежь и взрослые приглашают вас в наш Татаро-Башкирский центр "Идель".',
		site: context.site,
		items: posts.map(post => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	})
}
