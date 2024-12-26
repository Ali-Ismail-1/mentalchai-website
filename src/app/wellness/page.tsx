// src/app/wellness/page.tsx
import path from 'path';
import Link from 'next/link';
import getFolders from '@/utils/getFolders';
import { Folder } from '@/types/folder';

export default async function WellnessPage() {
    const dirPath = path.join(process.cwd(), 'src/app/wellness');

    let folders: Folder[] = [];
    try {
        folders = await getFolders(dirPath);
    }
    catch (error) {
        console.error("Error fetching guides: ", error);
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Wellness Resources</h1>
            {folders.length === 0 ? (<p>No topics available at the moment.</p>)
                : (
                    <ul className="space-y-4">
                        {folders.map((folder) => (
                            <li key={folder}>
                                <Link href={`/wellness/${folder}`}>
                                    {folder.charAt(0).toUpperCase() + folder.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

        </div>
    );
}
