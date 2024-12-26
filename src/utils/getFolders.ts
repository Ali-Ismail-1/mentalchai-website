// src/utils/getFolders.js
import fs from 'fs';
import path from 'path';

export default async function getFolders(dirPath: string): Promise<string[]> {
  return fs
    .readdirSync(dirPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((folder) => folder.name);
}
