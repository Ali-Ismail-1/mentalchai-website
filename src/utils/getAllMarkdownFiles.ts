import fs from 'fs';
import path from 'path';

/**
 * Recursively finds all Markdown files in a directory
 * @param {string} dirPath - The directory path to read files from
 * @returns {string[]} - An array of file paths
 */
export default function getAllMarkdownFiles(dirPath: string): string[] {
  const absolutePath = path.join(process.cwd(), 'public', dirPath);
  const entries: fs.Dirent[] = fs.readdirSync(absolutePath, {
    withFileTypes: true,
  });
  const files: string[] = entries.flatMap((entry) => {
    const fullPath = path.join(absolutePath, entry.name);
    return entry.isDirectory() ? getAllMarkdownFiles(fullPath) : fullPath;
  });
  return files.filter((file) => file.endsWith('.md'));
}
