import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import PricingClient from '@/components/PricingClient';

export const metadata: Metadata = {
  title: 'WordPress Protection Pricing | WebAdish',
  description: 'Global USD pricing for WordPress protection plans, security retainers, and incident response support.',
};

const pricingFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there setup fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. All plans start immediately with no hidden setup fees.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I upgrade or downgrade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. You can change plans at any time. Upgrades take effect immediately; downgrades at the next billing cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept credit/debit cards, bank transfers, and PayPal. All plans bill monthly or annually.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a free trial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We don't offer a free trial, but we do offer a free security consultation to assess your site before you commit.",
      },
    },
    {
      '@type': 'Question',
      name: 'What if I manage multiple sites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer multi-site discounts. Contact us for a custom quote.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Monthly plans have no contract - cancel anytime with 30 days' notice. Annual plans are paid upfront at a discount.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingFaqSchema),
        }}
      />
      <PricingClient />
    </SiteLayout>
  );
}
