import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileSearch,
  IndianRupee,
  Lock,
  MessageCircle,
  Phone,
  RefreshCw,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { LandingLayout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const whatsappUrl =
  "https://wa.me/919998757045?text=I%20am%20from%20India%20and%20need%20WordPress%20maintenance%20pricing.%20My%20website%20URL%20is%3A";

const planCards = [
  {
    name: "Care Plan",
    price: "Rs 9,999/mo+",
    bestFor: "Brochure sites, consultants, local businesses, and service websites.",
    features: ["Core/plugin updates", "Daily backups", "Uptime checks", "Monthly maintenance summary", "Security baseline"],
  },
  {
    name: "Security + Maintenance",
    price: "Rs 24,999/mo+",
    bestFor: "Lead-generation websites where downtime, SEO, and enquiry loss matter.",
    features: ["Everything in Care Plan", "Security hardening", "Malware monitoring", "Priority response", "Performance cleanup"],
    featured: true,
  },
  {
    name: "WooCommerce / High-Risk",
    price: "Rs 49,999/mo+",
    bestFor: "Stores, payment sites, schools, dealerships, and sites handling sensitive data.",
    features: ["Checkout-aware monitoring", "Payment plugin patching", "Incident-response path", "Risk review", "Higher-touch support"],
  },
];

const maintenanceItems = [
  "Safe WordPress core, theme, and plugin updates",
  "Backups with restore-readiness checks",
  "Uptime monitoring and issue escalation",
  "Malware monitoring and suspicious-change review",
  "Baseline hardening and access hygiene",
  "Monthly summary so owners know what changed",
];

const trustSignals = [
  { icon: ShieldCheck, label: "20+ years WordPress experience" },
  { icon: IndianRupee, label: "INR quotes before work starts" },
  { icon: MessageCircle, label: "WhatsApp-first response" },
  { icon: BadgeCheck, label: "DPIIT recognised startup" },
];

const serviceOptions = [
  "India WordPress Maintenance",
  "Security + Maintenance",
  "WooCommerce Maintenance",
  "Security Retainer",
  "Hacked Site Recovery (Emergency)",
];

export default function IndiaMaintenanceLp() {
  return (
    <LandingLayout>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 border border-accent/20">
                <IndianRupee size={15} />
                India INR Maintenance Plans
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                WordPress Maintenance Plans for Indian Business Websites
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Keep your WordPress site updated, backed up, monitored, and safer without comparing global USD retainers.
                INR pricing, WhatsApp response, and a clear scope before you pay.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {[
                  { value: "Rs 9,999/mo+", label: "maintenance starts" },
                  { value: "Rs 24,999/mo+", label: "security + maintenance" },
                  { value: "Free", label: "initial fit check" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/60 bg-gray-50 p-4">
                    <div className="text-xl font-bold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="accent" size="lg" className="w-full text-base px-7 h-14">
                    <MessageCircle size={18} /> WhatsApp Website URL
                  </Button>
                </a>
                <a href="#india-maintenance-form" className="w-full sm:w-auto">
                  <Button variant="outline-primary" size="lg" className="w-full text-base px-7 h-14">
                    Get Maintenance Quote <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                {["UPI/bank transfer accepted", "INR pricing before work begins", "Built for Indian SMEs and WooCommerce stores"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-4 py-2">
                    <CheckCircle2 size={15} className="text-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-accent/20 bg-accent/5 p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent mb-5">Good fit if</p>
              <div className="space-y-4">
                {[
                  "You are running ads and cannot afford broken forms or downtime.",
                  "Plugin updates are delayed because nobody wants to break the live site.",
                  "Backups exist, but restore confidence is unclear.",
                  "You want one owner for updates, monitoring, security basics, and escalation.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-relaxed">
                    <CheckCircle2 size={17} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-2xl bg-white p-5 border border-accent/10">
                <div className="flex items-center gap-2 text-sm font-bold mb-2">
                  <Clock3 size={16} className="text-primary" />
                  First step
                </div>
                <p className="text-sm text-muted-foreground">
                  Send your website URL. We check the site type, plugin risk, current support gaps, and recommend the correct INR plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustSignals.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Icon size={20} className="text-accent mb-3" />
                  <p className="text-sm font-semibold leading-snug">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent mb-3">INR Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the maintenance level that matches your risk</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Final scope is confirmed after we review your site, plugins, hosting, traffic, and business impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {planCards.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-7 bg-white ${
                  plan.featured ? "border-accent shadow-xl shadow-accent/10" : "border-border/60"
                }`}
              >
                {plan.featured && (
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent text-xs font-bold px-3 py-1 mb-5">
                    <Zap size={13} />
                    Most common for paid traffic
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-accent mb-4">{plan.price}</div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{plan.bestFor}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm mb-4">
                <RefreshCw size={16} />
                What maintenance covers
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Prevent avoidable WordPress problems before they become sales problems.</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This is not a cheap update checklist. It is a practical operating layer for sites where enquiries,
                checkout, reputation, and search visibility matter.
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="lg">
                  <MessageCircle size={18} /> Ask on WhatsApp
                </Button>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {maintenanceItems.map((item) => (
                <div key={item} className="rounded-2xl border border-border/60 bg-gray-50 p-5">
                  <CheckCircle2 size={18} className="text-accent mb-3" />
                  <p className="text-sm font-semibold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="india-maintenance-form" className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm mb-4">
                <FileSearch size={16} />
                Free fit check
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get an India maintenance quote</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Share your website URL, current support setup, and what worries you most. We will reply with the right INR plan or tell you if a lighter setup is enough.
              </p>
              <div className="space-y-4">
                {[
                  "Clear INR scope before work begins.",
                  "WhatsApp or call follow-up for faster qualification.",
                  "Emergency recovery path if we find signs of compromise.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 space-y-3">
                <a href="tel:+919998757045" className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                  <Phone size={16} />
                  +91 9998757045
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                  <MessageCircle size={16} />
                  WhatsApp WebAdish
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 text-foreground">
              <ContactForm
                formName="india_maintenance_lp"
                pagePath="/lp/wordpress-maintenance-india"
                defaultService="India WordPress Maintenance"
                submitLabel="Get India Maintenance Quote"
                successMessage="We received your request and will reply with the right India maintenance plan or next step."
                services={serviceOptions}
                messagePlaceholder="Website URL, current support setup, biggest maintenance concern, and whether this is urgent..."
              />
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
