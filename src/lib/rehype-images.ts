import type { Root, Element } from 'hast';
import { visit } from 'unist-util-visit';

type ImgProperties = {
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
  className?: string[] | string;
  [key: string]: unknown;
};

export default function rehypeImages() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'img') return;

      const props = (node.properties ?? {}) as ImgProperties;

      node.properties = {
        ...props,
        loading: props.loading ?? 'lazy',
        decoding: props.decoding ?? 'async',
        sizes: props.sizes ?? '(min-width: 768px) 768px, 100vw',
        className: Array.isArray(props.className)
          ? ['mx-auto', 'my-4', ...props.className]
          : ['mx-auto', 'my-4'],
      };
    });
  };
}