export type LeadMagnet = {
  slug: string;
  title: string;
  description: string;
  ctaLabel: string;
  url: string; // final download or Substack gated link
  tags?: string[];
  stage?: 'stability' | 'clarity' | 'energy' | 'mastery' | 'perspective';
  featured?: boolean;
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: '5-duas-for-clarity-and-growth',
    title: '5 Duas for Clarity & Growth',
    description: 'A calming set of duas to anchor your days with purpose and presence.',
    ctaLabel: 'Get the guide',
    url: '#', // replace with final link
    tags: ['ihsan', 'clarity'],
    stage: 'stability',
    featured: true,
  },
  {
    slug: 'weekly-reflection-template',
    title: 'Weekly Reflection Template',
    description: 'A minimal review system to reset focus and keep momentum.',
    ctaLabel: 'Download template',
    url: '#',
    tags: ['clarity', 'productivity'],
    stage: 'clarity',
  },
  {
    slug: 'minimalist-habit-tracker',
    title: 'Minimalist Habit Tracker',
    description: 'A simple tracker to build sustainable rhythms without burnout.',
    ctaLabel: 'Grab the tracker',
    url: '#',
    tags: ['energy', 'habits'],
    stage: 'energy',
  },
];
