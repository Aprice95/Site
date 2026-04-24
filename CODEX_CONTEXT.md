# Codex Handoff Context

## Repo

- Workspace: `/Users/pricea/Developer/Site`
- Current site file: `/Users/pricea/Developer/Site/index.html`
- Site is currently a single-page static HTML file with inline CSS and inline JavaScript.

## What was changed

- Reworked the site into a more minimal visual style.
- Simplified typography to a single font family: `Plus Jakarta Sans`.
- Kept the site as a single static page rather than moving to a framework.
- Wired both contact forms to live Formspree endpoints.
- Added a lightweight blog section powered by `window.BLOG_POSTS` in the page script.
- Replaced most placeholder/internal copy with customer-facing copy.
- Populated the two app sections using information pulled from neighboring project folders:
  - `../WidgText`
  - `../Switchboard`

## Current live assumptions in the site

- `WidgText` is presented as available now.
- `Switchboard` is presented as in development.
- No App Store or Play Store links were added because none were confirmed from the codebase.
- Blog posts are currently sample content rendered from a JavaScript array, not a CMS or Markdown system.

## Form configuration

These are already wired in `index.html`:

- Contact form endpoint: `https://formspree.io/f/xbdqkveo`
- Support form endpoint: `https://formspree.io/f/mrerlnlz`

They are stored in:

- `window.SITE_CONFIG.contactEndpoint`
- `window.SITE_CONFIG.supportEndpoint`

## App copy source notes

### WidgText

Source files inspected:

- `../WidgText/WidgText/ContentView.swift`
- `../WidgText/WidgText/OnboardingView.swift`
- `../WidgText/WidgText/HelpView.swift`
- `../WidgText/WidgText/PresetsView.swift`

Product characteristics inferred from code:

- Custom text widgets for Home Screen and Lock Screen
- Multiple widget slots
- Quote rotation / quote mode
- Font, color, gradient, border, shadow, and style customization
- Presets and onboarding/help flows
- Pro unlock for additional slots and advanced styling

### Switchboard

Source files inspected:

- `../Switchboard/Switchboard/ContentView.swift`
- `../Switchboard/Switchboard/HistoryView.swift`
- `../Switchboard/Switchboard/SettingsView.swift`
- `../Switchboard/Shared/AudioSwitchIntent.swift`
- `../Switchboard/Shared/DeviceConfig.swift`

Product characteristics inferred from code:

- Audio output switching via Apple Shortcuts
- Widget-driven device switching
- Configurable device names, icons, colors, order, and visibility
- Profiles / time-based configuration
- Usage history / analytics
- Preview support for small, medium, and large widget layouts

## Current content structure in index.html

Main sections:

- Hero
- Apps
- Blog
- Contact / Support

Blog implementation:

- Posts are stored in `window.BLOG_POSTS`
- Blog list and selected post viewer are rendered client-side
- This is suitable for a few seeded posts, but not ideal if the site needs to function primarily as a blog

## User’s stated direction

The user asked:

- for a full UI redesign
- for contact forms to work
- to simplify the design and font
- to make the site capable of blog posts
- to replace temporary text with customer-facing copy
- to populate app sections with `WidgText` and `Switchboard`

The user also asked:

- whether there is a more convenient way to make blog posts without editing HTML
- how to support rich text and images
- how to make the site function primarily as a blog while still serving as a product/customer info site

## Recommended next step

If continuing this project, the strongest next move is:

1. Migrate from the single-file static page to a static site generator.
2. Prefer `Astro` unless there is a reason to choose something heavier.
3. Move blog posts into Markdown/MDX files.
4. Create dedicated product pages for:
   - `WidgText`
   - `Switchboard`
5. Keep contact/support forms as shared components.
6. Turn the homepage into a hub for:
   - latest posts
   - featured products
   - support/contact entry points

## Suggested target site architecture

- `/` home
- `/blog` blog index
- `/blog/[slug]` post pages
- `/products` product index
- `/products/widgtext`
- `/products/switchboard`

## Known limitations of current implementation

- All site logic is still in one HTML file.
- Blog posts are not stored separately.
- Rich text authoring and image handling are primitive in the current setup.
- No CMS/editor workflow exists.
- Product CTAs currently use internal anchors instead of real store links.

## File likely to edit next

- `/Users/pricea/Developer/Site/index.html`

## If another Codex instance picks this up

Likely useful first actions:

- inspect `index.html`
- decide whether to keep the single-file site or migrate to Astro
- if migrating, preserve:
  - current minimal visual direction
  - Formspree endpoints
  - existing customer-facing copy where still useful
  - app-specific messaging for WidgText and Switchboard
