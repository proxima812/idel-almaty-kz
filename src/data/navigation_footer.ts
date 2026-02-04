import { navigation } from "@/data/navigation"
import { getCollection } from "astro:content"

const posts = await getCollection("posts")

export const navigation_footer = [
	{
		category: "Страницы",
		colunm1: navigation,
	},

	{
		category: "Последние события",
		colunm1: posts.map(post => ({
			label: post.data.title,
			href: `/posts/${post.id}/`,
			// target: "_blank",
			icon: "mdi:progress-pencil",
			style: "",
		})),
	},

	{
		category: "Ссылки",
		colunm2: [
			{
				label: "Instagram центра",
				href: "https://www.instagram.com/idel_almaty_tatarskyi_centre/",
				target: "_blank",
				icon: "mdi:instagram",
				style: "underline-offset-4 text-blue-600 underline",
			},
			{
				label: "Адрес центра",
				href: "https://2gis.kz/almaty/inside/9430047375029842/firm/70000001033413849?m=76.951173%2C43.255886%2F20",
				target: "_blank",
				icon: "mdi:google-maps",
				style: "underline-offset-4 text-blue-600 underline",
			},
		],
	},
]
