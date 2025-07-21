// src/content/config.ts
import { defineCollection, z } from "astro:content";

const news = defineCollection({
    schema: z.object({
        title: z.string(),
        date: z.string(), // YYYY-MM-DD
        body: z.string().optional(),
    }),
});

export const collections = {
    news: news,
};
