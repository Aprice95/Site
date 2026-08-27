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
  closing: 'Good production is equal parts story, systems, and care for the audience.'
} as const;
