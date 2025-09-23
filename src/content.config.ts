import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string().optional(),
    lessons: z.object({
      number: z.number(),
      title: z.string(),
      videoId: z.string(),
      duration: z.string().optional(),
      description: z.string().optional(),
      content: z.string().optional(),
    }).array(),
    level: z.enum(['Beginner', 'Intermediate', 'Expert']),
    duration: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { courses };