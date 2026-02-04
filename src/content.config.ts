import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

/**
 * Posts
 */
const posts = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/posts/" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			heroImage: image().optional(),
			draft: z.boolean().default(false),
		}),
});

/**
 * Stories
 */
const stories = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/stories" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			old: z.string().optional(),
			image: image().optional(),
			date: z.string().optional(),
			inst: z.string().optional(),
			style: z.string().default("bg-orange-50 border-orange-200"),
		}),
});

/**
 * Pages
 */
const pages = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/pages" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			index: z.boolean().optional(),
		}),
});

export const collections = {
	posts,
	stories,
	pages,
};
