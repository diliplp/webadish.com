import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WebAdish | WordPress Security & Protection Agency',
  description:
    'WebAdish provides WordPress security, protection plans, hacked site recovery, and retainers for businesses that cannot afford downtime, breaches, or slow support.',
  metadataBase: new URL('https://www.webadish.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
