import { z, defineCollection } from 'astro:content'

const projectSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    description: z.string(),
    author: z.string(),
    featuredImage: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tags: z.array(z.string())
  })
})

export default projectSchema
