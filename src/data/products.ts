export type StoreLinks = {
  appStore?: string;
  googlePlay?: string;
  web?: string;
};

export type Product = {
  slug: 'widgtext' | 'marching-tycoon' | 'setflow';
  name: string;
  status: 'shipped' | 'upcoming';
  statusLabel: string;
  platforms: string;
  tagline: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: { title: string; body: string }[];
  facts: { label: string; value: string }[];
  links: StoreLinks;
  screenshots: { src: string; alt: string }[];
};

export const products: Product[] = [
  {
    slug: 'widgtext',
    name: 'WidgText',
    status: 'shipped',
    statusLabel: 'On the App Store',
    platforms: 'iPhone · iPad · Mac · Vision Pro',
    tagline: 'Your Home Screen, your words.',
    shortDescription:
      'Put your own words on your Home Screen and Lock Screen — quotes, reminders, mantras, inside jokes — styled exactly the way you want.',
    description:
      'WidgText is for people who want their widgets to feel personal instead of generic. Type anything, then style it with fonts, gradients, and borders until it looks like yours — as motivation, a memory aid, or a daily nudge.',
    icon: '/images/apps/widgtext-icon.png',
    features: [
      {
        title: 'Type anything',
        body: 'A live-preview editor for your own words — no templates, no accounts, no fuss.'
      },
      {
        title: 'Style every detail',
        body: '50+ fonts with bold and italic, multi-color gradients up to four colors, and six border styles from clean solid to neon.'
      },
      {
        title: 'Quote Mode',
        body: 'Load up a list of quotes or reminders and let the widget rotate through them every 15 minutes, hourly, or daily.'
      },
      {
        title: 'Eight widget slots',
        body: 'Run multiple independent widgets, each with its own text, style, and refresh schedule.'
      },
      {
        title: 'Home and Lock Screen',
        body: 'Small, medium, and large widgets plus Lock Screen accessories, so your words are there at a glance.'
      },
      {
        title: 'Private by design',
        body: 'WidgText collects no data. Your words stay on your device, period.'
      }
    ],
    facts: [
      { label: 'Price', value: 'Free · one-time $0.99 Pro unlock' },
      { label: 'Version', value: '2.2' },
      { label: 'Requires', value: 'iOS 17 or later' },
      { label: 'Privacy', value: 'No data collected' }
    ],
    links: {
      appStore: 'https://apps.apple.com/us/app/widgtext/id6762033066'
    },
    screenshots: [
      {
        src: '/images/apps/widgtext-shot-1.jpg',
        alt: 'WidgText widgets on an iPhone Home Screen — “Your words, your way. Type anything. Style it however you want.”'
      },
      {
        src: '/images/apps/widgtext-shot-2.jpg',
        alt: 'A gradient WidgText widget sitting on an iPhone Home Screen.'
      },
      {
        src: '/images/apps/widgtext-shot-3.jpg',
        alt: 'WidgText editor with fonts, styles, and up to eight independent widgets.'
      }
    ]
  },
  {
    slug: 'marching-tycoon',
    name: 'Marching Tycoon',
    status: 'shipped',
    statusLabel: 'iOS · Android',
    platforms: 'iPhone · iPad · Android',
    tagline: 'Start with one marcher. Build the whole band.',
    shortDescription:
      'A retro pixel idle game about building a marching band — tap the metronome, hire staff, buy gear, and march from local shows to galactic finals.',
    description:
      'Marching Tycoon is built for quick check-ins. Tap in time to push rehearsal forward, let your staff and equipment carry the program while you are away, and take the band to competition when the season is ready. One marcher becomes a packed field, fifteen tiers deep.',
    icon: '/images/apps/marching-tycoon-icon.png',
    features: [
      {
        title: 'Tap the metronome',
        body: 'Manual taps earn Reps, and good timing boosts your active play — without turning the whole game into a rhythm test.'
      },
      {
        title: 'Bank offline progress',
        body: 'Close the game and rehearsal keeps moving. Come back, spend your Reps, and clear the next gate.'
      },
      {
        title: 'Hire your staff',
        body: 'Start with the practical jobs. The later roles get much stranger as the seasons climb.'
      },
      {
        title: 'Buy equipment',
        body: 'Gear changes your tap value, passive production, and how fast the ensemble fills out.'
      },
      {
        title: 'Chase the medals',
        body: 'Hit the season goal, head to competition, earn a permanent medal, and roll into the next season stronger.'
      },
      {
        title: 'Watch the field fill',
        body: 'The show starts with a single performer. Keep building and the formation fills in around them.'
      }
    ],
    facts: [
      { label: 'Price', value: 'Free · optional Director’s Pass' },
      { label: 'Version', value: '1.1.4' },
      { label: 'Platforms', value: 'iOS 17+ and Android · web coming soon' },
      { label: 'App Store rating', value: '5.0 ★' }
    ],
    links: {
      appStore: 'https://apps.apple.com/us/app/marching-tycoon/id6777115732',
      googlePlay:
        'https://play.google.com/store/apps/details?id=com.aaronprice.marchingtycoonand'
    },
    screenshots: [
      {
        src: '/images/apps/marching-tycoon-field-start.png',
        alt: 'Marching Tycoon field screen with one marcher and the metronome tap panel.'
      },
      {
        src: '/images/apps/marching-tycoon-rhythm-streak.png',
        alt: 'Marching Tycoon rhythm streak gameplay with the field full of performers.'
      },
      {
        src: '/images/apps/marching-tycoon-trophy-cabinet.png',
        alt: 'Trophy cabinet and legacy artifacts in Marching Tycoon.'
      }
    ]
  },
  {
    slug: 'setflow',
    name: 'SetFlow',
    status: 'upcoming',
    statusLabel: 'In the works',
    platforms: 'iPhone · iPad',
    tagline: 'Marching show rehearsal, synced from drill to performance.',
    shortDescription:
      'Import drill, score, coordinates, and show audio — SetFlow turns the whole packet into one synced rehearsal system for iPhone and iPad.',
    description:
      'SetFlow is built around the documents marching teams already use. Bring in the show packet, review what was scanned, then rehearse: step through sets in Learn mode, run transitions at tempo in Flow mode, and check dots on the real field with AR.',
    icon: '/images/apps/setflow-icon.png',
    features: [
      {
        title: 'Import the packet',
        body: 'Drill charts, score pages, coordinate sheets, and show audio come in as files — no rebuilding the show by hand.'
      },
      {
        title: 'Review the scan',
        body: 'Confirm sets, counts, measures, and tempo marks before rehearsal starts, so the data on the field is right.'
      },
      {
        title: 'Learn and Flow modes',
        body: 'Step manually through sets while cleaning transitions, or run full sequences at tempo with auto-pauses and set callouts.'
      },
      {
        title: 'Audio stays locked',
        body: 'Metronome, voice callouts, and show audio are balanced separately while the roadmap keeps everything in time.'
      },
      {
        title: 'AR field check',
        body: 'Anchor the chart to real yard lines and see performers and props placed on the actual field at full scale.'
      },
      {
        title: 'One show map for everyone',
        body: 'Directors, techs, section leaders, and performers all read the same sets, dots, and timing.'
      }
    ],
    facts: [
      { label: 'Status', value: 'In development' },
      { label: 'Platforms', value: 'iPhone and iPad' },
      { label: 'Beta', value: 'TestFlight coming soon' }
    ],
    links: {},
    screenshots: []
  }
];

export const shippedProducts = products.filter((p) => p.status === 'shipped');
export const upcomingProducts = products.filter((p) => p.status === 'upcoming');
