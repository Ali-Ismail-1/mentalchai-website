import Link from 'next/link';
import { leadMagnets } from '@/lib/leadMagnets';

export const metadata = { title: 'Guides – Mentalchai', description: 'Free downloads and practical tools.' };

export default function GuidesPage() {
  return (
    <div className="px-4 py-10 md:px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Guides</h1>
      <p className="mb-8 text-gray-600">Free downloads to help you build clarity, resilience, and sustainable momentum.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadMagnets.map((g) => (
          <div key={g.slug} className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{g.title}</h2>
            <p className="text-gray-600 mb-4">{g.description}</p>
            <Link href={g.url} className="inline-block bg-amber-400 text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-amber-300">
              {g.ctaLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
