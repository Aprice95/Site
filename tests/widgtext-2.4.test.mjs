import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readBuiltPage = (path) =>
  readFile(new URL(`../dist/${path}/index.html`, import.meta.url), 'utf8');

test('publishes truthful WidgText 2.4 product details and privacy disclosure', async () => {
  const html = await readBuiltPage('products/widgtext');

  assert.match(html, /34 font families/);
  assert.match(html, /Free · one-time \$4\.99 Pro unlock/);
  assert.match(html, /<strong>2\.4<\/strong>/);
  assert.match(html, /Firebase Analytics/);
  assert.match(html, /Google AdMob/);
  assert.match(html, /href="\/products\/widgtext\/privacy\/?"/);
  assert.doesNotMatch(html, /50\+ fonts|\$0\.99|collects no data|No data collected|iPad · Mac · Vision Pro/);
});

test('publishes a dedicated, complete WidgText privacy policy', async () => {
  const html = await readBuiltPage('products/widgtext/privacy');

  assert.match(html, /Privacy Policy/);
  assert.match(html, /Firebase Analytics/);
  assert.match(html, /Google AdMob/);
  assert.match(html, /widget text stays on your device/i);
  assert.match(html, /Data we collect/);
  assert.match(html, /pseudonymous app-instance identifier/);
  assert.match(html, /IP address, which may be used to estimate general location/);
  assert.match(html, /How we use data/);
  assert.match(html, /Measure app reliability, feature use, onboarding, purchases/);
  assert.match(html, /Retention and deletion/);
  assert.match(html, /automatically deleted by Google when that period ends/);
  assert.match(html, /Change your privacy choices/);
  assert.match(html, /Help<\/strong>, then <strong>Privacy Choices/);
  assert.match(html, /Contact/);
  assert.match(html, /href="\/#contact"/);
  assert.match(html, /Last updated: August 31, 2026/);
  assert.doesNotMatch(html, /Google processes this data as a service provider/);
});

test('removes the old price and no-data claim from the public launch post', async () => {
  const html = await readBuiltPage('blog/launching-widgtext');

  assert.match(html, /one-time \$4\.99 purchase/);
  assert.match(html, /Firebase Analytics and Google AdMob/);
  assert.doesNotMatch(html, /one-time \$0\.99 purchase|WidgText collects no data/);
});
