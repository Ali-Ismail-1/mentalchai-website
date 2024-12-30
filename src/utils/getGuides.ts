// src/utils/getGuides.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Guide } from '@/types/guide';

/**
 * Reads Markdown files from a directory and returns an array of guides.
 * @param {string} dirPath - The path to the directory containing Markdown files.
 * @returns {Promise<Guide[]>} - An array of guides.
 */
export async function getGuides(dirPath: string): Promise<Guide[]> {
  const files = fs.readdirSync(dirPath).filter((file) => file.endsWith('.md'));

  return files.map((file) => {
    const filePath = path.join(dirPath, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: data.slug || file.replace('.md', ''),
      title: data.title || file.replace('.md', ''),
      description: data.description || '',
    };
  });
}
