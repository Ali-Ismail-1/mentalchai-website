// src/app/wellness/recipes/page.tsx
import Link from 'next/link';
import { listSectionGuides } from '@/lib/content';

export default function RecipesPage() {

    const guides = listSectionGuides('wellness/recipes');

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
