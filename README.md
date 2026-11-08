# aslanabdallah.github.io

Personal portfolio of Abdallah Nezar, live at **https://aslanabdallah.github.io**.

Built with [Astro](https://astro.build) and published by GitHub Pages. Every push to `main` rebuilds and republishes the site in about a minute.

## Updating the content

All the text on the site lives in one file: **[`src/data/profile.ts`](src/data/profile.ts)**.

1. Open `src/data/profile.ts`, on github.com (press `.` or the pencil icon) or locally.
2. Change the text: headline, numbers, projects, experience, skills, certifications or contact links.
3. Commit to `main`. The **Actions** tab shows the build. When it's green, the site is updated.

If an edit has a mistake, such as a misspelled field or a missing comma, the build fails with a red ❌ and **the live site stays as it was**. Fix the file and commit again.

### Common edits

| I want to… | Do this in `profile.ts` |
|---|---|
| Add a **Download CV** button | Put the PDF in `public/` (e.g. `public/abdallah-nezar-cv.pdf`) and uncomment the `cvUrl` line. |
| Change a project screenshot | Replace the file in `src/assets/projects/` with the same name. |
| Add a module card to /work | Copy one block in `erp.modules` and edit it. A tag ending in "tests" is highlighted. Optional: `link` (e.g. to its case study) and `role` (a different footer line). |
| Add a small item under the module cards | Add a line to `erp.alsoBuilt`. |
| Add a case study | Copy one block in `caseStudies` and give it a new `slug`. Its page (`/case-studies/<slug>/`) and its home-page tile are created automatically. |
| Add a product with a screenshot | Copy one block in `products` and import its screenshot at the top of the file. |
| Add a job | Add an entry at the top of `experience`. |
| Change colours or fonts | Edit the tokens at the top of `src/styles/global.css` and the fonts in `astro.config.mjs`. The green bands use the `band` class. |

**What to leave out:** chores (catalogues, payment-method setup, label fixes), anything that reads like an investigation or an internal problem at the employer, and any number that isn't on the fact sheet. The test `items cut from the portfolio stay cut` fails the build if a removed item comes back.

Before publishing new numbers, run `npm run audit`: it lists every number on every page and flags any that aren't on the approved list in `scripts/audit-numbers.mjs`.

## Motion

Sections and cards rise in as they scroll into view, the hero plays in on load, and numbers count up once (the till result counts down, 599 → 48 ms). It's about 1 KB of code in `src/scripts/motion.ts` plus a "Motion" block at the end of `src/styles/global.css`, with no library. Mark an element with `data-reveal`, a list with `data-reveal-group`, or a number with `data-count`.

The page never depends on it: with JavaScript off, or when a visitor's device asks for reduced motion, everything shows at once. A test fails the build if a motion rule could hide content outside those conditions.

## Pages

| Address | What's on it |
|---|---|
| `/` | Opening section, What I do, selected work (products, ERP tile, case-study tiles), experience, skills & learning, contact |
| `/work/` | A jump menu, then the ERP modules (and "Also built"), finance work, systems & infrastructure, how I change a live system, and the case studies |
| `/case-studies/<slug>/` | One case study each: problem, what I found, what I did, result |

## Running it locally

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # type-check and build into dist/
npm test         # checks every built page (links, privacy rules, cut items, metadata)
npm run audit    # lists every number on every page against the approved list
```

Requires Node.js 22.22 or newer.

## How it's organised

```
src/data/profile.ts     ← all content (edit this)
src/data/types.ts       ← the shape of that content
src/pages/              ← index (home), work, case-studies/[slug]
src/components/         ← page sections shared across pages
src/components/home/    ← the Selected work section on the home page
src/components/work/    ← module cards, case-study tiles, group headings
src/styles/global.css   ← colours, fonts, spacing, the green band
src/assets/projects/    ← project screenshots (optimised automatically)
public/                 ← favicon, share image, CV
tests/site.test.mjs     ← checks run on every build
scripts/audit-numbers.mjs ← number check (npm run audit)
```
