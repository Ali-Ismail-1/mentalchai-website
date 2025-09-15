import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        calm: {
          beige: 'var(--color-calm-beige)',
          charcoal: 'var(--color-calm-charcoal)',
          grayblue: 'var(--color-calm-grayblue)',
          sand: 'var(--color-calm-sand)',
          base: "#FAFAF8",     // soft off-white (backgrounds)
          sage: "#A8BDA0",     // grounded green, natural          
        },
        vibrant: {
          // amber: 'var(--color-vibrant-amber)',
          // coral: 'var(--color-vibrant-coral)',
          // indigo: 'var(--color-vibrant-indigo)',
          // teal: 'var(--color-vibrant-teal)',
          amber: "#E6B74E",    // warm CTA (softer golden amber)
          teal: "#2AB7CA",     // fresh clarity accent
          coral: "#F25F5C",    // energy + creativity
          indigo: "#3F51B5",   // depth, reflection
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
