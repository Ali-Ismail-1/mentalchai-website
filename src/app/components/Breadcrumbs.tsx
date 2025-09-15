// src/app/components/Breadcrumbs.tsx
import Link from 'next/link';

type Props = { segments: string[] };

export default function Breadcrumbs({ segments }: Props) {
  return (
    <nav className="mb-4 text-gray-600">
      <Link href="/" className="text-blue-600 hover:underline">home</Link>
      {' > '}
      {segments.map((seg, i) => {
        const href = '/' + segments.slice(0, i + 1).join('/');
        return (
          <span key={href}>
            <Link href={href} className="text-blue-600 hover:underline">
              {seg.replace(/-/g, ' ')}
            </Link>
            {i < segments.length - 1 && ' > '}
          </span>
        );
      })}
    </nav>
  );
}
