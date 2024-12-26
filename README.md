# MentalChai

MentalChai is a personal knowledge hub for exploring topics like Software Engineering, Productivity, Islamic Resources, and Wellness. This project is built with Next.js and serves as both a learning resource and a portfolio showcase.

---

## Table of Contents

1. About
2. Features
3. Technology Stack
4. Folder Structure
5. Getting Started
6. Development Guidelines
7. Roadmap
8. Contributing
9. License

## About

MentalChai is designed to:

- Provide educational content in areas of personal and professional growth.
- Host guides, recipes, and other markdown-based resources.
- Showcase portfolio projects and tools.

Visit the live site at: [mentalchai.com](https://www.mentalchai.com)

---

## Features

- Dynamic Breadcrumbs: Navigate between pages with context.
- Content Organization: Categories like Islam, Productivity, Wellness, and Software Engineering.
- Markdown Support: Easily add guides or resources in .md files.
- SEO-Friendly URLs: Optimized slugs for each topic.
- Expandable Architecture: Clean folder structure for scalability.

---

## Technology Stack

- Framework: Next.js
- Styling: Tailwind CSS
- Markdown Parsing: remark
- Icons: React Icons
- Deployment: Vercel

---

## Folder Structure

```
mentalchai/
├── public/               # Static assets
├── src/
│   ├── app/              # Pages and routes
│   │   ├── islam/        # Islamic resources
│   │   ├── wellness/     # Wellness resources and recipes
│   │   ├── productivity/ # Productivity resources
│   │   ├── [slug]/       # Dynamic markdown rendering
│   └── components/       # Reusable components
│   └── styles/           # Global and Tailwind CSS
│   └── utils/            # Helper functions
│   └── types/            # TypeScript types
├── README.md             # Documentation
├── package.json          # Dependencies
└── next.config.js        # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js >=16
- npm >=7 or yarn >=1.22

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/mentalchai.git
cd mentalchai
```

2. Install dependencies:

`npm install` 3. Start the development server:

`npm run dev` 4. Open your browser at http://localhost:3000.

---

## Development Guidelines

- Use meaningful commit messages. Follow this format:

`<type>: <short summary>`
Examples:

    - feat: add breadcrumb navigation
    - fix: resolve ESLint issues
    - refactor: centralize guide fetching

- Write modular and reusable components in the components/ directory.
- Keep styles consistent using Tailwind CSS utilities.
- Test functionality locally before pushing changes.

---

## Roadmap

### Current Features

- Static markdown pages for guides and recipes.
- Dynamic breadcrumbs for improved navigation.
- SEO-friendly structure.

### Planned Features

- Add search functionality.
- Expand categories like "Wellness" and "Productivity."
- Integration with external APIs for enriched content.

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-name.
3. Commit your changes: git commit -m "feat: describe feature here".
4. Push to the branch: git push origin feature-name.
5. Open a pull request.

---

### License

No License (All Rights Reserved)

---

### Acknowledgments

- Next.js for the framework.
- Tailwind CSS for elegant styling.
- Remark for markdown parsing.
