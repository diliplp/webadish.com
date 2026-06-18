import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WebAdish | WordPress Security & Protection Agency',
  description:
    'WebAdish provides WordPress security, protection plans, hacked site recovery, and retainers for businesses that cannot afford downtime, breaches, or slow support.',
  metadataBase: new URL('https://www.webadish.com'),
  alternates: {
    canonical: '/',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WebAdish',
  legalName: 'WebAdish LLP',
  url: 'https://www.webadish.com',
  logo: 'https://www.webadish.com/logo.webp',
  email: 'hello@webadish.com',
  telephone: '+91 9998757045',
  sameAs: [
    'https://www.linkedin.com/company/webadish',
    'https://twitter.com/webadish',
    'https://facebook.com/webadish',
    'https://instagram.com/webadish',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'WordPress security and protection',
  serviceType: 'WordPress security, hacked site recovery, incident response, and protection retainers',
  provider: {
    '@type': 'Organization',
    name: 'WebAdish',
    url: 'https://www.webadish.com',
  },
  areaServed: 'Worldwide',
  offers: [
    {
      '@type': 'Offer',
      name: 'WordPress Protection Plan',
      price: '199',
      priceCurrency: 'USD',
      url: 'https://www.webadish.com/pricing',
    },
    {
      '@type': 'Offer',
      name: 'Hacked WordPress Site Recovery',
      url: 'https://www.webadish.com/hacked-site-recovery',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, serviceSchema]),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
