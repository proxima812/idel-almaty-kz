import { collection, config, fields } from "@keystatic/core";

export default config({
	storage: { kind: "local" },
	// storage: {
	// 	kind: "github",
	// 	repo: "proxima812/idel-almaty-kz",
	// },
	collections: {
		posts: collection({
			label: "Посты",
			slugField: "title",
			path: "src/data/posts/*",
			entryLayout: "content",
			columns: ["title", "pubDate", "draft"],
			format: {
				contentField: "content",
			},
			schema: {
				title: fields.slug({ name: { label: "Заголовок" } }),
				description: fields.text({
					label: "Описание",
					description: "от 20 до 150 символов",
				}),
				pubDate: fields.date({
					label: "Время",
					description: "Время публикации",
				}),
				heroImage: fields.image({
					label: "Фото поста",
					directory: "src/assets/images/posts",
					publicPath: "../../assets/images/posts/",
				}),
				draft: fields.checkbox({
					label: "Draft",
					description: "Set this post as draft to prevent it from being published",
				}),
				content: fields.mdx({
					label: "Контент",
					description: "",
					options: {
						image: {
							directory: "src/assets/images/posts",
							publicPath: "../../assets/images/posts/",
						},
					},
				}),
			},
		}),
		stories: collection({
			label: "Личные истории",
			slugField: "title",
			path: "src/data/stories/*",
			entryLayout: "content",
			columns: ["title", "old"],
			format: {
				contentField: "content",
			},
			schema: {
				title: fields.slug({ name: { label: "Заголовок" } }),
				// description: fields.text({
				// 	label: "Описание",
				// 	description: "от 20 до 150 символов",
				// }),
				old: fields.text({
					label: "Возраст",
					description: "18 лет",
				}),
				image: fields.image({
					label: "Фото человека",
					directory: "src/assets/images/posts",
					publicPath: "../../assets/images/posts/",
				}),

				content: fields.mdx({
					label: "Контент",
					description: "",
					options: {
						image: {
							directory: "src/assets/images/stories",
							publicPath: "../../assets/images/stories/",
						},
					},
				}),
			},
		}),
		pages: collection({
			label: "Страницы",
			slugField: "title",
			path: "src/data/pages/*",
			entryLayout: "content",
			format: {
				contentField: "content",
			},
			schema: {
				title: fields.slug({ name: { label: "Заголовок страницы" } }),
				description: fields.text({
					label: "Описание страницы",
					description: "до 145 символов",
				}),
				// ogImage: fields.image({
				// 	label: "ogImage (изображение страницы 1200x630)",
				// 	directory: "src/assets/images/pages",
				// 	publicPath: "../../assets/images/pages/",
				// }),
				index: fields.checkbox({
					label: "index norobots",
					description: "Set this post as draft to prevent it from being published",
				}),
				content: fields.mdx({
					label: "Контент",
					description: "",
					options: {
						image: {
							directory: "src/assets/images/pages",
							publicPath: "../../assets/images/pages/",
						},
					},
				}),
			},
		}),
	},
});
