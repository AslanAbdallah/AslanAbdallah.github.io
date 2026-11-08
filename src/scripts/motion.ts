// Motion for every page: things rise in as they scroll into view, and numbers
// count up once. No library. The page is complete without this script; see
// "Motion" in src/styles/global.css for the CSS side and the safety net.
//
//   data-reveal         this element rises in when it scrolls into view
//   data-reveal-group   its children rise in one after another
//   data-count          the last number in it counts up (or down, for "599 → 48 ms")

declare global {
  interface Window {
    __motion?: boolean;
  }
}

const root = document.documentElement;

if (!('IntersectionObserver' in window)) {
  root.classList.remove('js');
} else {
  window.__motion = true;

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      if (!(child instanceof HTMLElement)) return;
      child.dataset.reveal = '';
      child.style.setProperty('--reveal-i', String(i % 6));
    });
  });

  const reveal = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // Show what is on screen, and anything already scrolled past (after a jump link).
        if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
          entry.target.classList.add('is-in');
          reveal.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const counter = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          counter.unobserve(entry.target);
          countUp(entry.target as HTMLElement);
        }
      },
      { threshold: 0.6 },
    );
    document.querySelectorAll('[data-count]').forEach((el) => counter.observe(el));
  }
}

/**
 * Counts the last number in the element up from 0 ("2,500+", "~40", "16"), or
 * from the number before an arrow down to it ("599 → 48 ms"). Anything else
 * (ranges, "3 min 31 s", words) is left alone. The real text is restored at the end.
 */
function countUp(el: HTMLElement) {
  const text = el.textContent ?? '';
  const match = text.match(/^(\s*.*?)(\d[\d,]*)(\D*)$/);
  if (!match) return;
  const [, before, digits, after] = match;
  const arrow = before.match(/^\s*(\d[\d,]*)\s*→\s*$/);
  if (before.trim() && before.trim() !== '~' && !arrow) return;

  const to = Number(digits.replace(/,/g, ''));
  const from = arrow ? Number(arrow[1].replace(/,/g, '')) : 0;
  if (Math.abs(to - from) < 3) return;

  const commas = digits.includes(',');
  const show = (n: number) => (commas ? Math.round(n).toLocaleString('en-US') : String(Math.round(n)));
  const duration = 1400;
  const start = performance.now();

  const frame = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = before + show(from + (to - from) * eased) + after;
    if (progress < 1) requestAnimationFrame(frame);
    else el.textContent = text;
  };
  requestAnimationFrame(frame);
}

export {};
