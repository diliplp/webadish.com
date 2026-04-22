import type { Metadata } from 'next';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy | WebAdish',
  description: 'Privacy policy for WebAdish LLP and its WordPress security, maintenance, and incident response services.',
};

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 16, 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Who We Are</h2>
              <p>WebAdish LLP (&quot;WebAdish&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a WordPress security and maintenance agency registered in India as a DPIIT Recognised Startup. We operate globally and serve clients across all time zones. Our contact email is hello@webadish.com.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Contact information</strong> — name, email address, phone number when you submit a contact form or request a service.</li>
                <li><strong>Site access credentials</strong> — WordPress admin, hosting, and FTP credentials necessary to perform maintenance, security, or recovery services. These are stored in encrypted credential vaults.</li>
                <li><strong>Usage data</strong> — IP addresses, browser type, and pages visited collected automatically via analytics.</li>
                <li><strong>Payment information</strong> — processed securely by our payment processors; we do not store card details.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>To deliver the services you have engaged us for (maintenance, security, recovery, web design).</li>
                <li>To communicate with you regarding your account, service updates, or support requests.</li>
                <li>To send you our newsletter or marketing communications (you may opt out at any time).</li>
                <li>To improve our website and services through analytics.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Data Sharing</h2>
              <p>We do not sell, rent, or trade your personal information to third parties. We may share information with:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 mt-3">
                <li>Service providers necessary to deliver our services (hosting, payment processors, email platforms).</li>
                <li>Law enforcement or regulatory bodies where required by applicable law.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Data Retention</h2>
              <p>We retain your data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your personal data at any time by contacting hello@webadish.com.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Security</h2>
              <p>We implement industry-standard security measures including encryption at rest and in transit, access controls, and regular security audits to protect your information. All credentials provided to us are stored in encrypted vaults with access limited to authorised personnel only.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Cookies</h2>
              <p>We use cookies and similar tracking technologies to improve user experience and analyse site traffic. You can control cookie settings in your browser. Some cookies are essential for site functionality and cannot be disabled.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have rights including: access to your data, correction, deletion, portability, and the right to object to processing. To exercise any of these rights, contact us at hello@webadish.com.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the updated policy.</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact</h2>
              <p>For any privacy-related questions, contact us at: <a href="mailto:hello@webadish.com" className="text-accent hover:underline">hello@webadish.com</a></p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
