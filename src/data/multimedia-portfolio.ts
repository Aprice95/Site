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
};

export const multimediaPortfolio = {
  hero: {
    eyebrow: 'Multimedia Production Portfolio',
    headline: 'Multimedia production that makes ideas and live moments clear, useful, and human.',
    support:
      'I plan, capture, edit, mix, and deliver visual stories for learners, communities, and digital audiences.',
    proofs: ['Narrative video', 'Photography', 'Digital editing', 'Production management']
  },
  closing: 'Good production is equal parts story, systems, and care for the audience.'
} as const;
