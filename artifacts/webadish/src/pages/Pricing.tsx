import { CheckCircle2, ArrowRight, MessageCircle, Shield, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useState } from "react";

const plans = [
  {
    name: "Essential Care",
    monthly: "$199/mo",
    annual: "$1,999/yr",
    desc: "For business sites that need safe updates, backups, uptime monitoring, and baseline hardening.",
    color: "border-border/50",
    features: [
      { label: "WordPress & plugin updates", included: true },
      { label: "Daily cloud backups (30-day retention)", included: true },
      { label: "24/7 uptime monitoring", included: true },
      { label: "Monthly protection report", included: true },
      { label: "Security hardening baseline", included: true },
      { label: "Priority technical support", included: true },
      { label: "Real-time malware scanning", included: false },
      { label: "Emergency recovery", included: false },
      { label: "Priority support queue", included: false },
      { label: "Dedicated engineer", included: false },
    ],
  },
  {
    name: "Business Protection",
    monthly: "$499/mo",
    annual: "$4,999/yr",
    desc: "Recommended for revenue-generating websites that need deeper protection and faster response.",
    color: "border-accent",
    highlight: true,
    features: [
      { label: "Everything in Essential Care", included: true },
      { label: "Security hardening", included: true },
      { label: "Real-time malware scanning", included: true },
      { label: "Priority support queue", included: true },
      { label: "Security-focused changes", included: true },
      { label: "Speed optimization", included: true },
      { label: "24h response SLA", included: true },
      { label: "Emergency recovery", included: false },
      { label: "Dedicated engineer", included: false },
      { label: "Monthly security audit", included: false },
    ],
  },
  {
    name: "Security Retainer",
    monthly: "$999/mo",
    annual: "$9,999/yr",
    desc: "For teams that want a dedicated security partner, emergency recovery coverage, and white-label support.",
    color: "border-border/50",
    features: [
      { label: "Everything in Business Protection", included: true },
      { label: "Dedicated security engineer", included: true },
      { label: "Monthly security audit", included: true },
      { label: "Emergency recovery included", included: true },
      { label: "4h emergency response SLA", included: true },
      { label: "Quarterly strategy call", included: true },
      { label: "Custom SLA available", included: true },
      { label: "Multi-site available", included: true },
      { label: "White-label for agencies", included: true },
      { label: "Enterprise pricing available", included: true },
    ],
  },
];

const addons = [
  { name: "Hacked Site Recovery", price: "From $1,499", desc: "One-time malware removal, blacklist cleanup, hardening, and a 30-day reinfection guarantee." },
  { name: "Security Audit", price: "From $499", desc: "High-level security posture review with a clear list of prioritised fixes and upgrade recommendations." },
];

const faqs = [
  { q: "Are there setup fees?", a: "No. All plans start immediately with no hidden setup fees." },
  { q: "Can I upgrade or downgrade?", a: "Yes. You can change plans at any time. Upgrades take effect immediately; downgrades at the next billing cycle." },
  { q: "What payment methods do you accept?", a: "We accept credit/debit cards, bank transfers, and PayPal. All plans bill monthly or annually." },
  { q: "Do you offer a free trial?", a: "We don't offer a free trial, but we do offer a free security consultation to assess your site before you commit." },
  { q: "What if I manage multiple sites?", a: "We offer multi-site discounts. Contact us for a custom quote." },
  { q: "Is there a contract?", a: "Monthly plans have no contract — cancel anytime with 30 days' notice. Annual plans are paid upfront at a discount." },
];

const indiaHighlights = [
  "Maintenance from Rs 9,999/mo",
  "Hacked recovery from Rs 29,999",
  "UPI and bank transfer accepted",
];

const whatsappUrl =
  "https://wa.me/919998757045?text=I%20am%20from%20India%20and%20need%20the%20INR%20WordPress%20security%20pricing.";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            WordPress Protection Plans for<br className="hidden md:block" /> <span className="text-accent">Business-Critical Websites</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            USD pricing for global clients who need continuous protection, expert support, and a clear path from prevention to incident response.
          </p>
          <div className="max-w-3xl mx-auto mb-8 rounded-3xl border-2 border-accent/30 bg-white p-6 shadow-xl shadow-accent/10">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between text-left">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-accent mb-3">
                  <Shield size={14} />
                  India visitors
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Do not use this USD page for India quotes.</h2>
                <p className="text-sm text-muted-foreground">
                  We have a separate INR pricing page for Indian businesses and paid traffic.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {indiaHighlights.map((item) => (
                    <span key={item} className="rounded-full bg-gray-50 border border-border/50 px-3 py-1 text-xs font-medium text-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 md:min-w-56">
                <Button asChild variant="accent" className="w-full h-12">
                  <Link href="/india">
                    View India INR Pricing <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={16} className="mr-2" /> WhatsApp Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="max-w-2xl mx-auto mb-8 rounded-2xl border border-border/50 bg-white/90 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">Global clients</p>
            <p className="text-base text-foreground font-medium">Continue below for USD-led protection retainers and global incident response support.</p>
          </div>
          <p className="text-sm text-muted-foreground/70 mb-3">Billing preference</p>
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm border border-border/50 text-sm">
            <button onClick={() => setAnnual(false)} className={`font-medium px-3 py-1.5 rounded-full transition-all ${!annual ? "bg-accent text-white" : "text-muted-foreground"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`font-medium px-3 py-1.5 rounded-full transition-all ${annual ? "bg-accent text-white" : "text-muted-foreground"}`}>
              Annual <span className="text-xs ml-1 text-green-600 font-bold">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block bg-foreground text-white px-6 py-4 rounded-2xl">
              <p className="text-base md:text-lg font-semibold leading-snug">
                This is not generic maintenance.<br />
                These plans are designed to continuously protect business-critical websites.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-3xl p-10 border-2 ${plan.color} ${plan.highlight ? "shadow-2xl shadow-accent/10" : "shadow-sm"} bg-white relative`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">
                    {annual ? plan.annual : plan.monthly}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-8">{plan.desc}</p>
                <ul className="space-y-3 mb-10">
                  {plan.features.map(f => (
                    <li key={f.label} className={`flex items-center gap-3 text-sm ${!f.included ? "text-muted-foreground/50" : ""}`}>
                      {f.included
                        ? <CheckCircle2 size={16} className="text-accent shrink-0" />
                        : <X size={16} className="text-muted-foreground/30 shrink-0" />
                      }
                      {f.label}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={plan.highlight ? "accent" : "outline"} className="w-full h-12">
                  <Link href="/contact">
                    Request This Plan <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <div className="rounded-2xl border-2 border-accent/20 bg-accent/5 px-6 py-5">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">India pricing is separate:</strong> If you are an Indian business, use the INR page before comparing USD retainers.{" "}
                <Link href="/india" className="text-accent hover:underline font-semibold">View India pricing</Link>
              </p>
            </div>
          </div>
          <div className="mt-4 max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted-foreground border border-border/50 bg-gray-50 rounded-xl px-6 py-4">
              <strong className="text-foreground">Emergency work:</strong> Critical incidents are handled separately by our dedicated incident response team.{" "}
              <a href="/hacked-site-recovery" className="text-accent hover:underline font-medium">Learn about emergency response →</a>
            </p>
          </div>
          <div className="mt-4 max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted-foreground border border-border/50 bg-gray-50 rounded-xl px-6 py-4">
              <strong className="text-foreground">Trust signal:</strong> Real client work includes <strong>verofax.com</strong>, <strong>shivamautozone.com</strong>, and <strong>crystalgroup.in</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Add-On Services</h2>
            <p className="text-muted-foreground">Available as one-time purchases or alongside any plan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {addons.map((a) => (
              <div key={a.name} className="bg-white rounded-2xl p-8 border border-border/50 flex items-start gap-6 hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-bold text-lg">{a.name}</h3>
                    <span className="text-accent font-bold text-sm whitespace-nowrap">{a.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-bold mb-3">Free Security Score</h3>
              <p className="text-sm text-muted-foreground mb-6">Give prospects a low-friction entry point with an instant WordPress risk snapshot and clear next steps.</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/security-score">Run Free Security Score</Link>
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-bold mb-3">Agency White-Label</h3>
              <p className="text-sm text-muted-foreground mb-6">For agencies managing multiple WordPress sites and needing security delivery under their own brand.</p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/agency-partners">Explore Agency Program</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQs</h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="bg-gray-50 rounded-2xl p-8 border border-border/50">
                <h3 className="font-bold mb-3">{f.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Plan Is Right?</h2>
          <p className="text-lg text-white/90 mb-8">We'll review your site and recommend the appropriate level of protection based on your situation.</p>
          <Button asChild variant="white" size="lg">
            <Link href="/contact">
              Request Free Security Audit <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
