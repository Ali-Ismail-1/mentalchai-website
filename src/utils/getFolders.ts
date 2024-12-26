// src/utils/getFolders.js
import fs from 'fs';
import { Folder } from '@/types/folder';

/**
 * Reads Markdown files from a directory and returns an array of guides.
 * @param {string} dirPath - The path to the directory containing Markdown files.
 * @returns {Promise<Folder[]>} - An array of guides.
 */
export default async function getFolders(dirPath: string): Promise<Folder[]> {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((folder) => folder.name);
}
