import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'Agency Partners | White-Label WordPress Security',
  description:
    'White-label WordPress security and incident response for agencies managing portfolios of business-critical client sites.',
};

const features = [
  'White-label security reports with your agency branding',
  'Bulk pricing for portfolios of 10+ WordPress sites',
  'Shared escalation channel for urgent incidents',
  'Co-branded case study and audit support',
  'Retainer-style monitoring without building an in-house security team',
];

const ctaClass =
  'inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-medium transition-all duration-300';

export default function AgencyPartnersPage() {
  return (
    <SiteLayout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
            <Shield size={16} className="text-accent" />
            Agency White-Label Program
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            White-Label WordPress Security for <span className="text-accent">Agencies</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Partner with WebAdish when your agency manages multiple WordPress websites and needs specialist protection,
            emergency response, and reporting under your own brand.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-border/50 bg-gray-50 p-8">
            <h2 className="text-2xl font-bold mb-4">Program pricing</h2>
            <p className="text-4xl font-bold text-accent mb-3">
              $150-$200<span className="text-lg text-muted-foreground">/site/mo</span>
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Designed for agencies with 10+ active sites that want predictable security delivery and a credible
              specialist behind the scenes.
            </p>
            <ul className="space-y-3">
              {features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border/50 bg-foreground text-white p-8">
            <h2 className="text-2xl font-bold mb-4">Best fit</h2>
            <div className="space-y-4 text-sm text-white/80">
              <p>Agencies managing WooCommerce stores, lead-gen sites, and brand websites that cannot afford security surprises.</p>
              <p>Teams that want specialist oversight without hiring a full-time WordPress security lead.</p>
              <p>Partners that need a dependable response model for malware, suspicious behaviour, plugin-risk review, and client-facing reports.</p>
            </div>
            <Link href="/contact" className={`${ctaClass} mt-8 bg-white text-foreground hover:bg-gray-50 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 font-bold`}>
              Talk About Agency Partnership <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
