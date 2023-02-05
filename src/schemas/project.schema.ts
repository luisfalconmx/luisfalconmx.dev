import { z, defineCollection } from 'astro:content'

const projectSchema = defineCollection({
  schema: z.object({
    name: z.string(),
    caption: z.string(),
    client: z.string(),
    task: z.string(),
    publishDate: z.string().transform((str) => new Date(str)),
    link: z.string().url(),
    previewImage: z.object({
      src: z.string(),
      alt: z.string()
    }),
    featuredImage: z.object({
      src: z.string(),
      alt: z.string()
    }),
  })
})

export default projectSchema
