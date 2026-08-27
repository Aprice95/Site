import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readPortfolio = () =>
  readFile(new URL('../dist/work/multimedia-production/index.html', import.meta.url), 'utf8');

test('publishes the multimedia production portfolio route', async () => {
  const html = await readPortfolio();

  assert.match(html, /Multimedia production that makes ideas and live moments clear, useful, and human\./);
  assert.match(html, /Narrative video/);
  assert.match(html, /Photography/);
  assert.match(html, /Digital editing/);
  assert.match(html, /Production management/);
  assert.match(html, /id="live-production"/);
  assert.match(html, /id="educational-media"/);
  assert.match(html, /id="campaign-production"/);
});
