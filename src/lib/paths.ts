import path from 'path';

const ROOT = path.join(process.cwd(), 'public', 'content', 'markdown');

// Accepts 'ihsan' or 'wellness/recipes'
export function getSectionDir(section: string): string {
    const normalized = section.replace(/\//g, '-');
    return path.join(ROOT, ...normalized.split('/'));
}