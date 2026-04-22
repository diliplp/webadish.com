import type { Metadata } from 'next';
import SecurityScoreClient from './SecurityScoreClient';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'Free WordPress Security Score | WebAdish',
  description: 'Run a practical self-assessment of WordPress security exposure across plugins, backups, audit cadence, and protection depth.',
};

export default function SecurityScorePage() {
  return (
    <SiteLayout>
      <SecurityScoreClient />
    </SiteLayout>
  );
}
