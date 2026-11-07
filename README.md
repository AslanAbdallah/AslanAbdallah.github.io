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
| Add a project | Copy one project block in `projects` and edit it. `featured: true` gives it the large card with a screenshot. |
| Add a job | Add an entry at the top of `experience`. |
| Change colors or fonts | Edit the tokens at the top of `src/styles/global.css` and the fonts in `astro.config.mjs`. |

## Running it locally

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # type-check and build into dist/
npm test         # checks the built page (sections, links, no phone number, metadata)
```

Requires Node.js 22.22 or newer.

## How it's organised

```
src/data/profile.ts     ← all content (edit this)
src/data/types.ts       ← the shape of that content
src/components/         ← one file per page section
src/styles/global.css   ← colors, fonts, spacing
src/assets/projects/    ← project screenshots (optimised automatically)
public/                 ← favicon, share image, CV
tests/site.test.mjs     ← checks run on every build
```
