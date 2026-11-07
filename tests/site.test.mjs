// Checks the built page (dist/index.html). Run `npm run build` first, then `npm test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');

test('shows the name and headline', () => {
  assert.match(html, /Abdallah Nezar/);
  assert.match(html, /I run finance and build the software behind it\./);
});

test('has every section the navigation points to', () => {
  for (const id of ['about', 'work', 'experience', 'skills', 'education', 'contact']) {
    assert.match(html, new RegExp(`id="${id}"`), `missing section #${id}`);
    if (id !== 'skills' && id !== 'education') {
      assert.match(html, new RegExp(`href="#${id}"`), `nav has no link to #${id}`);
    }
  }
});

test('never publishes a phone number', () => {
  // Any Jordanian mobile number (+962 7X… or 07X…), in any spacing.
  const text = html.replace(/<[^>]+>/g, ' ');
  assert.doesNotMatch(text, /(?:\+|00)?962[\s.-]*7[789](?:[\s.-]*\d){7}/);
  assert.doesNotMatch(text, /\b07[789](?:[\s.-]*\d){7}\b/);
  assert.doesNotMatch(html, /href="tel:/);
});

test('contact links are present', () => {
  assert.match(html, /href="mailto:abdallahnezarabdallah@gmail\.com"/);
  assert.match(html, /href="https:\/\/www\.linkedin\.com\/in\/abdallah-abdallah-aslan\/"/);
  assert.match(html, /href="https:\/\/github\.com\/AslanAbdallah"/);
});

test('links that open a new tab are safe', () => {
  const blankLinks = html.match(/<a\b[^>]*target="_blank"[^>]*>/g) ?? [];
  assert.ok(blankLinks.length > 0, 'expected external links');
  for (const tag of blankLinks) {
    assert.match(tag, /rel="[^"]*noopener[^"]*"/, `unsafe link: ${tag}`);
  }
});

test('has search and share metadata', () => {
  assert.match(html, /<title>[^<]*Abdallah Nezar[^<]*<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]{50,}"/);
  assert.match(html, /<meta property="og:image" content="https:\/\/aslanabdallah\.github\.io\/[^"]+"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/aslanabdallah\.github\.io\/"/);
});

test('every image has alt text', () => {
  const imgs = html.match(/<img\b[^>]*>/g) ?? [];
  for (const tag of imgs) assert.match(tag, /alt="[^"]+"/, `image without alt: ${tag}`);
});

test('share image and icon files exist', () => {
  assert.ok(existsSync(new URL('../dist/og-image.png', import.meta.url)), 'og-image.png missing');
  assert.ok(existsSync(new URL('../dist/favicon.svg', import.meta.url)), 'favicon.svg missing');
});
