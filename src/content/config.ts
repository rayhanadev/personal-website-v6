import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    duration: z.coerce.string(),
    order: z.number(),
  }),
});

export const collections = { blog, work };
