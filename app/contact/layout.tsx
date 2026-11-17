import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact VanCheckers — Digital PDF Report Enquiries',
  description:
    'Contact VanCheckers with questions about Digital PDF Reports for vans, campervans, and motorhomes. Email info@vancheckers.com.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact VanCheckers — Digital PDF Report Enquiries',
    description:
      'Email info@vancheckers.com with questions about Digital PDF Reports. Reports are digital products; no physical inspection is included.',
    url: 'https://vancheckers.com/contact',
    images: ['/opengraph-image'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
