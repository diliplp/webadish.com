import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import PricingClient from '@/components/PricingClient';

export const metadata: Metadata = {
  title: 'WordPress Protection Pricing | WebAdish',
  description: 'Global USD pricing for WordPress protection plans, security retainers, and incident response support.',
};

export default function PricingPage() {
  return (
    <SiteLayout>
      <PricingClient />
    </SiteLayout>
  );
}
