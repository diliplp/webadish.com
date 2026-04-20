import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';
import ContactFormClient from '@/components/ContactFormClient';

export const metadata: Metadata = {
  title: 'Contact WebAdish | Free Security Audit',
  description: 'Request a free WordPress security audit or reach out for hacked site recovery, protection plans, retainers, and technical support.',
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <ContactFormClient />
    </SiteLayout>
  );
}
