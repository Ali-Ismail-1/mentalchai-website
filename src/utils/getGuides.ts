// src/utils/getGuides.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Guide } from '@/types/guide';
import { ContentMeta } from '@/types/content';

/**
 * Reads Markdown files from a directory and returns an array of guides.
 * @param {string} dirPath - The path to the directory containing Markdown files.
 * @returns {Guide[]} - An array of guides.
 */
export function getGuides(dirPath: string): Guide[] {
  const files = fs.readdirSync(dirPath).filter((file: string) => file.endsWith('.md'));

  return files.flatMap((file: string) => {
    const filePath = path.join(dirPath, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    const parsed = ContentMeta.safeParse(data);
    if (!parsed.success) {
      return [];
    }

    const meta = parsed.data;
    const slug = meta.slug || file.replace('.md', '');
    return [{
      slug,
      title: meta.title,
      description: meta.description || '',
    }];
  });
}
