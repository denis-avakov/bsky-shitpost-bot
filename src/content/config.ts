import { defineCollection, z } from 'astro:content';

export const collections = {
  nocontextscats: defineCollection({
    type: 'data',
    schema: z.object({
      content: z.string().optional(),
      image1: z.string().optional(),
      image2: z.string().optional(),
      image3: z.string().optional(),
      image4: z.string().optional(),
      postId: z.string().optional()
    })
  })
};
