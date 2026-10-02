import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const folder = new URL('../dist/products/widgtext/collections/', import.meta.url);

test('built collection route serves its catalog and resolves the published shared look', async () => {
  const html = await readFile(new URL('index.html', folder), 'utf8');
  const catalog = JSON.parse(await readFile(new URL('catalog-v1.json', folder), 'utf8'));
  const script = html.match(/<script id="collection-app">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(script, 'Astro output must retain the executable collection page');
  const sandbox = { module: { exports: {} }, URL, URLSearchParams };
  vm.runInNewContext(script, sandbox, { timeout: 2000 });
  const api = sandbox.module.exports;
  api.validateCatalog(catalog);
  const route = api.parseRoute('?collection=cozy-evenings&theme=cozy-evenings-amber-lamp');
  const collection = catalog.collections.find(c => c.id === route.collectionID);
  assert.equal(collection.themes.find(t => t.preset.id === route.themeID).access, 'free');
  assert.equal(api.appStoreURL, 'https://apps.apple.com/app/id6762033066?ct=widget-share');
  assert.match(html, /fetch\(['"]\.\/catalog-v1\.json/);
});

test('built public catalog retains all three scheduled drops and has no private draft data', async () => {
  const catalog = JSON.parse(await readFile(new URL('catalog-v1.json', folder), 'utf8'));
  assert.deepEqual(catalog.collections.map(c => c.releaseDate), ['2026-10-01', '2026-10-22', '2026-11-12']);
  for (const collection of catalog.collections) {
    assert.equal(collection.themes.length, 6);
    assert.equal(collection.quotes.length, 18);
    assert.equal(collection.themes.filter(t => t.access === 'reward').length, 1);
  }
  assert.ok(!JSON.stringify(catalog).includes('A private test note'));
});
