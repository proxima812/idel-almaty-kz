import { defineCollection, z } from "astro:content"

const posts = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			// updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			draft: z.boolean().default(false).optional(),
		}),
})
const stories = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
      title: z.string(),
      old: z.string().optional(),
      // description: z.string().optional(),
			image: image().optional(),
		}),
})
const pages = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			ogImage: image().optional(),
			index: z.boolean().optional(),
		}),
})

export const collections = { posts, pages, stories }
