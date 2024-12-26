// src/app/[slug]/page.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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

  return (
    <article className="prose">
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
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
