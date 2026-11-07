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

export interface Project {
  name: string;
  kind: string;
  description: string;
  highlights: string[];
  stack: string[];
  role: string;
  /** Leave out for internal work that has no public link. */
  link?: Link;
  /** Screenshot imported at the top of profile.ts. Leave out to show a text card. */
  image?: { src: ImageMetadata; alt: string };
  /** Featured projects get the large, full-width card. */
  featured?: boolean;
}

export interface RoleEntry {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
}

export interface Experience {
  /** One entry normally; several when one set of bullets covers more than one job. */
  roles: RoleEntry[];
  summary?: string;
  groups: { heading?: string; points: string[] }[];
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

export interface SectionIntro {
  title: string;
  lede?: string;
}

export interface Profile {
  name: string;
  fullName: string;
  initials: string;
  role: string;
  location: string;
  headline: string;
  intro: string;
  /** Path to a PDF in /public, e.g. '/abdallah-nezar-cv.pdf'. Leave out to hide the Download CV button. */
  cvUrl?: string;
  seo: { title: string; description: string };
  /** Heading and intro line shown at the top of each section. */
  sections: {
    about: SectionIntro;
    work: SectionIntro;
    experience: SectionIntro;
    skills: SectionIntro;
    education: SectionIntro;
  };
  stats: Stat[];
  pillars: Pillar[];
  projects: Project[];
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
