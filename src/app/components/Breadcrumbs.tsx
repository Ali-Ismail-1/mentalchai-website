type Props = { segments: string[] };

export default function Breadcrumbs({ segments }: Props) {
  return (
    <nav className="mb-4 text-gray-600">
      <a href="/" className="text-blue-600 hover:underline">home</a>
      {' > '}
      {segments.map((seg, i) => {
        const href = '/' + segments.slice(0, i + 1).join('/');
        return (
          <span key={href}>
            <a href={href} className="text-blue-600 hover:underline">
              {seg.replace(/-/g, ' ')}
            </a>
            {i < segments.length - 1 && ' > '}
          </span>
        );
      })}
    </nav>
  );
}
