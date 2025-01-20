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
            <h1 className="text-4xl font-extrabold mb-6">Ihsan: Living with Excellence</h1>
            <hr className="my-8" />

            <h2 className="text-2xl font-semibold mb-4">What is Ihsan?</h2>
            <p className="mb-6">
                Imagine living a life where every action feels intentional, purposeful, and aligned with a higher sense of being.
                This is the essence of Ihsan—living with excellence.
            </p>

            <h2 className="text-2xl font-semibold mb-4">The Journey to Excellence</h2>

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Level 1 - Peace</h3>
                <p>
                    Find comfort in surrendering your struggles to a higher, infinite power. This is where peace begins.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Level 2 - Connection</h3>
                <p>
                    Open the doorway to an intimate relationship with the ultimate source of love, mercy, and strength.
                    Let this connection guide your thoughts, actions, and decisions with clarity and purpose.
                </p>
            </div>

            <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-blue-800">Level 3 - Excellence</h3>
                <p>
                    Live each moment with the awareness that you are lovingly watched over. This awareness transforms your life into one of excellence.
                </p>
            </div>
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
