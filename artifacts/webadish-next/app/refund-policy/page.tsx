import type { Metadata } from 'next';
import Link from 'next/link';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'Refund Policy | WebAdish',
  description: 'Refund policy for WebAdish maintenance plans, recovery services, audits, and design projects.',
};

export default function RefundPolicyPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 16, 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Overview</h2>
              <p>At WebAdish, we stand behind our work. This policy outlines the circumstances under which we offer refunds for our services. Because our services involve significant time and expertise, refunds are limited to the specific circumstances described below.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Hacked Site Recovery — 30-Day Re-Infection Guarantee</h2>
              <p className="mb-3">If your site is re-infected within 30 days of our recovery service, we will clean it again at no additional charge. This guarantee applies provided that:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>You have not made changes to the site that reintroduced a vulnerability.</li>
                <li>You have maintained the security measures we put in place post-recovery.</li>
                <li>You notify us within the 30-day period.</li>
              </ul>
              <p className="mt-3">If the re-infection is caused by a new, unrelated vulnerability introduced after our recovery, our standard recovery pricing applies.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Monthly Maintenance & Security Plans</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Monthly plans are billed in advance and are <strong>non-refundable</strong> once the billing period has started and services have been rendered.</li>
                <li>If you cancel before the billing cycle begins, a full refund of that cycle&apos;s payment will be issued.</li>
                <li>Pro-rated refunds are not offered for cancellation mid-cycle.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Annual Plans</h2>
              <p>Annual plans paid upfront are non-refundable. You may cancel to stop future renewals, but no refund will be issued for the remaining subscription period.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Web Design Projects</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Deposits paid at project commencement are non-refundable as they cover discovery, planning, and initial design work.</li>
                <li>If WebAdish cancels a project before completion for reasons on our side, a pro-rated refund of any unused payments will be issued.</li>
                <li>Client-requested cancellations after work has begun will be assessed on a case-by-case basis; work completed to date will be invoiced.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">One-Time Services (Security Audit, etc.)</h2>
              <p>One-time service fees are non-refundable once the service has been delivered. If you are unsatisfied with the outcome, please contact us at hello@webadish.com and we will work to resolve the issue.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">How to Request a Refund</h2>
              <p>To request a refund under any applicable circumstance, email <a href="mailto:hello@webadish.com" className="text-accent hover:underline">hello@webadish.com</a> with your name, service, invoice number, and reason for the request. We will respond within 3 business days.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Contact</h2>
              <p>Questions about this policy? <Link href="/contact" className="text-accent hover:underline">Contact our team</Link> or email us at <a href="mailto:hello@webadish.com" className="text-accent hover:underline">hello@webadish.com</a>.</p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
