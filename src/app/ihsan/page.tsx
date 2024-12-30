// src/app/islam/page.tsx
import path from 'path';
import Link from 'next/link';
import { getGuides } from '@/utils/getGuides';
import { Guide } from '@/types/guide';

export default async function IslamPage() {

    const dir = path.join(process.cwd(), 'src/app/ihsan');

    let guides: Guide[] = [];
    try {
        guides = await getGuides(dir);
    }
    catch (error) {
        console.error("Error fetching guides: ", error);
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Ihsan: Living with Excellence</h1>
            <hr className="my-8" />
            <h2 className="text-2xl font-semibold mb-4">Introduction (What is Ihsan?)</h2>
            <p>
                Ihsan means striving for excellence in all aspects of life—whether it’s
                how you approach your goals, relationships, or spiritual growth.
                At its core, Ihsan is about living with intentionality, mindfulness, and dedication
                to achieving the best version of yourself.
            </p>
            <hr className="my-8" />
            <h2 className="text-2xl font-semibold mb-4">Explore Topics</h2>
            <ul className="space-y-4">
                {guides.map((guide) => (
                    <li key={guide.slug}>
                        <Link className='link' href={`/ihsan/${guide.slug}`}>
                            {guide.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}
