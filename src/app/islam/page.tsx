// src/app/islam/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function IslamPage() {

    const dir = path.join(process.cwd(), 'src', 'app', 'islam');
    const files = fs.readdirSync(dir).filter(file => file.endsWith('.md'));

    const guides = files.map((file) => {
        const filePath = path.join(dir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: file.replace('.md', ''),
            title: data.title || file.replace('.md', ''),
            description: data.description || '',
        };
    });

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Islamic Resources</h1>
            <ul className="space-y-4">
                {guides.map((guide) => (
                    <li key={guide.slug}>
                        <Link href={`/islam/${guide.slug}`}>
                            {guide.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}
