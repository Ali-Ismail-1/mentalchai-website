import type { Root } from 'hast';
import { visit } from 'unist-util-visit';

export default function rehypeImages() {
  return (tree: Root) => {
    visit(tree, 'element', (node: any) => {
      if (node.tagName !== 'img') return;
      node.properties = {
        ...(node.properties || {}),
        loading: 'lazy',
        decoding: 'async',
        sizes: node.properties?.sizes || '(min-width: 768px) 768px, 100vw',
        className: ['mx-auto', 'my-4', ...(node.properties?.className || [])],
      };
    });
  };
}