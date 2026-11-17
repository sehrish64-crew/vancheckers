import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Digital PDF Vehicle Reports | VanCheckers',
  description:
    'Clear pricing for Digital PDF Reports for vans, campervans, and motorhomes. Choose a pre-purchase, safety, diagnostics, or habitation report. No physical inspection included.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Digital PDF Vehicle Reports | VanCheckers',
    description:
      'Compare Digital PDF Report packages for vans, campervans, and motorhomes. Orders are digital only; physical inspection is not included.',
    url: 'https://vancheckers.com/pricing',
    images: ['/opengraph-image'],
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
