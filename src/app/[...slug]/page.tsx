import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import type { Metadata } from 'next';

const CONTENT_ROOT = path.join(process.cwd(), 'public', 'content', 'markdown');

function walkMd(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walkMd(p) : p;
  });
  return files.filter((f) => f.endsWith('.md'));
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  const files = walkMd(CONTENT_ROOT);
  return files.map((abs) => {
    const rel = path.relative(CONTENT_ROOT, abs).replace(/\\/g, '/'); // windows-safe
    const parts = rel.replace(/\.md$/, '').split('/');
    return { slug: parts };
  });
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string[] }> }
): Promise<Metadata> {
  const { slug } = await params;
  const files = walkMd(CONTENT_ROOT);

  const match = files.find((abs) => {
    const rel = path.relative(CONTENT_ROOT, abs).replace(/\\/g, '/');
    const parts = rel.replace(/\.md$/, '').split('/');
    return parts.join('/') === slug.join('/');
  });

  if (!match) return { title: slug[slug.length - 1] };

  const { data } = matter(fs.readFileSync(match, 'utf8'));
  const title = (data as any).title || slug[slug.length - 1];
  const description = (data as any).description;

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: 'summary', title, description },
  };
}

type PageProps = { params: Promise<{ slug: string[] }> };

export default async function Page({ params }: PageProps) {
  const { slug: slugArray } = await params;
  const slug = slugArray[slugArray.length - 1];

  const markdownFiles = walkMd(CONTENT_ROOT);

  const matchingFile = markdownFiles.find((file: string) => {
    const fileContents = fs.readFileSync(file, 'utf8');
    const { data } = matter(fileContents);
    const fileSlug = (data as any).slug || path.basename(file, '.md');
    // Prefer exact path match; fallback to last segment match for older files
    const rel = path.relative(CONTENT_ROOT, file).replace(/\\/g, '/').replace(/\.md$/, '');
    const parts = rel.split('/');
    return parts.join('/') === slugArray.join('/') || fileSlug === slug;
  });

  if (!matchingFile) {
    throw new Error(`Page not found for: ${slugArray.join('/')}`);
  }

  const fileContents = fs.readFileSync(matchingFile, 'utf8');
  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const breadcrumbs = slugArray.map((segment: string, index: number) => {
    const href = '/' + slugArray.slice(0, index + 1).join('/');
    return (
      <span key={href}>
        <Link href={href} className="text-blue-600 hover:underline">
          {segment.replace(/-/g, ' ')}
        </Link>
        {index < slugArray.length - 1 && ' > '}
      </span>
    );
  });

  return (
    <div className="p-6">
      <nav className="mb-4 text-gray-600">
        <Link href="/" className="text-blue-600 hover:underline">
          home
        </Link>
        {' > '}
        {breadcrumbs}
      </nav>
      <article className="prose mx-auto">
        <h1>{(data as { title?: string }).title || slug}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}