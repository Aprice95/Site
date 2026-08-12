export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  index: string;
  category: string;
  title: string;
  role: string;
  summary: string;
  facts?: string[];
  links?: PortfolioLink[];
};

export type PortfolioCapability = {
  number: string;
  title: string;
  body: string;
  tools: string;
};

export const portfolioData = {
  profile: {
    headline: 'Educator. Digital Producer. Creative Technologist.',
    lede: 'I turn complex tools into clear, useful learning experiences.',
    support:
      'My work sits where instructional design, media production, and software meet—from a complete music technology curriculum to multi-camera concert films and shipped mobile apps.'
  },
  metrics: [
    { value: '150–200', label: 'music technology students each year' },
    { value: '95-page', label: 'original digital textbook' },
    { value: '9 guided walkthroughs', label: '~175 minutes of instruction' },
    { value: '2 apps shipped', label: 'across iOS and Android' }
  ],
  projects: [
    {
      index: '01',
      category: 'Learning platform',
      title: 'Music Tech Made Simple',
      role: 'Author · Instructional designer · Producer · Editor',
      summary:
        'A complete, project-based music technology course built from the page up: original writing and photography, annotated software demonstrations, assessment materials, and a companion video library.',
      facts: [
        '95-page digital textbook across nine sequenced chapters',
        'Nine project guides, nine quizzes, vocabulary work, and examples',
        'Nine 1080p guided walkthroughs totaling ~175 minutes'
      ],
      links: [
        {
          label: 'Explore the video library',
          href: 'https://www.youtube.com/@MusicTechMadeSimple/videos'
        },
        {
          label: 'Watch the DAW introduction',
          href: 'https://www.youtube.com/watch?v=9qUu9b4FUKY'
        }
      ]
    },
    {
      index: '02',
      category: 'Mobile game',
      title: 'Marching Tycoon',
      role: 'Product design · Development · Creative direction · Launch',
      summary:
        'An independently built idle game shaped by firsthand marching band experience, with a complete visual system, progression design, release workflows, and a cross-platform product site.',
      links: [
        { label: 'Visit the site', href: 'https://marchingtycoon.com/' },
        {
          label: 'App Store',
          href: 'https://apps.apple.com/us/app/marching-tycoon/id6777115732'
        },
        {
          label: 'Google Play',
          href: 'https://play.google.com/store/apps/details?id=com.aaronprice.marchingtycoonand'
        }
      ]
    },
    {
      index: '03',
      category: 'Utility app',
      title: 'WidgText',
      role: 'Product design · Development · Visual assets · Release',
      summary:
        'A focused iOS utility for building custom text widgets, developed and shipped with its interface, visual identity, App Store assets, support site, and private version-controlled codebase.',
      links: [
        {
          label: 'View on the App Store',
          href: 'https://apps.apple.com/us/app/widgtext/id6762033066'
        },
        { label: 'View the product page', href: '/products/widgtext' }
      ]
    },
    {
      index: '04',
      category: 'Production',
      title: 'Concert & Live Media Production',
      role: 'Recording engineer · Camera operator · Editor · Mixer',
      summary:
        'Professional multi-camera concert capture paired with multichannel audio recording, post-production, mixing, and final delivery—plus paid live sound and custom digital sound production for regional programs.',
      links: [
        { label: 'View music work', href: 'https://www.youtube.com/@BJGD5' },
        {
          label: 'Request production samples',
          href: 'mailto:hello@marchingtycoon.com?subject=Production%20sample%20request'
        }
      ]
    },
    {
      index: '05',
      category: 'Program design',
      title: 'Music Technology Program Growth',
      role: 'Program lead · Curriculum designer · Teacher',
      summary:
        'Grew a 15-student offering into a 150–200-student annual program and one of the school’s fastest-growing electives. Shared the curriculum with other district schools and coordinated a full year of remote instruction, assets, meetings, assignments, and assessment.',
      links: [
        { label: 'Explore a learning sample', href: '/euclidean-rhythm-lab' }
      ]
    }
  ] satisfies PortfolioProject[],
  capabilities: [
    {
      number: '01',
      title: 'Video production',
      body: 'Multi-camera capture, editorial planning, screen recording, motion graphics, color, compression, and delivery.',
      tools: 'Final Cut Pro · Adobe Premiere Pro · After Effects'
    },
    {
      number: '02',
      title: 'Audio production',
      body: 'Multichannel recording, editing, mixing, mastering, live sound, and original music production.',
      tools: 'Logic Pro · Pro Tools · Professional live audio systems'
    },
    {
      number: '03',
      title: 'Learning content',
      body: 'Curriculum architecture, instructional writing, assessment design, tutorial media, and learner-facing digital assets.',
      tools: 'Digital publishing · LMS workflows · Remote instruction'
    },
    {
      number: '04',
      title: 'Creative technology',
      body: 'Product design, website stewardship, app development, asset pipelines, release management, and version control.',
      tools: 'HTML/CSS · Git · iOS · Android · Adobe Creative Cloud'
    }
  ] satisfies PortfolioCapability[]
} as const;
