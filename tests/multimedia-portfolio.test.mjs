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

test('defers privacy-enhanced YouTube players until interaction', async () => {
  const html = await readPortfolio();

  assert.match(html, /data-deferred-youtube/);
  assert.match(html, /data-youtube-id="klKOPtfOaqs"/);
  assert.match(html, /https:\/\/www\.youtube-nocookie\.com\/embed\//);
  assert.match(html, /Watch Coile Middle Holiday Concert 2024 on YouTube/);
  assert.doesNotMatch(html, /<iframe[^>]+src="https:\/\/www\.youtube/);
});

test('explains Aaron’s live production ownership', async () => {
  const html = await readPortfolio();

  assert.match(html, /Capturing a live community performance/);
  assert.match(html, /Recording engineer · Camera operator · Editor · Mixer/);
  assert.match(html, /multi-camera/i);
  assert.match(html, /multichannel audio/i);
  assert.match(html, /synchronization/i);
  assert.match(html, /mixing/i);
});
