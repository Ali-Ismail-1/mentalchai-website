// src/app/wellness/recipes/page.tsx
import path from 'path';
import Link from 'next/link';
import { getGuides } from '@/utils/getGuides';
import { Guide } from '@/types/guide';

export default async function RecipesPage() {

    const dir = path.join(process.cwd(), 'src/app/wellness/recipes');

    let guides: Guide[] = [];
    try {
        guides = await getGuides(dir);
    }
    catch (error) {
        console.error("Error fetching guides: ", error);
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">Recipes</h1>
            <ul className="space-y-4">
                {guides.map((guide) => (
                    <li key={guide.slug}>
                        <Link className='link' href={`/wellness/recipes/${guide.slug}`}>
                            {guide.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}
