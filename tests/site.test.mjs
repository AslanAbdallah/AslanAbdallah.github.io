// Checks the built site (dist/). Run `npm run build` first, then `npm test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

/** Every built page, keyed by its URL path ("/", "/work/", …). */
const pages = new Map();
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (name === 'index.html') {
      const rel = relative(dist, dir).split(sep).join('/');
      pages.set(rel ? `/${rel}/` : '/', readFileSync(full, 'utf8'));
    }
  }
})(dist);

const textOf = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ');

const home = pages.get('/');
const homeText = textOf(home);

test('builds the home page, the work page and one page per case study', () => {
  for (const path of ['/', '/work/', '/case-studies/product-recode/', '/case-studies/till-speed/', '/case-studies/kitchen-screen/']) {
    assert.ok(pages.has(path), `missing page ${path}`);
  }
});

test('home shows the name and headline', () => {
  assert.match(home, /Abdallah Nezar/);
  assert.match(home, /I run finance and IT for a multi-brand restaurant group\./);
});

test('the hero features one case study, with the four numbers in a strip below', () => {
  const hero = home.slice(home.indexOf('id="top"'), home.indexOf('id="about"'));
  const featured = hero.match(/<aside class="featured[\s\S]*?<\/aside>/)?.[0] ?? '';
  const link = featured.match(/href="(\/case-studies\/[^"#]+)"/)?.[1];
  assert.ok(link && pages.has(link), 'the featured result must link to a case study page');
  assert.match(textOf(featured), /599 → 48 ms/);
  const numbers = [...hero.matchAll(/<dd[^>]*>([^<]+)<\/dd>/g)].map((m) => m[1].trim());
  assert.deepEqual(numbers, ['2,500+', '8,000+', '2,000+', '~40']);
  assert.ok(hero.indexOf('class="numbers') > hero.indexOf('<aside class="featured'), 'numbers strip must sit below the hero');
  assert.doesNotMatch(textOf(hero), /At a glance/i);
});

test('home sections are in order and numbered 01 to 05', () => {
  let last = -1;
  for (const id of ['about', 'selected-work', 'case-studies', 'experience', 'skills', 'contact']) {
    const at = home.indexOf(`id="${id}"`);
    assert.ok(at > last, `home section #${id} missing or out of order`);
    last = at;
  }
  const labels = [...homeText.matchAll(/\b(0\d) — /g)].map((m) => m[1]);
  assert.deepEqual(labels, ['01', '02', '03', '04', '05']);
});

test('every link inside the site points at something that exists', () => {
  for (const [path, html] of pages) {
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
      if (/^(https?:|mailto:)/.test(href) || href.startsWith('/_astro/') || /\.(svg|png|pdf)$/.test(href)) continue;
      const [target, id] = href.split('#');
      const page = target === '' ? html : pages.get(target);
      assert.ok(page, `${path}: link to missing page ${href}`);
      if (id) assert.match(page, new RegExp(`id="${id}"`), `${path}: ${href} has no target`);
    }
  }
});

test('the menu reaches the work page, case studies, experience and contact', () => {
  for (const html of pages.values()) {
    for (const href of ['/work/', '/#case-studies', '/#experience', '#contact']) {
      assert.ok(html.includes(`href="${href}"`), `menu link ${href} missing`);
    }
  }
});

test('never publishes a phone number', () => {
  for (const [path, html] of pages) {
    const text = textOf(html);
    // Any Jordanian mobile number (+962 7X… or 07X…), in any spacing.
    assert.doesNotMatch(text, /(?:\+|00)?962[\s.-]*7[789](?:[\s.-]*\d){7}/, path);
    assert.doesNotMatch(text, /\b07[789](?:[\s.-]*\d){7}\b/, path);
    assert.doesNotMatch(html, /href="tel:/, path);
  }
});

test('follows the content rules on every page', () => {
  for (const [path, html] of pages) {
    const text = textOf(html);
    assert.doesNotMatch(text, /\b800\+/, `${path}: old test count`);
    assert.doesNotMatch(text, /build (the|an) (Odoo )?ERP/i, `${path}: says "build the ERP"`);
    assert.doesNotMatch(text, /\bJOD\b|\bJD\s?\d/, `${path}: money amount`);
    assert.doesNotMatch(text, /\b\d{1,3}(\.\d{1,3}){3}\b/, `${path}: IP address`);
    assert.doesNotMatch(text, /leverag|synerg|cutting-edge|passionate/i, `${path}: buzzword`);
  }
});

test('items cut from the portfolio stay cut', () => {
  // Small tasks that aren't achievements. (Sensitive items are kept out by review, not listed here.)
  const cut = [
    /B2B catalogue/i, /hotel supply/i, /Wi-Fi/i, /Raspberry Pi/i, /UniFi/i, /maintenance checklists/i,
    /Odoo 14/i, /receipt photos/i, /Branch operations apps/i,
  ];
  for (const [path, html] of pages) {
    const text = textOf(html);
    for (const re of cut) assert.doesNotMatch(text, re, `${path}: cut item is back (${re})`);
  }
});

test('contact links are present on every page', () => {
  for (const [path, html] of pages) {
    assert.match(html, /href="mailto:abdallahnezarabdallah@gmail\.com"/, path);
    assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/abdallah-abdallah-aslan\/"/, path);
    assert.match(html, /href="https:\/\/github\.com\/AslanAbdallah"/, path);
  }
});

test('links that open a new tab are safe', () => {
  for (const [path, html] of pages) {
    for (const tag of html.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? []) {
      assert.match(tag, /rel="[^"]*noopener[^"]*"/, `${path}: unsafe link ${tag}`);
    }
  }
});

test('every page has its own title, description and canonical address', () => {
  const titles = new Set();
  for (const [path, html] of pages) {
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title && title.includes('Abdallah Nezar'), `${path}: bad title`);
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"]{40,}"/, path);
    assert.match(html, new RegExp(`<link rel="canonical" href="https://aslanabdallah\\.github\\.io${path.replace(/\//g, '\\/')}"`), path);
    assert.match(html, /<meta property="og:image" content="https:\/\/aslanabdallah\.github\.io\/og-image\.png"/, path);
  }
  assert.equal(titles.size, pages.size, 'two pages share a title');
});

test('every image has alt text', () => {
  for (const [path, html] of pages) {
    for (const tag of html.match(/<img\b[^>]*>/g) ?? []) assert.match(tag, /alt="[^"]+"/, `${path}: ${tag}`);
  }
});

test('share image and icon files exist', () => {
  assert.ok(existsSync(join(dist, 'og-image.png')), 'og-image.png missing');
  assert.ok(existsSync(join(dist, 'favicon.svg')), 'favicon.svg missing');
});
