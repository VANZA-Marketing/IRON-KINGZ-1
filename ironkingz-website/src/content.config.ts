import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    author: z.string().default('Iron Kingz Coaching Staff'),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    relatedProgram: z.string().optional(),
    relatedScheduleLabel: z.string().default('View the schedule'),
  }),
});

export const collections = { blog };
