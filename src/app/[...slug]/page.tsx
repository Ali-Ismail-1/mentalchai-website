// src/app/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

type PageProps = { params: Promise<{ slug: string[] }> };

export default async function Page({ params }: PageProps) {  
  const { slug: slugArray } = await params;
  const slug = slugArray[slugArray.length - 1];

  const markdownDir = path.join(process.cwd(), 'public/content/markdown');
  const markdownFiles = getMarkdownFiles(markdownDir);

  const matchingFile = markdownFiles.find((file: string) => {
    const fileContents = fs.readFileSync(file, 'utf8');
    const { data } = matter(fileContents);
    const fileSlug = data.slug || path.basename(file, '.md');
    return fileSlug === slug;
  });

  if (!matchingFile) {
    throw new Error(`Page not found for: ${slug}`);
  }

  const fileContents = fs.readFileSync(matchingFile, 'utf8');
  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const breadcrumbs = slugArray.map((slug: string, index: number) => {
    const href = '/' + slugArray.slice(0, index + 1).join('/');
    return (
      <span key={href}>
        <Link href={href} className="text-blue-600 hover:underline">
          {slug.replace(/-/g, ' ')}
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
        <h1>{(data as { title: string }).title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}

// Utility function to get all markdown files in a directory
/**
 * Recursively finds all Markdown files in a directory
 * @param {string} dirPath - The directory path to read files from
 * @returns {string[]} - An array of file paths
 */
function getMarkdownFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap((entry: fs.Dirent) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? getMarkdownFiles(fullPath) : fullPath;
  });
  return files.filter((file: string) => file.endsWith('.md'));
}
