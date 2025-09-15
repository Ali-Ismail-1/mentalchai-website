// src/app/wellness/page.tsx
import Link from 'next/link';
import { Folder } from '@/types/folder';
import { listSectionFolders } from '@/lib/content';

export default function WellnessPage() {
    const folders = listSectionFolders('wellness');

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Wellness Resources</h1>
            {folders.length === 0 ? (<p>No topics available at the moment.</p>)
                : (
                    <ul className="space-y-4">
                        {folders.map((folder: Folder) => (
                            <li key={folder}>
                                <Link className='link' href={`/wellness/${folder}`}>
                                    {folder.charAt(0).toUpperCase() + folder.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

        </div>
    );
}
