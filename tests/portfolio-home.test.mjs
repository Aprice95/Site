import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('publishes Aaron Price’s professional portfolio at the site root', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

  assert.match(html, /Educator\. Digital Producer\. Creative Technologist\./);
  assert.match(html, /150(?:–|&ndash;|&#x2013;)200/);
  assert.match(html, /Music Tech Made Simple/);
  assert.match(html, /id="capabilities"/);
  assert.match(html, /id="about"/);
  assert.match(html, /href="\/euclidean-rhythm-lab\/?"/);
});

test('keeps the portfolio header touch-friendly and consistently branded', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  const stylesheetPaths = [...html.matchAll(/href="(\/_astro\/[^\"]+\.css)"/g)].map(
    (match) => match[1]
  );
  const stylesheets = await Promise.all(
    stylesheetPaths.map((path) => readFile(new URL(`../dist${path}`, import.meta.url), 'utf8'))
  );
  const css = stylesheets.join('\n');

  assert.match(html, /<link rel="apple-touch-icon" href="\/apple-touch-icon\.png">/);
  assert.match(css, /\.portfolio-header nav a\{[^}]*min-height:44px[^}]*padding:0 4px/);
});
