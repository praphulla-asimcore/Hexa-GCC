export interface Academy {
  number: string;
  code: string;
  name: string;
  tagline: string;
  modules: string[];
}

export const academies: Academy[] = [
  {
    number: '01',
    code: 'CORE',
    name: 'Hexamatics Core Academy',
    tagline: 'The baseline every hire completes, regardless of role.',
    modules: ['Hexamatics Orientation', 'Professional Conduct', 'Data Privacy', 'Quality Mindset'],
  },
  {
    number: '02',
    code: 'SKILLS',
    name: 'Professional Skills Academy',
    tagline: 'The soft skills that determine how well the work lands with you.',
    modules: [
      'Communication',
      'Networking',
      'Creative Thinking',
      'Analytical Thinking',
      'Adaptability & Flexibility',
      'Value-Driven Professional Leadership',
      'Business Etiquette',
      'Entrepreneurship',
      'Sustainability & Environment',
    ],
  },
  {
    number: '03',
    code: 'FIN',
    name: 'Finance & Accounting Academy',
    tagline: 'Technical accounting depth, from fundamentals through governance.',
    modules: [
      'Accounting Fundamentals',
      'Accounts Payable & Receivable',
      'Reporting & Analysis',
      'Audit, Control & Governance',
      'Tax & Compliance',
    ],
  },
  {
    number: '04',
    code: 'TECH',
    name: 'Technology Academy',
    tagline: 'The technical literacy a modern finance or ops hire needs.',
    modules: ['Cybersecurity Awareness Programs', 'Efficient Use of AI and Prompts'],
  },
];
