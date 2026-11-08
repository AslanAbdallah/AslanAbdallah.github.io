// ─────────────────────────────────────────────────────────────────────────────
// THIS IS THE FILE YOU EDIT.
// Every word on the website comes from here. Change the text, save, commit,
// and the site republishes itself in about a minute.
//
// House rules: first person, plain words, British spelling, no buzzwords.
// Show achievements, not chores. Use only numbers from the fact sheet.
// Never publish colleague/customer/supplier names, money amounts, sales,
// margins, server addresses, database names, or anything that reads like an
// internal problem at the employer. Run `npm run audit` after changing numbers.
// ─────────────────────────────────────────────────────────────────────────────
import type { Profile } from './types';

// Screenshots live in src/assets/projects/. Replace a file (same name) to update it.
import mihwarShot from '../assets/projects/mihwar.png';
import finacastShot from '../assets/projects/finacast.png';

export const profile: Profile = {
  name: 'Abdallah Nezar',
  fullName: 'Abdallah Nezar Abdallah',
  role: 'IT & Finance Manager',
  location: 'Amman, Jordan',
  headline: 'I run finance and IT for a multi-brand restaurant group.',
  intro:
    'IT & Finance Manager at a multi-brand F&B group in Amman. I run month-end, budgets and FP&A, and I own the company’s Odoo 18 ERP end to end: 16 modules I built, 30 more I maintain, and the integrations and apps every branch uses daily. Founder of Mihwar and FinaCast.',

  // cvUrl: '/abdallah-nezar-cv.pdf',

  seo: {
    title: 'Abdallah Nezar — IT & Finance Manager · Odoo ERP · FP&A',
    description:
      'IT & Finance Manager in Amman. I run month-end, budgets and FP&A, and the Odoo ERP and apps a multi-branch restaurant group runs on.',
  },

  stats: [
    { value: '2,500+', label: 'digital checklists completed' },
    { value: '8,000+', label: 'stock requests processed' },
    { value: '3,000+', label: 'automated tests behind the apps I run' },
    { value: '16', label: 'Odoo modules I built in-house' },
  ],
  // The case study shown beside the name on the home page (its slug).
  featuredCase: 'till-speed',

  // ── Home page ──────────────────────────────────────────────────────────────
  home: {
    about: {
      eyebrow: '01 — What I do',
      title: 'Finance and technology, run by the same person',
      lede: 'Most companies keep finance and IT in separate rooms. I sit in both, so the numbers, the systems and the people who use them line up.',
    },
    pillars: [
      {
        title: 'Finance & FP&A',
        summary: 'Close the books, plan the year, and know where the money goes — every day, not every month.',
        points: [
          'Month-end close, sales-tax (GST) filings and the external audit',
          'Annual budget, monthly targets and daily management P&L by branch',
          'Cost control on food, waste and purchasing, tracked daily',
          'Annual budget model built from the ERP’s own P&L, with an input file for each branch manager',
          'Sales-tax (GST) reconciliation for every filing period, and a daily reconciliation routine',
          'Hired, onboarded and trained the accounting team',
        ],
      },
      {
        title: 'Odoo ERP',
        summary: 'Odoo 18 Enterprise, set up and extended to fit how the business actually runs.',
        points: [
          'Functional and technical: POS, inventory, purchasing, MRP, accounting, HR',
          '16 modules built in-house (stock counts, inspections, checklists, branch report, staff meals, dashboards), 30 more maintained and ported',
          'Integrations: KayanHR, bank card terminals, kitchen screens, delivery platforms',
          'Hosted on Odoo.sh; changes rehearsed on a production copy, rolled back by default, shipped at quiet hours',
        ],
      },
      {
        title: 'Software & automation',
        summary: 'Production apps built with AI coding agents and held to a QA standard.',
        points: [
          'Written spec, plan, automated tests and review before release',
          'Python, PostgreSQL, Odoo OWL/JavaScript, FastAPI, Next.js',
          'AI with a person in the loop: AI drafts, a person approves',
        ],
      },
    ],
    work: {
      eyebrow: '02 — Selected work',
      title: 'What I’ve built and fixed',
      lede: 'Two products I founded, the ERP a restaurant group runs on, and five problems from the live system.',
    },
    experience: {
      eyebrow: '03 — Experience',
      title: 'Where I’ve worked',
    },
    skills: {
      eyebrow: '04 — Skills & learning',
      title: 'What I work with',
    },
  },

  // ── Products I founded (home page) ─────────────────────────────────────────
  products: [
    {
      name: 'Mihwar',
      kind: 'F&B operations platform',
      summary:
        'An Arabic-first operations platform for multi-branch restaurants, cloud kitchens and small factories: checklists, scored inspections, AI-drafted ordering, scheduling, work orders and regulator inspection packs (SFDA, Dubai Municipality, JFDA, HACCP).',
      highlights: [
        'AI that turns paper forms into bilingual checklists',
        'Organisations can bring their own AI key, stored encrypted (AES-256-GCM)',
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
      summary:
        'Upload a P&L in Excel or CSV and get dashboards with 25+ ratios, anomaly detection, scenario planning and forecasts with confidence intervals. A model-selection engine backtests 20+ models per account.',
      highlights: ['Built for CFOs and FP&A teams in MENA'],
      stack: ['Python', 'FastAPI', 'Next.js', 'Prophet', 'XGBoost'],
      role: 'Solo founder — product, architecture and deployment',
      link: { label: 'finacast.up.railway.app', href: 'https://finacast.up.railway.app/' },
      image: {
        src: finacastShot,
        alt: 'FinaCast home page: “Financial dashboards and AI forecasting in one platform”, above an analytics dashboard with growth metrics and key ratios.',
      },
    },
  ],

  // ── The /work page ─────────────────────────────────────────────────────────
  erp: {
    seo: {
      title: 'Work — Abdallah Nezar',
      description:
        'The Odoo 18 modules, finance work, systems and change process behind a multi-branch restaurant group, by Abdallah Nezar.',
    },
    page: {
      eyebrow: 'Finance · ERP · Systems',
      title: 'Work',
      lede: 'Odoo 18 Enterprise at a multi-brand F&B group: six tills, a central kitchen, and the modules I built or rebuilt so branches stop using paper. Then the finance work and the systems behind it.',
    },
    tile: {
      kind: 'Odoo 18 Enterprise',
      title: 'The ERP behind a restaurant group',
      summary:
        'Inspections, checklists, stock counts and requests, staff meals, dashboards, a staff academy and a sync engine — built or rebuilt by me, and run in production.',
      figures: [
        { value: '16', label: 'modules built in-house' },
        { value: '3,000+', label: 'automated tests' },
      ],
    },
    figures: [
      { value: '16', label: 'Odoo modules I built in-house' },
      { value: '3,000+', label: 'automated tests across the apps' },
      { value: '2,500+', label: 'digital checklists completed' },
    ],
    modules: [
      {
        kind: 'Food safety & quality',
        name: 'Inspections & corrective actions',
        summary:
          'Scored food-safety and quality inspections that branches run on a tablet, with corrective actions that have to be closed and checked.',
        points: [
          'One question per screen, photos from the camera, Arabic first',
          'Critical items fail an inspection whatever the overall score',
          'Corrective actions with due dates and a verification step; manager approval enforced on the server',
          'Rebuilt the inspection PDF: summary first, photos next to their item, about a fifth fewer pages',
        ],
        tags: ['Odoo 18', 'OWL', 'QWeb PDF', '289 tests'],
      },
      {
        kind: 'Operations',
        name: 'Branch checklists',
        summary:
          'Daily, weekly and monthly branch checklists on a tablet, in place of paper. This is the app behind the 2,500+ checklists.',
        points: [
          'Templates by shift, day of week and deadline, with automatic closing',
          'Answers as checkboxes, yes/no, temperatures with min/max limits, numbers, photos and ratings',
          'The central kitchen’s paper forms moved into the app',
        ],
        tags: ['Odoo 18', 'OWL', '57 tests'],
      },
      {
        kind: 'Inventory',
        name: 'Nightly and month-end stock counts',
        summary:
          'Branches count stock on a tablet after the till closes; the system checks the counts before anyone is blamed for a difference.',
        points: [
          'A rotating list of items each night, compared with the last count; a recount before a gap is reported',
          'A morning email and PDF to management with the night’s differences',
          'Month-end count of 500+ items per branch; reviewers fix counts in place; approval posts to inventory',
        ],
        tags: ['Odoo 18', 'OWL', 'PostgreSQL', '476 tests'],
      },
      {
        kind: 'Inventory',
        name: 'Stock requests and transfers',
        summary:
          'Branches request stock, and nothing moves until the request is approved. This is the app behind the 8,000+ stock requests.',
        points: [
          'An approval workflow for every request',
          'Transfers and manufacturing orders created from the approved request',
          'A reorder report and a scrap export',
        ],
        tags: ['Odoo 18', 'Inventory', 'MRP'],
      },
      {
        kind: 'Management reporting',
        name: 'Branch daily report',
        summary: 'One screen per branch that replaced the nightly email to management.',
        points: [
          'Orders, customers, average ticket, discounts, transfers, counts and staff lateness from HR shifts',
          'Incidents and complaints logged in the report; management opens follow-ups, the branch closes them, the opener confirms',
          'Arabic right-to-left PDF; branch managers see what was wasted, not what it cost, and no sales or cash figures, by design',
        ],
        tags: ['Odoo 18', 'Python', '112 tests'],
      },
      {
        kind: 'Point of sale & HR',
        name: 'Staff meals and HR sync',
        summary:
          'The staff-meal policy enforced by the till, fed by employees, attendance and shifts synced from the HR system every 30 minutes.',
        points: [
          'Each employee’s daily allowance, counted across branches over a 05:00–05:00 staff day',
          'Free only when the employee is checked in (live HR lookup with a 3-second timeout)',
          'One “Staff Pricelists” screen replaced about 15 pricelists cashiers picked by hand',
          'Leavers archived automatically, with a safety stop that refuses mass archiving',
          'Found staff who had left still active, closed their access and fixed the cause',
          'Measured cost: about 2% on till load time',
        ],
        tags: ['Odoo 18 POS', 'KayanHR API', '64 tests', '46 tests'],
      },
      {
        kind: 'Point of sale',
        name: 'Bank card terminals',
        summary: 'The till talks to the card terminals of two acquirers over one driver.',
        points: [
          'Each branch has an active and a spare terminal, with one-click failover',
          'One shared payment method per acquirer across all branches; terminal settings visible to managers only',
          'Ported the module’s till front end to Odoo 18',
        ],
        tags: ['Odoo 18 POS', 'OWL'],
        role: 'Ported and extended in-house',
      },
      {
        kind: 'Management reporting',
        name: 'Operations dashboard',
        summary: 'The management dashboard for sales, menu and stock, with budget pace.',
        points: [
          'Filters by branch, sales type, delivery platform, day and hour',
          'Menu engineering (Kasavana–Smith matrix), best sellers and slow movers',
          'Sales by hour, a weekday × hour heatmap, and the same weekdays last year',
          'A one-year view went from 18 s to 2–4 s after moving the heavy loops to SQL',
          'Damaged stock by branch, then by item, linked to the records',
        ],
        tags: ['Odoo 18', 'SQL', 'OWL', 'Chart.js'],
      },
      {
        kind: 'Training',
        name: 'AI staff academy',
        summary: 'Staff courses and exams, drafted by AI from the company’s own SOPs, in Arabic.',
        points: [
          'Outline first (editable), then pages, questions, marking rubrics and an exam draft',
          'AI marks open answers; a person reviews, and only a person releases results',
          'Model choice per step, retry and fallback, a monthly spending ceiling, every AI call logged',
          'Rebuilt in Aug–Sep 2026; Arabic SOP PDFs now read in the right order',
        ],
        tags: ['Odoo 18', 'OWL', 'LLM APIs', 'Python', '735 tests'],
      },
      {
        kind: 'Integration',
        name: 'Odoo-to-Odoo sync engine',
        summary: 'A sync engine for POS sessions, journal entries and purchases, where nothing is written without approval.',
        points: [
          'Mapping rules and dry runs before any write',
          'Approval before writing, and an audit log of what was written',
          'Crash recovery built in',
          'Every money write is signed by a named person',
          'CI and an integration test harness',
        ],
        tags: ['FastAPI', 'HTMX', 'PostgreSQL', '1,379 tests'],
        link: { label: 'Read the case study', href: '/case-studies/sync-engine/' },
      },
    ],
    // Smaller pieces of work, listed under the module cards.
    alsoBuilt: [
      'Sales by pricelist on the end-of-day (Z) report, with discount against menu price',
      'A discount report by branch, with the reason for each discount and what each employee consumed',
    ],
    systems: {
      title: 'Systems & infrastructure',
      lede: 'How the ERP is hosted, shipped and restored.',
      items: [
        'Odoo.sh: every change rehearsed on a copy of production; deploys at quiet hours with a ~2.5-minute pause; any error in the test update blocks the deploy.',
        'A local Odoo 18 Enterprise development stack that restores the full 16 GB production database in about 11 minutes.',
      ],
    },
    finance: {
      title: 'Finance work',
      lede: 'The finance side of the same job.',
      items: [
        {
          title: '2027 budget model',
          body: 'Built from the ERP’s P&L by cost centre (Dec 2022 – Aug 2026), trial balance and cash flow. One assumptions sheet, formulas throughout, and an input file for each branch manager and department head.',
        },
        {
          title: 'Monthly management pack',
          body: 'An FP&A P&L report for the CEO, by branch, every month.',
        },
        {
          title: 'Sales tax (GST)',
          body: 'A reconciliation workbook for each filing period, declarations checked against the budget for 2025–2026, and a daily reconciliation routine.',
        },
        {
          title: 'Accounting review',
          body: 'A full review of the books with a findings report, and the procedure the external audit office follows.',
        },
        {
          title: 'The accounting team',
          body: 'Wrote the job description and screened the CVs. Hired the team, then wrote how it works: onboarding plan, accountant handbook, an Odoo starter guide, and the full financial and operational cycle.',
        },
        {
          title: 'New ventures',
          body: 'An 8-year feasibility study for a new F&B concept, and a 138-task, 8-phase project plan for a new branch fit-out.',
        },
      ],
    },
    process: {
      title: 'How I change a live system',
      lede: 'The tills keep selling while I work on the system behind them. Every change goes through the same five steps.',
      steps: [
        { title: 'Measure first.', body: 'Logs, SQL and a copy of production before any opinion.' },
        { title: 'Prove it on a copy.', body: 'Scripts run as a dry run by default and roll back; the real run is a separate switch.' },
        { title: 'Check before and after.', body: 'Snapshots that must match: accounts, prices, stock value.' },
        { title: 'Ship at a quiet hour,', body: 'with the undo ready.' },
        { title: 'Leave tests behind', body: 'that fail if an Odoo update breaks the fix, and a check that blocks the release if the tests did not run.' },
      ],
      closing: 'AI agents write much of the code. The spec, the checks and the decision to ship stay with me.',
    },
  },

  // ── Case studies (one page each) ───────────────────────────────────────────
  caseStudies: [
    {
      slug: 'product-recode',
      title: 'Re-coding 3,267 products while the tills kept selling',
      summary:
        'A new category tree and product-code scheme for the whole catalogue, shipped live with zero accounting or price changes.',
      headline: { value: '0', label: 'prices changed across 3,267 products' },
      figures: [
        { value: '3,267', label: 'products, 5,611 variants' },
        { value: '3 min 31 s', label: 'to re-code everything while six tills traded' },
        { value: '0', label: 'accounting setups or prices changed' },
      ],
      problem:
        'Product codes had decayed until almost every new item had none, and the category tree mixed brands, uses and stores.',
      found: [
        'Deleting a category in Odoo silently deletes or blanks linked rows in other tables.',
        'Discount rules break without warning.',
      ],
      did: [
        'Designed a 122-category tree and a code scheme where the category number is part of the product code.',
        'Rehearsed the whole change end to end on production copies, and wrote and tested a rollback.',
        'Added four guards so it stays clean: codes assigned automatically, duplicates blocked by the database, no products in heading categories, and a review queue for uncategorised items — plus a weekly watchdog.',
      ],
      result:
        '5,611 variants re-coded in 3 minutes 31 seconds while six tills traded. Before/after checks: 0 of 3,267 accounting setups changed, 0 prices changed on any pricelist.',
      tags: ['Odoo 18', 'PostgreSQL', 'Python', 'Data migration'],
    },
    {
      slug: 'till-speed',
      title: 'Why the tills felt slow',
      summary:
        '22 days of logs and 890,000 requests showed where cashiers really waited — and it wasn’t the database.',
      headline: { value: '599 → 48 ms', label: 'till-open time after the fix' },
      figures: [
        { value: '890,000', label: 'requests read over 22 days' },
        { value: '17 ms', label: 'median request: the database was fine' },
        { value: '599 → 48 ms', label: 'till-open time after the fix' },
      ],
      problem: 'Cashiers said the tills felt slow. I read the production logs before suggesting anything.',
      found: [
        'The database was not the problem: the median request took 17 ms.',
        'Cashiers really waited on card-terminal calls that could hang for the full 120-second timeout.',
        'A receipt search with no index read 570,000 orders to show 30.',
        'Every time a till opened, a 0.6-second scan went through 2.8 million rows.',
      ],
      did: ['Ranked the fixes by cashier waiting time.', 'The till-open fix measured 599 ms → 48 ms.'],
      result: 'A ranked fix list instead of a bigger server.',
      tags: ['Odoo 18 POS', 'SQL', 'Log analysis', 'Performance'],
    },
    {
      slug: 'kitchen-screen',
      title: 'Kitchen-screen orders that came back after the bill was paid',
      summary:
        'Paid orders kept reappearing on the kitchen screen. The cause was how Odoo split a ticket between two stations, not the network.',
      headline: { value: '125–357', label: 'split tickets a day after a second screen, up from 0–58' },
      figures: [
        { value: '0–58', label: 'split tickets a day with one kitchen screen' },
        { value: '125–357', label: 'a day after the second screen was added' },
        { value: 'Every', label: 'late ticket in the sample was a split' },
      ],
      problem: 'Orders reappeared on the kitchen screen minutes or hours after they were served and paid.',
      found: [
        'It was not the network. Two kitchen screens shared product categories.',
        'When one station tapped a ticket, Odoo split it in two, and the copy reappeared on the other screen.',
        'Splits went from 0–58 a day to 125–357 a day after the second screen was added, and every late ticket in the sample was a split.',
      ],
      did: [
        'Changed the module so a tap moves the whole card.',
        'Added tests that fail if a future Odoo update changes that behaviour.',
        'Deployed at midnight, when trade is under one order an hour.',
      ],
      result: 'Live since 1 November 2026.',
      tags: ['Odoo 18 POS', 'Kitchen display', 'OWL', 'Root-cause analysis'],
    },
    {
      slug: 'waste-report',
      title: 'One report for waste and hospitality',
      summary:
        'Waste and free items lived in two systems that never met. One self-checking workbook brought them together, and found a loss nobody recorded.',
      headline: { value: '476', label: 'checks against the raw data' },
      figures: [
        { value: '476', label: 'checks against the raw data' },
        { value: '2', label: 'systems that never met' },
        { value: '1', label: 'loss channel nobody recorded' },
      ],
      problem: 'Management could not see waste and free items in one report.',
      found: [
        'They are recorded in two systems that never meet: the till and the waste sheets.',
        'The two use different items for the same bread; the link between them is the recipe.',
        'A third loss channel, count adjustments, appeared in neither.',
      ],
      did: [
        'Built a workbook that recalculates itself.',
        'Checked it cell by cell against the raw data (476 checks) and against a second path through the database.',
      ],
      result: 'One report, and a recording gap the business didn’t know about.',
      tags: ['Excel modelling', 'SQL', 'Odoo 18', 'Data reconciliation'],
    },
    {
      slug: 'sync-engine',
      title: 'Moving money between two ERPs safely',
      summary:
        'Before trusting my own sync engine with more of the books, I audited it end to end, then rebuilt it so every write has a name on it and nothing is written twice.',
      headline: { value: '187 → 23', label: 'code-quality warnings after the overhaul' },
      figures: [
        { value: '1,379', label: 'automated tests' },
        { value: '187 → 23', label: 'code-quality warnings' },
        { value: 'Every', label: 'money write signed by a person' },
      ],
      problem:
        'The sync engine copies POS sessions, journal entries and purchases from one Odoo database to another. Before trusting it with more of the books, I audited it end to end in July 2026.',
      found: [
        'A write that timed out could be retried automatically, so the same entry could be posted twice.',
        'The closing-cash figure was counting card revenue.',
        'Some failed posts and reconciliations were reported as successful.',
        'Stacked rules compounded each other instead of applying once.',
      ],
      did: [
        'Never retry a call that writes: a timed-out write is checked on the target before anything else happens.',
        'Added sign-in to the app, and every money write is recorded against the person who approved it.',
        'Failures are reported as failures, and aborted runs can be resumed.',
        'Rules are evaluated with state, so stacked rules apply once.',
        'Added CI, an integration test harness on a real PostgreSQL database, and a refactor that cut code-quality warnings from 187 to 23.',
      ],
      result: 'Every write has a name on it, and nothing is written twice. The overhaul shipped in September 2026.',
      tags: ['FastAPI', 'HTMX', 'PostgreSQL', 'Audit', 'Testing'],
    },
  ],

  // ── Experience (home page) ─────────────────────────────────────────────────
  experience: [
    {
      title: 'IT & Finance Manager',
      company: 'Jahangir for Operations & Management (Jaha.co)',
      location: 'Amman, Jordan',
      start: 'Feb 2022',
      end: 'Present',
      points: [
        'Run month-end, sales-tax filings, the external audit and the annual budget; moved management P&L reporting from weekly to daily.',
        'Own the Odoo 18 ERP end to end: 16 modules built in-house and 30 more maintained, backed by 3,000+ automated tests, and apps every branch uses daily instead of paper (2,500+ checklists, 8,000+ stock requests).',
        'Built the 2027 budget model from the ERP’s P&L by cost centre, with an input file for every branch manager and department head.',
        'Hired the accounting team and wrote how it works: onboarding plan, handbook, Odoo starter guide and the full financial and operational cycle.',
        'Re-coded 3,267 products while six tills traded, with 0 accounting or price changes; traced slow tills and returning kitchen-screen orders to their real causes from production logs.',
        'Launched staff e-learning with AI-drafted courses built from company SOPs.',
      ],
    },
    {
      title: 'Senior Quality Assurance Engineer',
      company: 'Wolf',
      location: 'London, UK (remote)',
      start: 'Jul 2019',
      end: 'Feb 2022',
      alsoAs: [
        { title: 'Quality Assurance Engineer', company: 'Baaz / Allmuze', location: 'Amman, Jordan', start: 'Apr 2017', end: 'Jun 2019' },
      ],
      points: [
        'Tested iOS, Android and web apps across many releases, wrote test plans from requirements, and signed off releases in Agile sprints.',
        'Built Selenium automation for web regression testing, cutting cycle time and widening coverage; tested APIs with developers before each release.',
      ],
    },
  ],

  skills: [
    {
      name: 'Finance',
      items: ['Month-end close', 'Budgeting', 'FP&A reporting', 'Variance analysis', 'Cost control', 'Financial modelling', 'Excel modelling', 'Feasibility studies', 'Sales-tax (GST) reconciliation', 'Team onboarding'],
    },
    {
      name: 'ERP',
      items: ['Odoo 18 Enterprise', 'Odoo.sh', 'OWL / JavaScript', 'QWeb reports', 'POS & card terminals', 'Kitchen display', 'Inventory', 'Stock counts', 'Accounting'],
    },
    {
      name: 'Development & AI',
      items: ['Python', 'PostgreSQL', 'SQL performance', 'FastAPI', 'HTMX', 'Next.js', 'Docker', 'Git', 'CI and test gates', 'Claude Code', 'LLM APIs'],
    },
    {
      name: 'IT & infrastructure',
      items: ['Linux', 'Networking', 'Backups & restores'],
    },
    {
      name: 'Quality & delivery',
      items: ['Test planning', 'Selenium', 'API testing', 'Requirements', 'Project planning', 'User training'],
    },
    {
      name: 'Languages',
      items: ['Arabic (native)', 'English (fluent)'],
    },
  ],

  education: [{ title: 'BSc Software Engineering', issuer: 'Al-Zaytoonah University of Jordan', year: '2017' }],

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
