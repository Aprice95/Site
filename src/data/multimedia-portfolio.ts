export type YouTubeMedia = {
  kind: 'youtube';
  id: string;
  title: string;
  duration: string;
  poster: string;
  externalUrl: string;
  accessibilityNote: string;
};

export type LocalVideoMedia = {
  kind: 'local';
  title: string;
  src: string;
  poster: string;
  accessibilityNote: string;
};

export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  role: string;
  need: string;
  decisions: readonly string[];
  deliverables: readonly string[];
  tools: string;
  viewingPoints: readonly string[];
};

export type VisualStoryItem = {
  src: string;
  alt: string;
  label: string;
};

export const multimediaPortfolio = {
  hero: {
    eyebrow: 'Multimedia Production Portfolio',
    headline: 'Multimedia production that makes ideas and live moments clear, useful, and human.',
    support:
      'I plan, capture, edit, mix, and deliver visual stories for learners, communities, and digital audiences.',
    proofs: ['Narrative video', 'Photography', 'Digital editing', 'Production management']
  },
  liveProduction: {
    eyebrow: 'Live production · Coile Middle Holiday Concert 2024',
    title: 'Capturing a live community performance',
    need: 'Preserving a live school performance clearly for families and the school community.',
    role: 'Recording engineer · Camera operator · Editor · Mixer',
    decisions: [
      'Multi-camera coverage keeps the performance legible as it unfolds.',
      'Multichannel audio capture preserves the musical detail of a live ensemble.',
      'Synchronization and editorial pacing keep picture and sound aligned from start to finish.',
      'Mixing and final delivery shape a clear, shareable concert record.'
    ],
    deliverables: ['Full concert video', 'Synchronized picture and multichannel audio', 'Final mix and YouTube delivery'],
    tools: 'YouTube delivery · Concert video · School community archive',
    viewingPoints: [
      '00:00 — Opening establishing view of the concert space and performers.',
      '04:12 — A clean camera transition during a musical selection.',
      '16:48 — Stable audio/video continuity through a sustained musical passage.'
    ],
    media: {
      kind: 'youtube',
      id: 'klKOPtfOaqs',
      title: 'Coile Middle Holiday Concert 2024',
      duration: '23:20',
      poster: '/images/portfolio/multimedia/coile-holiday-concert.jpg',
      externalUrl: 'https://www.youtube.com/watch?v=klKOPtfOaqs',
      accessibilityNote: 'Select play to load the concert from YouTube.'
    } satisfies YouTubeMedia
  },
  educationalMedia: {
    eyebrow: 'Educational media · Music Tech Made Simple',
    title: 'A complete, project-based music technology course',
    need: 'Giving beginning music creators a clear path from first software steps to making and sharing original work.',
    role: 'Author · Instructional designer · Producer · Editor',
    summary:
      'Music Tech Made Simple combines a 95-page digital textbook across nine sequenced chapters with project guides, quizzes, vocabulary work, examples, and guided video walkthroughs.',
    decisions: [
      'Sequenced chapters pair foundational concepts with hands-on projects.',
      'Annotated software demonstrations make DAW decisions visible in context.',
      'Course-page compositions carry the visual language of the curriculum into each lesson.',
      'Video walkthroughs extend the written curriculum with guided demonstrations.'
    ],
    deliverables: [
      '95-page digital textbook across nine sequenced chapters',
      'Nine project guides, nine quizzes, vocabulary work, and examples',
      'Nine guided walkthroughs totaling approximately 175 minutes of instruction'
    ],
    tools: 'Digital textbook · DAW demonstrations · YouTube video library',
    media: {
      kind: 'youtube',
      id: 'eJRE3znUYaA',
      title: 'Podcast Project Video Walkthrough',
      duration: '33:24',
      poster: '/images/portfolio/podcast-walkthrough.avif',
      externalUrl: 'https://www.youtube.com/watch?v=eJRE3znUYaA',
      accessibilityNote: 'Select play to load the Podcast Project walkthrough from YouTube. The written case-study summary provides a usable alternative when source captions are unavailable.'
    } satisfies YouTubeMedia,
    supportingMedia: [
      {
        kind: 'youtube',
        id: '9qUu9b4FUKY',
        title: 'DAW Introduction',
        duration: '20:00',
        poster: '/images/portfolio/multimedia/daw-introduction.jpg',
        externalUrl: 'https://www.youtube.com/watch?v=9qUu9b4FUKY',
        accessibilityNote: 'Select play to load the DAW Introduction from YouTube. The written case-study summary provides a usable alternative when source captions are unavailable.'
      },
      {
        kind: 'youtube',
        id: 'WtsmqB7ogkA',
        title: '12 Bar Blues',
        duration: '21:00',
        poster: '/images/portfolio/multimedia/12-bar-blues.jpg',
        externalUrl: 'https://www.youtube.com/watch?v=WtsmqB7ogkA',
        accessibilityNote: 'Select play to load 12 Bar Blues from YouTube. The written case-study summary provides a usable alternative when source captions are unavailable.'
      }
    ] satisfies readonly YouTubeMedia[]
  },
  campaignProduction: {
    eyebrow: 'Campaign production · Marching Tycoon short-form system',
    title: 'A repeatable short-form campaign system',
    need: 'Turning a set of verified game features into a compact campaign that can move from brief to delivery across vertical social formats.',
    role: 'Creative strategist · Copywriter · Editor · QA lead',
    summary:
      'Marching Tycoon’s campaign pairs four playable short-form videos with a format-adaptation workflow. Each piece uses clear captions and visual hierarchy, deliberate pacing, and a final quality check for an audience-ready delivery.',
    workflow: ['Brief', 'Format system', 'Edit', 'Quality check', 'Delivery'],
    decisions: [
      'Adapt the same creative system for vertical social delivery while keeping the gameplay evidence legible.',
      'Use captions, concise copy, and a consistent hierarchy so each idea reads quickly without sound.',
      'Build pacing around the moment each feature becomes understandable, then check timing, captions, and exports before delivery.'
    ],
    deliverables: ['Four vertical campaign videos', 'Matching cover frames and campaign contact sheet', 'Format-ready captions, hierarchy, and QA pass'],
    tools: 'Marching Tycoon gameplay assets · Short-form edit · Caption and hierarchy system · Export QA',
    media: [
      {
        kind: 'local',
        title: 'Band Camp Damage Speedrun',
        src: '/video/portfolio/multimedia/marching-tycoon/01-band-camp-damage-speedrun.mp4',
        poster: '/images/portfolio/multimedia/marching-tycoon/01-band-camp-damage-speedrun-cover.png',
        accessibilityNote: 'A short-form gameplay edit showing the band-camp damage recovery loop.'
      },
      {
        kind: 'local',
        title: 'Every Band Has These People',
        src: '/video/portfolio/multimedia/marching-tycoon/02-every-band-has-these-people.mp4',
        poster: '/images/portfolio/multimedia/marching-tycoon/02-every-band-has-these-people-cover.png',
        accessibilityNote: 'A short-form gameplay edit introducing the staff roles that keep a band running.'
      },
      {
        kind: 'local',
        title: 'The Boosters Finally Came Through',
        src: '/video/portfolio/multimedia/marching-tycoon/03-the-boosters-finally-came-through.mp4',
        poster: '/images/portfolio/multimedia/marching-tycoon/03-the-boosters-finally-came-through-cover.png',
        accessibilityNote: 'A short-form gameplay edit showing the booster-funding feature in action.'
      },
      {
        kind: 'local',
        title: 'Band Kid Timing Challenge',
        src: '/video/portfolio/multimedia/marching-tycoon/04-band-kid-timing-challenge.mp4',
        poster: '/images/portfolio/multimedia/marching-tycoon/04-band-kid-timing-challenge-cover.png',
        accessibilityNote: 'A short-form gameplay timing challenge set to the campaign’s rhythmic interaction.'
      }
    ] satisfies readonly LocalVideoMedia[],
    contactSheet: '/images/portfolio/multimedia/marching-tycoon/contact-sheet.jpg'
  },
  visualStorytelling: [
    {
      src: '/images/portfolio/multimedia/coile-holiday-concert.jpg',
      alt: 'Poster frame for the Coile Middle Holiday Concert 2024 video',
      label: 'Video poster · Coile Middle Holiday Concert 2024'
    },
    {
      src: '/images/portfolio/podcast-walkthrough.avif',
      alt: 'Poster frame for the Podcast Project Video Walkthrough',
      label: 'Video poster · Podcast Project walkthrough'
    },
    {
      src: '/images/portfolio/multimedia/mtms-hardware-page.jpg',
      alt: 'Music Tech Made Simple curriculum page 50, Chapter 7: Audio Hardware',
      label: 'Curriculum composition · Music Tech Made Simple page 50'
    },
    {
      src: '/images/portfolio/multimedia/mtms-studio-page.jpg',
      alt: 'Music Tech Made Simple curriculum page 55, studio sound-treatment lesson',
      label: 'Curriculum composition · Music Tech Made Simple page 55'
    },
    {
      src: '/images/portfolio/multimedia/mtms-recording-page.jpg',
      alt: 'Music Tech Made Simple curriculum page 57, Chapter 8: Recording Audio',
      label: 'Curriculum composition · Music Tech Made Simple page 57'
    },
    {
      src: '/images/portfolio/multimedia/mando-brightside.jpg',
      alt: 'Poster frame for the Mando Brightside video',
      label: 'Video poster · Mando Brightside'
    }
  ] satisfies readonly VisualStoryItem[],
  creativeWork: {
    eyebrow: 'Personal creative work',
    title: 'Selected creative work',
    support: 'Short performance videos selected as personal creative evidence.',
    media: [
      {
        kind: 'youtube',
        id: 'MSLR4xXSwUw',
        title: 'Mando Brightside',
        duration: '1:55',
        poster: '/images/portfolio/multimedia/mando-brightside.jpg',
        externalUrl: 'https://www.youtube.com/watch?v=MSLR4xXSwUw',
        accessibilityNote: 'Select play to load Mando Brightside from YouTube. The title and duration provide a concise alternative when source captions are unavailable.'
      },
      {
        kind: 'youtube',
        id: 'GIcdUm7W7vk',
        title: 'The American Dream Is Killing Me — Guitar Cover',
        duration: '3:17',
        poster: '/images/portfolio/multimedia/green-day-cover.jpg',
        externalUrl: 'https://www.youtube.com/watch?v=GIcdUm7W7vk',
        accessibilityNote: 'Select play to load The American Dream Is Killing Me — Guitar Cover from YouTube. The title and duration provide a concise alternative when source captions are unavailable.'
      }
    ] satisfies readonly YouTubeMedia[]
  },
  closing: 'Good production is equal parts story, systems, and care for the audience.'
} as const;
