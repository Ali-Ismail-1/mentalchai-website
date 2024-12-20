module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended', // Prettier integration
  ],
  ignores: [
    '**/.next/**',
    '**/node_modules/**',
    'logs/**', // Ignore logs directory
    '*.log', // Ignore log files
    '.env', // Ignore environment files
    '.env.*', // Ignore environment files with extensions
    'dist/**', // Ignore dist directory
    'out/**', // Ignore out directory
    'build/**', // Ignore build directory
    'coverage/**', // Ignore test coverage directory
    'public/**', // Ignore static assets in public
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
