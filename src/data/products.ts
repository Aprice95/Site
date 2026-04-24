export type Product = {
  slug: 'widgtext' | 'switchboard';
  name: string;
  status: string;
  shortDescription: string;
  description: string;
  features: string[];
  ctaPrimary: {
    href: string;
    label: string;
  };
  ctaSecondary: {
    href: string;
    label: string;
  };
};

export const products: Product[] = [
  {
    slug: 'widgtext',
    name: 'WidgText',
    status: 'Available now',
    shortDescription:
      'A customizable text widget app for iPhone that puts quotes, reminders, goals, and personal messages directly on the Home Screen or Lock Screen.',
    description:
      'WidgText is built for people who want their widgets to feel personal instead of generic. It combines simple editing with deeper styling controls so a widget can work as motivation, memory aid, or daily prompt.',
    features: [
      'Create independent widgets with custom text, fonts, colors, gradients, borders, and shadows',
      'Use Quote Mode to rotate through a list of quotes or reminders every refresh',
      'Supports multiple widget slots, presets, and Home Screen or Lock Screen layouts'
    ],
    ctaPrimary: {
      href: '/products/widgtext',
      label: 'View product'
    },
    ctaSecondary: {
      href: '/#contact',
      label: 'Ask about WidgText'
    }
  },
  {
    slug: 'switchboard',
    name: 'Switchboard',
    status: 'In development',
    shortDescription:
      'An audio routing utility built to make switching playback devices faster by turning Shortcuts into a clean, configurable widget and control surface.',
    description:
      'Switchboard is designed for people who switch audio devices often and want that process to be faster, clearer, and easier to automate. The product centers on widget-driven device control, organization, and visibility into usage patterns.',
    features: [
      'Launch device-specific shortcuts from the app or widget to switch audio output quickly',
      'Organize devices with custom names, icons, colors, order, visibility, and time-based profiles',
      'Track usage history and preview widget density across small, medium, and large layouts'
    ],
    ctaPrimary: {
      href: '/products/switchboard',
      label: 'View product'
    },
    ctaSecondary: {
      href: '/#contact',
      label: 'Ask about Switchboard'
    }
  }
];
