// Lists every number on every built page and flags any that are not on the
// approved list below (the fact sheet, plus dates and figures from the CV).
// Usage: npm run build && npm run audit
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const approved = {
  'Fact sheet': [
    '40', '2,000', '289', '2', '63', '436', '245', '191', '500', '146', '55', '3', '15', '30', '43', '4', '28',
    '18', '301', '485', '11', '38', '3,267', '5,611', '122', '31', '0', '58', '125', '357', '22', '890,000', '17',
    '120', '570,000', '2.8', '599', '48', '476', '2022', '2026', '138', '8', '2.5', '16', '10', '1,379', '2,500',
    '8,000', '0.6',
  ],
  'Named in the brief': ['05', '00', '256', '2027', '2025', '14'],
  'Step and section numbers': ['1', '5', '01', '02', '03', '04'],
  'CV / existing page': ['25', '20', '2017', '2019', '2023', '2024', '6'],
};
const allowed = new Map(Object.entries(approved).flatMap(([src, nums]) => nums.map((n) => [n, src])));

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const pages = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (name === 'index.html') pages.push(['/' + relative(dist, dir).split(sep).join('/'), full]);
  }
})(dist);

let total = 0;
const unknown = [];
for (const [path, file] of pages) {
  const text = readFileSync(file, 'utf8')
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ');
  console.log(`\n${path}`);
  for (const m of text.matchAll(/\d[\d,]*(?:\.\d+)?/g)) {
    const n = m[0].replace(/,$/, '');
    const context = text.slice(Math.max(0, m.index - 40), m.index + n.length + 40).trim();
    const ok = allowed.has(n);
    total++;
    if (!ok) unknown.push({ path, n, context });
    console.log(`${ok ? '  ok ' : '  ?? '} ${n.padEnd(8)} …${context}…`);
  }
}

console.log(`\n${total} numbers across ${pages.length} pages, ${unknown.length} not on the approved list.`);
if (unknown.length) {
  console.log('Check these against the fact sheet:');
  for (const f of unknown) console.log(`  ${f.path}  ${f.n}: …${f.context}…`);
  process.exitCode = 1;
}
