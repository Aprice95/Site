import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readBuiltPage = (path) =>
  readFile(new URL(`../dist/${path}/index.html`, import.meta.url), 'utf8');

test('the Pinterest landing page states the real price and links to the App Store', async () => {
  const html = await readBuiltPage('widgtext');

  assert.match(html, /\$9\.99/);
  assert.match(html, /no subscription/i);
  assert.match(html, /id6762033066/);
  assert.doesNotMatch(html, /\$4\.99|\$5\.00|\$10\.00|\$0\.99/);
});

test('the Pinterest landing page calls the app free, not free to try', async () => {
  const html = await readBuiltPage('widgtext');

  // The app is genuinely free; Pro is a one-time $9.99 on top. "Free to try"
  // reads as a trial that expires, which misdescribes the product.
  assert.doesNotMatch(html, /free to try/i);
  assert.match(html, /The app is free/i);
  assert.match(html, /one-time/i);
});

test('the landing page shows current screenshots, not the pre-2.3 ones', async () => {
  const html = await readBuiltPage('widgtext');

  // Captured from the 2.4 build. widgtext-shot-1 predates the mindful
  // repositioning and showed the old generic text-widget UI.
  for (const shot of ['widgtext-editor', 'widgtext-themes', 'widgtext-quotes']) {
    assert.match(html, new RegExp(shot), `missing ${shot}`);
  }
  assert.doesNotMatch(html, /widgtext-shot-1/);
});

test('the Pinterest landing page targets the search terms the pins are written for', async () => {
  const html = await readBuiltPage('widgtext');

  for (const term of ['affirmation', 'home screen', 'lock screen', 'widget']) {
    assert.match(html, new RegExp(term, 'i'), `missing "${term}"`);
  }
});

test('the App Store link is reachable without scrolling past the fold', async () => {
  const html = await readBuiltPage('widgtext');

  // BaseLayout always renders a sticky site-nav <header> before <main>, so the
  // FIRST </header> in the document belongs to that nav, not to this page's
  // own hero. The page's hero is itself a <header> (matching the pattern in
  // privacy.astro), so its close tag is the SECOND </header>. Bound "the
  // fold" there: content up through the hero, not the whole document, so a
  // CTA that only exists in the nav or only appears further down the page
  // (e.g. the closing CTA band) cannot make this pass.
  const firstHeaderEnd = html.indexOf('</header>');
  assert.notEqual(firstHeaderEnd, -1, 'expected a site-nav header');

  const heroHeaderEnd = html.indexOf('</header>', firstHeaderEnd + 1);
  assert.notEqual(heroHeaderEnd, -1, 'expected a page-specific hero header after the site-nav header');

  const fold = html.slice(0, heroHeaderEnd + '</header>'.length);
  assert.ok(html.length > fold.length + 100, 'expected substantial content below the fold to make this a real test');

  assert.match(fold, /id6762033066/);
});
