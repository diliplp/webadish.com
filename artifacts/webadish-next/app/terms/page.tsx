import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'Terms of Service | WebAdish',
  description: 'Terms of service for WebAdish WordPress security, maintenance, and recovery services.',
};

export default function TermsPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 16, 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By engaging WebAdish LLP (&quot;WebAdish&quot;) for any services — including but not limited to WordPress maintenance, security, hacked site recovery, web design, or any consulting — you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Services</h2>
              <p>WebAdish provides WordPress-related services as described in our service plans. The exact scope of work is defined in your service plan or agreed-upon proposal. We reserve the right to modify, suspend, or discontinue any service with reasonable notice.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Client Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Provide accurate, complete, and up-to-date account and site credentials.</li>
                <li>Maintain valid payment methods for ongoing plans.</li>
                <li>Inform WebAdish of any changes to your site that may affect our services.</li>
                <li>Not use our services for any unlawful purpose.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Payment Terms</h2>
              <p>Monthly plans are billed in advance at the start of each billing cycle. Annual plans are billed upfront. All fees are non-refundable except as described in our Refund Policy. Late or failed payments may result in service suspension.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Cancellation</h2>
              <p>Monthly plans may be cancelled with 30 days&apos; written notice to hello@webadish.com. Annual plans may be cancelled with written notice but are non-refundable for the remaining subscription period. Upon cancellation, we will provide a handover of any credentials and materials held on your behalf.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
              <p>WebAdish shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability for any claim arising from a service shall not exceed the total fees paid in the 3 months preceding the claim. We do not guarantee 100% protection against all security threats; no security solution can provide absolute protection.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Intellectual Property</h2>
              <p>All work product created by WebAdish for clients (websites, custom code, designs) becomes the client&apos;s property upon full payment. WebAdish retains the right to display completed work in its portfolio unless the client requests otherwise in writing.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Confidentiality</h2>
              <p>We treat all client credentials, business information, and site data as strictly confidential. All team members are bound by confidentiality agreements. Client credentials are stored in encrypted vaults and never shared with unauthorised third parties.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact</h2>
              <p>For any questions about these terms, contact us at: <a href="mailto:hello@webadish.com" className="text-accent hover:underline">hello@webadish.com</a></p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
