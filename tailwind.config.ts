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
        },
        vibrant: {
          teal: 'var(--color-vibrant-teal)',
          amber: 'var(--color-vibrant-amber)',
          coral: 'var(--color-vibrant-coral)',
          indigo: 'var(--color-vibrant-indigo)',
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
