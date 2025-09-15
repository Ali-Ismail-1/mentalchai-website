import { z } from 'zod';

export const ContentMeta = z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    slug: z.string().min(1).optional(),
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),
});

export type ContentMeta = z.infer<typeof ContentMeta>;