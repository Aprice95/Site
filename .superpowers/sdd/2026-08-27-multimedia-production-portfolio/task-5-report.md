# Task 5 report: Marching Tycoon campaign system

## Status

Implemented and committed the Marching Tycoon campaign case study with four native local videos, matching covers, contact sheet, reusable `LocalVideoCard`, campaign data, workflow, and the stable `campaign-production` section anchor.

## RED/GREEN evidence

- RED: `npm run build && node --test tests/multimedia-portfolio.test.mjs` built successfully but failed the new campaign test because the built page contained `0` native `<video>` elements instead of `4`.
- GREEN: The same command passed after implementation: 5 tests passed, 0 failed.
- Full verification: `npm test` passed all 17 tests, 0 failed.

## Source and destination assets

All assets were copied byte-for-byte from the canonical non-`Vids` source folders under `/Users/pricea/Developer/Marching Tycoon/Store Assets/vertical_ads_dual_format_2026_07/`. Destination MP4 SHA-256 values match the source manifest.

| Source asset | Destination | Size (bytes) |
| --- | --- | ---: |
| `01-band-camp-damage-speedrun/01-band-camp-damage-speedrun.mp4` | `public/video/portfolio/multimedia/marching-tycoon/01-band-camp-damage-speedrun.mp4` | 6,645,767 |
| `02-every-band-has-these-people/02-every-band-has-these-people.mp4` | `public/video/portfolio/multimedia/marching-tycoon/02-every-band-has-these-people.mp4` | 7,202,291 |
| `03-the-boosters-finally-came-through/03-the-boosters-finally-came-through.mp4` | `public/video/portfolio/multimedia/marching-tycoon/03-the-boosters-finally-came-through.mp4` | 7,958,945 |
| `04-band-kid-timing-challenge/04-band-kid-timing-challenge.mp4` | `public/video/portfolio/multimedia/marching-tycoon/04-band-kid-timing-challenge.mp4` | 6,017,482 |
| `01-band-camp-damage-speedrun/01-band-camp-damage-speedrun-cover.png` | `public/images/portfolio/multimedia/marching-tycoon/01-band-camp-damage-speedrun-cover.png` | 331,179 |
| `02-every-band-has-these-people/02-every-band-has-these-people-cover.png` | `public/images/portfolio/multimedia/marching-tycoon/02-every-band-has-these-people-cover.png` | 309,089 |
| `03-the-boosters-finally-came-through/03-the-boosters-finally-came-through-cover.png` | `public/images/portfolio/multimedia/marching-tycoon/03-the-boosters-finally-came-through-cover.png` | 331,563 |
| `04-band-kid-timing-challenge/04-band-kid-timing-challenge-cover.png` | `public/images/portfolio/multimedia/marching-tycoon/04-band-kid-timing-challenge-cover.png` | 417,572 |
| `campaign-covers.jpg` | `public/images/portfolio/multimedia/marching-tycoon/contact-sheet.jpg` | 95,345 |

Total campaign video weight is 27,824,485 bytes; each MP4 is below 10 MB and GitHub’s 100 MB per-file limit.

## Files

- `src/components/LocalVideoCard.astro`
- `src/data/multimedia-portfolio.ts`
- `src/pages/work/multimedia-production.astro`
- `tests/multimedia-portfolio.test.mjs`
- `public/video/portfolio/multimedia/marching-tycoon/*.mp4`
- `public/images/portfolio/multimedia/marching-tycoon/*.png`
- `public/images/portfolio/multimedia/marching-tycoon/contact-sheet.jpg`

## Commit

- `feat: add short-form campaign production case study`

## Self-review

- Exactly four local `<video>` elements render, each with `controls`, `playsinline`, and `preload="none"`; none autoplay.
- The campaign retains `id="campaign-production"` and exposes `.campaign-grid`, `.campaign-card`, and `.campaign-workflow` hooks for Task 6.
- The case study includes production need, role, playable evidence, decisions, deliverables, and tools, with the exact five-step workflow: Brief → Format system → Edit → Quality check → Delivery.
- Copy describes format adaptation, captions/hierarchy, pacing, and QA without reach or conversion claims.
- Existing selected creative work remains available in its own `creative-work` section.

## Concerns

- Campaign styling is intentionally deferred to Task 6 as requested.
- The contact sheet and cover files are lazy-loaded images; local video network loading remains deferred by `preload="none"`.
