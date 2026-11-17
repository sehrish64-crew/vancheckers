import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About VanCheckers — Digital PDF Vehicle Reports',
  description:
    'Learn about VanCheckers Digital PDF Reports for vans, campervans, and motorhomes. Reports are digital products; no physical inspection is included.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About VanCheckers — Digital PDF Vehicle Reports',
    description:
      'Digital PDF Reports covering vans, campervans, and motorhomes. No in-person inspection or vehicle testing is provided.',
    url: 'https://vancheckers.com/about',
    images: ['/opengraph-image'],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
