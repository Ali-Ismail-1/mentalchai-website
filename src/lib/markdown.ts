import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSanitize from 'rehype-sanitize';
import { defaultSchema } from 'hast-util-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeImages from '@/lib/rehype-images';

export async function renderMarkdown(markdown: string): Promise<string> {
  // Loosen sanitize schema to allow classes and data-attrs from plugins
  const schema = JSON.parse(JSON.stringify(defaultSchema));
  schema.attributes = {
    ...schema.attributes,
    a: [...(schema.attributes?.a || []), ['target'], ['rel']],
    code: [...(schema.attributes?.code || []), ['className']],
    pre: [...(schema.attributes?.pre || []), ['className']],
    span: [...(schema.attributes?.span || []), ['className', 'style']],
    div: [...(schema.attributes?.div || []), ['className', 'data-*']],
    img: [...(schema.attributes?.img || []), ['loading'], ['decoding'], ['sizes'], ['className']],
  };

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
    .use(rehypePrettyCode, { theme: 'github-dark', keepBackground: false })
    .use(rehypeImages)
    .use(rehypeSanitize, schema)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}
