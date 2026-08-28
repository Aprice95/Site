import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readPortfolio = () =>
  readFile(new URL('../dist/work/multimedia-production/index.html', import.meta.url), 'utf8');

const readAttribute = (attributes, name) =>
  attributes.match(new RegExp(`\\b${name}="([^"]+)"`))?.[1] ?? null;

const readStructuredData = async () => {
  const html = await readPortfolio();
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);

  assert.ok(match, 'expected a JSON-LD script in the portfolio page');
  return JSON.parse(match[1]);
};

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

test('features the instructional and personal YouTube evidence selected in the spec', async () => {
  const html = await readPortfolio();

  for (const id of ['eJRE3znUYaA', '9qUu9b4FUKY', 'WtsmqB7ogkA', 'MSLR4xXSwUw', 'GIcdUm7W7vk']) {
    assert.match(html, new RegExp(`data-youtube-id="${id}"`));
  }
  assert.match(html, /95-page/);
  assert.match(html, /nine sequenced chapters/i);
  assert.match(html, /approximately 175 minutes/i);
  assert.match(html, /Author · Instructional designer · Producer · Editor/);
  assert.match(html, /Selected creative work/);
});

test('shows the four-video campaign system without eager video downloads', async () => {
  const html = await readPortfolio();

  assert.equal((html.match(/<video/g) ?? []).length, 4);
  assert.equal((html.match(/preload="none"/g) ?? []).length, 4);
  assert.doesNotMatch(html, /<video[^>]+autoplay/);
  assert.match(html, /Band Camp Damage Speedrun/);
  assert.match(html, /Every Band Has These People/);
  assert.match(html, /The Boosters Finally Came Through/);
  assert.match(html, /Band Kid Timing Challenge/);
  assert.match(html, /brief.*format system.*edit.*quality check.*delivery/is);
});

test('gives every native campaign video its visible heading as an accessible name', async () => {
  const html = await readPortfolio();
  const headings = new Map(
    [...html.matchAll(/<h3\b([^>]*)>([^<]+)<\/h3>/g)].map(([, attributes, title]) => [
      readAttribute(attributes, 'id'),
      title
    ])
  );
  const videos = [...html.matchAll(/<video\b([^>]*)>/g)].map(([, attributes]) => {
    const labelledBy = readAttribute(attributes, 'aria-labelledby');
    return { labelledBy, title: headings.get(labelledBy) };
  });

  assert.deepEqual(videos, [
    { labelledBy: 'campaign-video-01-band-camp-damage-speedrun-title', title: 'Band Camp Damage Speedrun' },
    { labelledBy: 'campaign-video-02-every-band-has-these-people-title', title: 'Every Band Has These People' },
    { labelledBy: 'campaign-video-03-the-boosters-finally-came-through-title', title: 'The Boosters Finally Came Through' },
    { labelledBy: 'campaign-video-04-band-kid-timing-challenge-title', title: 'Band Kid Timing Challenge' }
  ]);
});

test('keeps the multimedia page semantic, private, and non-autoplaying', async () => {
  const html = await readPortfolio();

  assert.match(html, /<main\b[^>]*>/);
  assert.equal((html.match(/<h1\b[^>]*>/g) ?? []).length, 1);
  assert.match(html, /aria-labelledby="live-production-title"/);
  assert.match(html, /aria-labelledby="educational-media-title"/);
  assert.match(html, /aria-labelledby="campaign-production-title"/);
  assert.match(html, /Good production is equal parts story, systems, and care for the audience\./);
  assert.match(html, /href="mailto:hello@marchingtycoon\.com"/);
  assert.match(html, /Back to the main portfolio/);
  assert.doesNotMatch(html, /FoodCorps/i);
  assert.doesNotMatch(html, /student name|student email|grade data/i);
  assert.doesNotMatch(html, /<video[^>]+autoplay/);
  assert.equal((html.match(/preload="none"/g) ?? []).length, 4);
});

test('keeps YouTube fallbacks and visual-source labels available without JavaScript', async () => {
  const html = await readPortfolio();
  const fallbacks = [...html.matchAll(/<noscript\b[^>]*>\s*<a\b[^>]*href="([^"]+)"[^>]*>\s*Watch\s+([^<]+?)\s+on YouTube\s*<\/a>\s*<\/noscript>/g)].map(
    ([, url, title]) => ({ url, title })
  );
  const visualStrip = html.match(/<section\b[^>]*class="[^"]*\bvisual-strip\b[^"]*"[^>]*>([\s\S]*?)<\/section>/);

  assert.deepEqual(fallbacks, [
    { url: 'https://www.youtube.com/watch?v=klKOPtfOaqs', title: 'Coile Middle Holiday Concert 2024' },
    { url: 'https://www.youtube.com/watch?v=eJRE3znUYaA', title: 'Podcast Project Video Walkthrough' },
    { url: 'https://www.youtube.com/watch?v=9qUu9b4FUKY', title: 'DAW Introduction' },
    { url: 'https://www.youtube.com/watch?v=WtsmqB7ogkA', title: '12 Bar Blues' },
    { url: 'https://www.youtube.com/watch?v=MSLR4xXSwUw', title: 'Mando Brightside' },
    { url: 'https://www.youtube.com/watch?v=GIcdUm7W7vk', title: 'The American Dream Is Killing Me — Guitar Cover' }
  ]);
  assert.ok(visualStrip, 'expected the visual-storytelling strip');
  assert.deepEqual(
    [...visualStrip[1].matchAll(/<figcaption\b[^>]*>\s*([^<]+?)\s*<\/figcaption>/g)].map(([, caption]) => caption),
    [
      'Video poster · Coile Middle Holiday Concert 2024',
      'Video poster · Podcast Project walkthrough',
      'Curriculum composition · Music Tech Made Simple page 50',
      'Curriculum composition · Music Tech Made Simple page 55',
      'Curriculum composition · Music Tech Made Simple page 57',
      'Video poster · Mando Brightside'
    ]
  );
});

test('ships responsive and reduced-motion multimedia styles', async () => {
  const html = await readPortfolio();
  const stylesheetPaths = [...html.matchAll(/href="(\/_astro\/[^\"]+\.css)"/g)].map((match) => match[1]);
  const stylesheets = await Promise.all(
    stylesheetPaths.map((path) => readFile(new URL(`../dist${path}`, import.meta.url), 'utf8'))
  );
  const css = stylesheets.join('\n');

  assert.match(css, /\.multimedia-hero\{/);
  assert.match(css, /\.case-study-grid\{/);
  assert.match(css, /\.campaign-grid\{/);
  assert.match(css, /\.hero-still\{[^}]*aspect-ratio:4\/5/);
  assert.match(css, /\.hero-copy h1\{[^}]*font-size:clamp\(50px,5\.3vw,78px\)/);
  assert.match(css, /\.portfolio-wordmark\{[^}]*min-width:44px[^}]*min-height:44px/);
  assert.match(css, /\.multimedia-portfolio \.portfolio-header nav\{[^}]*grid-template-columns:repeat\(4,minmax\(0,1fr\)\)/);
  assert.match(css, /@media \((?:max-width:|width<=)900px\)/);
  assert.match(css, /@media \((?:max-width:|width<=)620px\)/);
  assert.match(css, /@media \(prefers-reduced-motion:reduce\)/);
});

test('publishes page-specific metadata and structured portfolio data', async () => {
  const html = await readPortfolio();

  assert.match(html, /<title>Multimedia Production Portfolio \| Aaron Price<\/title>/);
  assert.match(html, /Narrative video, photography, educational media, live production, and digital campaign work produced by Aaron Price\./);
  assert.match(html, /<link rel="canonical" href="https:\/\/aaronprice\.org\/work\/multimedia-production\/?">/);
  assert.match(html, /multimedia-social-card\.png/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /"@type":"CollectionPage"/);
});

test('describes each verified portfolio video as a VideoObject', async () => {
  const structuredData = await readStructuredData();
  const works = structuredData.mainEntity.itemListElement;

  assert.deepEqual(works.map((work) => work.video), [
    {
      '@type': 'VideoObject',
      name: 'Coile Middle Holiday Concert 2024',
      url: 'https://www.youtube.com/watch?v=klKOPtfOaqs'
    },
    [
      {
        '@type': 'VideoObject',
        name: 'Podcast Project Video Walkthrough',
        url: 'https://www.youtube.com/watch?v=eJRE3znUYaA'
      },
      {
        '@type': 'VideoObject',
        name: 'DAW Introduction',
        url: 'https://www.youtube.com/watch?v=9qUu9b4FUKY'
      },
      {
        '@type': 'VideoObject',
        name: '12 Bar Blues',
        url: 'https://www.youtube.com/watch?v=WtsmqB7ogkA'
      }
    ],
    [
      {
        '@type': 'VideoObject',
        name: 'Band Camp Damage Speedrun',
        contentUrl: 'https://aaronprice.org/video/portfolio/multimedia/marching-tycoon/01-band-camp-damage-speedrun.mp4'
      },
      {
        '@type': 'VideoObject',
        name: 'Every Band Has These People',
        contentUrl: 'https://aaronprice.org/video/portfolio/multimedia/marching-tycoon/02-every-band-has-these-people.mp4'
      },
      {
        '@type': 'VideoObject',
        name: 'The Boosters Finally Came Through',
        contentUrl: 'https://aaronprice.org/video/portfolio/multimedia/marching-tycoon/03-the-boosters-finally-came-through.mp4'
      },
      {
        '@type': 'VideoObject',
        name: 'Band Kid Timing Challenge',
        contentUrl: 'https://aaronprice.org/video/portfolio/multimedia/marching-tycoon/04-band-kid-timing-challenge.mp4'
      }
    ]
  ]);
});
