// Shapes for everything in profile.ts. If you misspell a field name or leave
// out a required one, `npm run build` stops with an error instead of
// publishing a broken page.
import type { ImageMetadata } from 'astro';

export interface Link {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Pillar {
  title: string;
  summary: string;
  points: string[];
}

/** A product I founded, shown with a screenshot on the home page. */
export interface Product {
  name: string;
  kind: string;
  summary: string;
  highlights: string[];
  stack: string[];
  role: string;
  link: Link;
  image: { src: ImageMetadata; alt: string };
}

/** One module card on the /work page. */
export interface Module {
  kind: string;
  name: string;
  summary: string;
  points: string[];
  tags: string[];
}

/** A case study. Each one gets its own page at /case-studies/<slug>/. */
export interface CaseStudy {
  slug: string;
  title: string;
  /** One or two sentences: shown on the home tile and under the page title. */
  summary: string;
  /** The number shown on the home tile. */
  headline: Stat;
  /** Two or three numbers shown in the green band on the case-study page. */
  figures: Stat[];
  problem: string;
  found: string[];
  did: string[];
  result: string;
  tags: string[];
}

export interface TitledItem {
  title: string;
  body: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  /** Extra roles covered by the same bullets (e.g. two QA jobs). */
  alsoAs?: { title: string; company: string; location: string; start: string; end: string }[];
  points: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Credential {
  title: string;
  issuer: string;
  year: string;
  note?: string;
}

export interface PageText {
  eyebrow: string;
  title: string;
  lede?: string;
}

export interface Profile {
  name: string;
  fullName: string;
  role: string;
  location: string;
  headline: string;
  intro: string;
  /** Path to a PDF in /public, e.g. '/abdallah-nezar-cv.pdf'. Leave out to hide the Download CV button. */
  cvUrl?: string;
  seo: { title: string; description: string };
  stats: Stat[];
  /** Slug of the case study shown beside the name on the home page. */
  featuredCase: string;

  home: {
    about: PageText;
    pillars: Pillar[];
    work: PageText;
    experience: PageText;
    skills: PageText;
  };

  products: Product[];

  /** The /work page. */
  erp: {
    seo: { title: string; description: string };
    page: PageText;
    /** Shown on the home-page tile that links to /work. */
    tile: { kind: string; title: string; summary: string; figures: Stat[] };
    figures: Stat[];
    modules: Module[];
    finance: { title: string; lede: string; items: TitledItem[] };
    process: { title: string; lede: string; steps: TitledItem[]; closing: string };
  };

  caseStudies: CaseStudy[];

  experience: Experience[];
  skills: SkillGroup[];
  education: Credential[];
  certifications: Credential[];
  contact: {
    heading: string;
    body: string;
    email: string;
    linkedin: string;
    github: string;
  };
}
