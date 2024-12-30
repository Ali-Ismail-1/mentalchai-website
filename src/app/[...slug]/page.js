// src/app/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import getAllMarkdownFiles from '@/utils/getAllMarkdownFiles';

export default async function Page({ params }) {
  const slugArray = params.slug;
  const slug = slugArray[slugArray.length - 1];

  const markdownFiles = getAllMarkdownFiles(
    path.join(process.cwd(), 'src/app'),
  );

  const matchingFile = markdownFiles.find((file) => {
    const fileContents = fs.readFileSync(file, 'utf8');
    const { data } = matter(fileContents);
    const fileSlug = data.slug || path.basename(file, '.md');
    return fileSlug === slug;
  });

  if (!matchingFile) {
    throw new Error('Page not found');
  }

  const fileContents = fs.readFileSync(matchingFile, 'utf8');
  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const breadcrumbs = slugArray.map((slug, index) => {
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
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}
