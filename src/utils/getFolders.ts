// src/utils/getFolders.js
import fs from 'fs';
import { Folder } from '@/types/folder';

/**
 * Reads Markdown files from a directory and returns an array of guides.
 * @param {string} dirPath - The path to the directory containing Markdown files.
 * @returns {Promise<Folder[]>} - An array of guides.
 */
export default function getFolders(dirPath: string): Folder[] {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry: fs.Dirent) => entry.isDirectory())
    .map((folder: fs.Dirent) => folder.name);
}
