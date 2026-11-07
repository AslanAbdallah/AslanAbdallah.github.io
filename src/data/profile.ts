// ─────────────────────────────────────────────────────────────────────────────
// THIS IS THE FILE YOU EDIT.
// Every word on the website comes from here. Change the text, save, commit,
// and the site republishes itself in about a minute.
// ─────────────────────────────────────────────────────────────────────────────
import type { Profile } from './types';

// Project screenshots live in src/assets/projects/. To swap one, replace the file
// (keep the name) or import a new file here and point the project's `image` at it.
import mihwarShot from '../assets/projects/mihwar.png';
import finacastShot from '../assets/projects/finacast.png';

export const profile: Profile = {
  name: 'Abdallah Nezar',
  fullName: 'Abdallah Nezar Abdallah',
  initials: 'AN',
  role: 'IT & Finance Manager',
  location: 'Amman, Jordan',
  headline: 'I run finance and build the software behind it.',
  intro:
    'IT & Finance Manager at a multi-brand F&B group in Amman. I own the month-end close, budgets and management reporting, and I build the ERP and in-house apps every branch runs on. Founder of Mihwar and FinaCast.',

  // cvUrl: '/abdallah-nezar-cv.pdf',

  seo: {
    title: 'Abdallah Nezar — IT & Finance Manager, Odoo ERP, Process Automation',
    description:
      'Finance and technology in one person: month-end close, budgeting and FP&A, Odoo 18 ERP, and production software built with AI coding agents. Founder of Mihwar and FinaCast. Based in Amman, Jordan.',
  },

  sections: {
    about: {
      title: 'Finance and technology, run by the same person',
      lede: 'Most companies keep finance and IT in separate rooms. I sit in both, so the numbers, the systems and the people who use them line up.',
    },
    work: {
      title: 'Selected work',
      lede: 'Two products I founded, the apps a restaurant group runs on every day, and the Odoo modules I publish.',
    },
    experience: {
      title: 'Experience',
      lede: 'Five years in software quality assurance, then running finance and the systems behind it since 2022.',
    },
    skills: { title: 'What I work with' },
    education: { title: 'Education & certifications' },
  },

  stats: [
    { value: '2,500+', label: 'digital checklists completed' },
    { value: '8,000+', label: 'stock requests processed' },
    { value: '800+', label: 'automated tests in production apps' },
    { value: 'Daily', label: 'management P&L, up from weekly' },
  ],

  pillars: [
    {
      title: 'Finance & FP&A',
      summary: 'Close the books, plan the year, and know where the money goes — every day, not every month.',
      points: [
        'Month-end close, GST filings and external audit',
        'Annual budget and monthly targets per branch',
        'Budget vs. actual and variance analysis',
        'Daily cost control: food cost, waste and purchasing',
        'Management P&L by branch and cash flow',
      ],
    },
    {
      title: 'Odoo ERP',
      summary: 'Odoo 18 Enterprise, set up and extended to fit how the business actually runs.',
      points: [
        'Functional and technical: POS, inventory, purchasing, MRP, accounting, HR',
        'Custom modules built on top of core Odoo',
        'Integrations, such as KayanHR attendance and shifts',
        'Codebase audits and costed upgrade plans',
      ],
    },
    {
      title: 'Software & automation',
      summary: 'Production apps built with AI coding agents and held to a QA standard.',
      points: [
        'Written spec, plan, automated tests and review before release',
        'Next.js, FastAPI, Python and PostgreSQL',
        'AI features people use daily: e-learning, auditing, form digitising',
        'Five years of QA: Selenium, API and regression testing',
      ],
    },
  ],

  projects: [
    {
      name: 'Mihwar',
      kind: 'F&B operations platform',
      featured: true,
      description:
        'An Arabic-first operations platform for multi-branch restaurants, cloud kitchens and small factories: checklists, scored inspections, follow-ups, AI-drafted ordering, scheduling, labels, work orders and versioned SOPs. It ships regulator inspection packs (SFDA, Dubai Municipality, JFDA, HACCP) with tamper-evident records.',
      highlights: [
        'AI that turns paper forms into bilingual checklists',
        'SAML SSO and role-based access control',
        'Free tier and paid plans; recruiting design partners in Riyadh and Amman',
      ],
      stack: ['Next.js 15', 'Turborepo', 'PostgreSQL', 'Python ML'],
      role: 'Founder — product, architecture and delivery',
      link: { label: 'mihwar.tech', href: 'https://mihwar.tech/' },
      image: {
        src: mihwarShot,
        alt: 'Mihwar home page: “The one place your day runs from”, beside a dashboard showing checks, follow-ups and orders across six branches.',
      },
    },
    {
      name: 'FinaCast',
      kind: 'Financial forecasting & FP&A',
      featured: true,
      description:
        'Upload a P&L in Excel or CSV and get dashboards with 25+ ratios, anomaly detection, scenario planning and forecasts with confidence intervals. A model-selection engine backtests 20+ models per account and keeps the best fit.',
      highlights: ['Built for CFOs and FP&A teams in MENA', '20+ forecasting models backtested per account'],
      stack: ['Python', 'FastAPI', 'Next.js', 'Prophet', 'XGBoost', 'LSTM / TFT / N-BEATS'],
      role: 'Solo founder — product, architecture, delivery and deployment',
      link: { label: 'finacast.up.railway.app', href: 'https://finacast.up.railway.app/' },
      image: {
        src: finacastShot,
        alt: 'FinaCast home page: “Financial dashboards and AI forecasting in one platform”, above an analytics dashboard with growth metrics and key ratios.',
      },
    },
    {
      name: 'Branch operations apps',
      kind: 'In-house apps at Jaha.co',
      description:
        'Replaced paper forms and emailed reports with apps every branch uses daily for food safety, stock counts, quality inspections, ordering and branch reporting.',
      highlights: [
        '2,500+ checklists and 8,000+ stock requests to date',
        '800+ automated tests behind the apps in production',
        'Staff e-learning with AI-drafted courses built from company SOPs',
        'A daily AI auditor that checks company systems and flags issues',
      ],
      stack: ['Odoo 18', 'Python', 'PostgreSQL', 'Claude Code'],
      role: 'Owner — built and run in-house',
    },
    {
      name: 'Odoo modules',
      kind: 'Open source',
      description:
        'Modules I publish for Odoo: POS Marked Products, which flags special products at the till, and Purchase Custom Sequence, which lets purchase orders use their own numbering.',
      highlights: [],
      stack: ['Odoo', 'Python', 'XML'],
      role: 'Author',
      link: { label: 'GitHub repository', href: 'https://github.com/AslanAbdallah/Odoo-Modules' },
    },
  ],

  experience: [
    {
      roles: [
        {
          title: 'IT & Finance Manager',
          company: 'Jahangir for Operations & Management (Jaha.co)',
          location: 'Amman, Jordan',
          start: 'Feb 2022',
          end: 'Present',
        },
      ],
      summary: 'Multi-brand F&B group. I run both finance and technology.',
      groups: [
        {
          heading: 'Finance & reporting',
          points: [
            'Own the month-end close, sales-tax (GST) filings and the external audit; train accounting staff and managers on ERP-driven finance workflows.',
            'Lead the annual budget and set monthly targets in an in-house budget builder that publishes them straight to every branch’s tills.',
            'Drive cost control across all branches (food cost, waste and purchasing), tracked daily against budget.',
            'Moved management P&L reporting from weekly to daily: branch dashboards for sales, food cost, margin and budget pace, plus P&L by branch and cash flow.',
          ],
        },
        {
          heading: 'ERP & operations systems',
          points: [
            'Own the Odoo 18 Enterprise ERP end to end, functional and technical, plus the custom modules built on top of it.',
            'Replaced paper forms and emailed reports with in-house apps used daily in every branch (2,500+ checklists and 8,000+ stock requests to date).',
            'Integrated KayanHR with the ERP so employees, attendance and shifts sync automatically, feeding staff-meal control at the till.',
            'Led a full audit of the ERP codebase covering security, maintainability and upgrade effort, with a costed plan for the next major version.',
          ],
        },
        {
          heading: 'AI & automation',
          points: [
            'Build software with AI coding agents (Claude Code, Cursor) through a QA workflow: written spec, plan, automated tests and review before release. 800+ automated tests in production.',
            'Launched staff e-learning with AI-drafted courses and exams built from company SOPs, human-approved at every step, and run a daily AI auditor that flags issues for follow-up.',
          ],
        },
      ],
    },
    {
      roles: [
        {
          title: 'Senior Quality Assurance Engineer',
          company: 'Wolf',
          location: 'London, UK (remote)',
          start: 'Jul 2019',
          end: 'Feb 2022',
        },
        {
          title: 'Quality Assurance Engineer',
          company: 'Baaz / Allmuze',
          location: 'Amman, Jordan',
          start: 'Apr 2017',
          end: 'Jun 2019',
        },
      ],
      groups: [
        {
          heading: 'Across both roles',
          points: [
            'Tested iOS, Android and web apps across many releases: functional, regression, smoke and integration testing.',
            'Wrote test plans and cases from requirements and user stories; maintained regression suites.',
            'Built Selenium automation for web regression testing, cutting cycle time and widening coverage.',
            'Tested APIs and integrations with the development team before each release.',
            'Logged, triaged and retested defects in JIRA; reviewed stories, estimated effort and signed off releases in Agile sprints.',
          ],
        },
      ],
    },
  ],

  skills: [
    {
      name: 'Finance & accounting',
      items: ['Month-end close', 'Budgeting', 'Budget vs. actual', 'Variance analysis', 'Cost control', 'Management reporting', 'Financial modelling', 'External audit', 'Sales tax (GST)'],
    },
    {
      name: 'ERP',
      items: ['Odoo 18 Enterprise', 'POS', 'Inventory', 'Purchasing', 'MRP', 'Accounting', 'HR', 'Custom modules'],
    },
    {
      name: 'AI & development',
      items: ['Claude Code', 'Cursor', 'MCP servers', 'Python', 'PostgreSQL', 'FastAPI', 'Next.js'],
    },
    {
      name: 'Quality & testing',
      items: ['Test planning', 'Test case design', 'Selenium', 'Regression testing', 'API testing', 'JIRA'],
    },
    {
      name: 'Business analysis',
      items: ['Process redesign', 'Requirements gathering', 'Stakeholder management', 'User training'],
    },
    {
      name: 'Languages',
      items: ['Arabic (native)', 'English (fluent)'],
    },
  ],

  education: [
    {
      title: 'BSc Software Engineering',
      issuer: 'Al-Zaytoonah University of Jordan',
      year: '2017',
    },
  ],

  certifications: [
    { title: 'Planning, Budgeting and Forecasting', issuer: 'KPMG Jordan', year: '2026' },
    { title: 'CMA Exam Preparation Program', issuer: 'KPMG Jordan', year: '2025', note: '6-month intensive program' },
    { title: 'Financial Analysis', issuer: 'KPMG Jordan', year: '2024' },
    { title: 'Qualified Accountants for Market', issuer: 'SARH International', year: '2023' },
  ],

  contact: {
    heading: 'Hiring, or need finance systems built?',
    body: 'I’m open to roles where finance and technology meet, and to projects for businesses that need Odoo, reporting or operations software done properly.',
    email: 'abdallahnezarabdallah@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abdallah-abdallah-aslan/',
    github: 'https://github.com/AslanAbdallah',
  },
};
