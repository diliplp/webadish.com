import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  FileSearch,
  HeadphonesIcon,
  Lock,
  MessageCircle,
  Phone,
  RefreshCw,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import { LandingLayout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const painPoints = [
  "Plugin updates are delayed because nobody wants to risk breaking the site",
  "Backups exist, but restore confidence is unclear",
  "Security alerts, uptime issues, and plugin risk are handled reactively",
  "Your team needs a reliable owner before the next campaign or sales push",
  "The site carries revenue, leads, or brand trust and cannot be treated casually",
];

const maintenanceIncludes = [
  "Safe WordPress core, theme, and plugin updates",
  "Daily offsite backups with restore readiness",
  "Uptime monitoring and practical monthly reporting",
  "Baseline hardening and access review",
  "Plugin risk review before high-impact updates",
  "Clear escalation path for suspicious activity",
];

const retainerIncludes = [
  "Named WordPress security owner",
  "Priority incident response and advisory support",
  "Monthly security audit rhythm",
  "Emergency recovery coverage inside the engagement",
  "Custom response expectations for higher-stakes sites",
  "Strategic guidance before major site or plugin changes",
];

const fitCards = [
  {
    icon: <Wrench size={20} className="text-accent" />,
    title: "Maintenance Plan",
    desc: "Best when the main need is safe updates, backups, monitoring, and fewer WordPress fire drills.",
  },
  {
    icon: <Shield size={20} className="text-primary" />,
    title: "Security Retainer",
    desc: "Best when downtime, malware, or plugin risk would create real revenue, legal, or client-delivery pressure.",
  },
  {
    icon: <HeadphonesIcon size={20} className="text-green-600" />,
    title: "Agency Support",
    desc: "Best when you manage multiple WordPress sites and need a dependable white-label technical partner.",
  },
];

const serviceOptions = [
  "Protection Plan",
  "Security Retainer",
  "WordPress Security",
  "Agency White-Label Program",
  "General Enquiry",
];

export default function MaintenanceRetainerLp() {
  return (
    <LandingLayout>
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6 border border-accent/20">
                <BadgeCheck size={14} /> Global WordPress Maintenance + Retainer
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Keep Your WordPress Site Protected, Updated, and Ready for Growth
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Structured WordPress maintenance and higher-touch security retainers for business websites that cannot afford avoidable downtime, broken updates, or slow incident response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#maintenance-retainer-form" className="w-full sm:w-auto">
                  <Button variant="accent" size="lg" className="w-full text-lg px-8 h-14">
                    Schedule a Protection Review <ArrowRight size={18} className="ml-2" />
                  </Button>
                </a>
                <a
                  href="https://wa.me/919998757045?text=I%20want%20to%20discuss%20WordPress%20maintenance%20or%20a%20retainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outline-primary" size="lg" className="w-full text-lg px-8 h-14">
                    <MessageCircle size={18} className="mr-2" /> WhatsApp Us
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-5 text-sm font-medium text-muted-foreground">
                {[
                  { icon: <RefreshCw size={16} className="text-accent" />, label: "Safe staged updates" },
                  { icon: <Clock size={16} className="text-primary" />, label: "Monitoring and response" },
                  { icon: <Lock size={16} className="text-green-600" />, label: "Security-first support" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    {item.icon} {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-gray-50 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary mb-4">Good Fit If</p>
              <ul className="space-y-4">
                {painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                    <CheckCircle2 size={17} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-white p-5 border border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Start with a review. We will tell you whether a standard maintenance plan is enough, or whether the site deserves retainer-level coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-foreground text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "20+", label: "years in business" },
              { value: "800+", label: "sites supported" },
              { value: "Daily", label: "backup discipline" },
              { value: "Global", label: "remote support" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-accent mb-2">{item.value}</div>
                <div className="text-sm text-white/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Right Level of Coverage</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most sites do not need an enterprise retainer on day one. The review helps match the support level to the actual operational risk.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {fitCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 border border-border/50">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-50">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl border border-border/50 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-11 w-11 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Wrench size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Maintenance</p>
                  <h2 className="text-2xl font-bold">What We Keep Stable</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {maintenanceIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-11 w-11 rounded-2xl bg-white flex items-center justify-center border border-primary/20">
                  <Shield size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Retainer</p>
                  <h2 className="text-2xl font-bold">When Stakes Are Higher</h2>
                </div>
              </div>
              <ul className="space-y-3">
                {retainerIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Zap size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="maintenance-retainer-form" className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm mb-4">
                <FileSearch size={16} /> Free Fit Review
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Protection Review</h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Tell us about your WordPress site, traffic, plugin stack, and current support setup. We will recommend the simplest coverage level that makes sense.
              </p>
              <div className="space-y-4">
                {[
                  "We review maintenance, backup, update, and incident-response gaps.",
                  "You get a practical recommendation, not a forced retainer pitch.",
                  "For urgent issues, call or WhatsApp us directly.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 space-y-3">
                <p className="text-white/50 text-xs uppercase tracking-wider font-semibold">Prefer direct contact?</p>
                <a href="tel:+919998757045" className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors">
                  <Phone size={16} /> +91 9998757045
                </a>
                <a
                  href="https://wa.me/919998757045?text=I%20want%20to%20discuss%20WordPress%20maintenance%20or%20a%20retainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp WebAdish
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 text-foreground">
              <ContactForm
                formName="maintenance_retainer_lp"
                pagePath="/maintenance-retainer-lp"
                defaultService="Security Retainer"
                submitLabel="Schedule Protection Review"
                successMessage="We received your request and will reply with the right next step for maintenance or retainer coverage."
                services={serviceOptions}
                messagePlaceholder="Website URL, current support setup, biggest concern, and whether you need maintenance, retainer coverage, or both..."
              />
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
