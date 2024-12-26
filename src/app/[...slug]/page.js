// src/app/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

export default async function Page({ params }) {
  const slugArray = params.slug; // No need to await params.slug

  // Construct the file path dynamically
  const filePath =
    path.join(
      process.cwd(),
      'src/app',
      ...slugArray, // Spread the array to form the path
    ) + '.md';

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error('Page not found'); // Safely signal 404
  }

  // Read and process the Markdown file
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  // Generate breadcrumbs
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
      <article className="prose">
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const basePath = path.join(process.cwd(), 'src/app');
  const categories = ['islam', 'tech', 'mindset', 'wellness'];

  // Generate paths for Markdown files in categories
  const paths = categories.flatMap((category) => {
    const categoryPath = path.join(basePath, category);
    if (!fs.existsSync(categoryPath)) return [];

    return fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({
        slug: [category, file.replace('.md', '')], // Generate nested slug array
      }));
  });

  return paths;
}
