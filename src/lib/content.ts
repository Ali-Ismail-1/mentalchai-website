import path from 'path';
import fs from 'fs';
import getFolders from '@/utils/getFolders';
import { getSectionDir } from '@/lib/paths';
import { getGuides } from '@/utils/getGuides';
import type { Guide } from '@/types/guide';
import type { Folder } from '@/types/folder';

export function listSectionGuides(section: string): Guide[] {
    return getGuides(getSectionDir(section));
}

export function listSectionFolders(section: string): Folder[] {
    return getFolders(getSectionDir(section));
}

const ROOT = path.join(process.cwd(), 'public', 'content', 'markdown');
function walk(dir: string): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = entries.flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : p;
    });
    return files.filter((f) => f.endsWith('.md'));
}

export function getAllContentRoutes(): string[] {
    return walk(ROOT).map((abs) =>
        '/' + path.relative(ROOT, abs).replace(/\\/g, '/').replace(/\.md$/, '')
    );
}