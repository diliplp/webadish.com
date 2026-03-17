import { Lock, Eye, HeadphonesIcon, FileSearch, CheckCircle2, ArrowRight, Star, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const whyRetainer = [
  { icon: <Eye size={22} className="text-accent" />, title: "Dedicated Security Engineer", desc: "You get a named security engineer who knows your site inside out — not a rotating help desk." },
  { icon: <Clock size={22} className="text-accent" />, title: "Custom SLA", desc: "Response times and uptime guarantees are codified in a Service Level Agreement tailored to your business needs." },
  { icon: <FileSearch size={22} className="text-accent" />, title: "Monthly Security Audits", desc: "In-depth monthly reviews of your security posture, code changes, new plugins, and threat landscape." },
  { icon: <HeadphonesIcon size={22} className="text-accent" />, title: "Instant Incident Response", desc: "If something happens, you have a direct line to your engineer — not a ticket queue." },
  { icon: <Lock size={22} className="text-accent" />, title: "Emergency Recovery Included", desc: "If your site is ever hacked while on retainer, full recovery is included at no extra cost." },
  { icon: <CheckCircle2 size={22} className="text-accent" />, title: "Quarterly Strategy Calls", desc: "Regular calls to review security posture, discuss roadmap and ensure your WordPress stack stays modern and protected." },
];

const retainerTiers = [
  {
    name: "Agency Retainer",
    price: "$799",
    desc: "For agencies and mid-size businesses with significant online revenue.",
    features: ["Everything in Pro Maintenance", "Dedicated security engineer", "Monthly security audit", "Emergency recovery included", "4h emergency response SLA", "Quarterly strategy call"],
    cta: "Start Retainer",
  },
  {
    name: "Enterprise Retainer",
    price: "Custom",
    desc: "For enterprise, high-traffic eCommerce, and regulated industries.",
    features: ["Everything in Agency Retainer", "Multi-site coverage", "1h emergency response SLA", "Weekly security reviews", "Code audit & pen-test", "Custom security policies", "Dedicated Slack channel"],
    cta: "Contact Sales",
  },
];

const testimonials = [
  { name: "Verofax", role: "Tech Company", quote: "After getting hacked, we moved to WebAdish's retainer. Haven't had a single security incident in 2 years. Peace of mind is priceless." },
  { name: "Vashishtha Luxury Fashion", role: "Fashion Brand", quote: "3 years on retainer. Sneha and the team are always there when we need them. Our site has never been down." },
];

export default function Retainer() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20">
              <Lock size={14} /> Security Retainer
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ongoing WordPress Security <span className="text-accent">On Retainer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              A dedicated security engineer for your WordPress site — continuously monitoring, auditing, and responding. The highest level of protection we offer, built for agencies, eCommerce, and enterprises with zero tolerance for downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" className="text-lg px-8" onClick={() => window.location.href='/contact'}>
                Talk to Our Team <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="/pricing"><Button variant="outline" size="lg" className="text-lg px-8">View All Pricing</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-10 border border-border/50">
            <h2 className="text-2xl font-bold mb-8 text-center">Who Is the Security Retainer For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Web Agencies", desc: "You manage multiple client sites and need a reliable security partner to white-label or refer clients to." },
                { title: "eCommerce Stores", desc: "PCI compliance, customer data, and zero-downtime requirements make comprehensive security non-negotiable." },
                { title: "High-Revenue Sites", desc: "When your website generates significant revenue, every hour of downtime has a real dollar cost." },
              ].map(w => (
                <div key={w.title} className="bg-white rounded-2xl p-6 border border-border/50">
                  <h3 className="font-bold text-lg mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in the Retainer</h2>
            <p className="text-lg text-muted-foreground">Not a plan. A partnership.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyRetainer.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Retainer Plans</h2>
            <p className="text-lg text-muted-foreground">Custom SLAs available. Enterprise pricing on request.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {retainerTiers.map((t, idx) => (
              <div key={t.name} className={`rounded-3xl p-10 ${idx === 0 ? "bg-accent text-white shadow-2xl shadow-accent/20" : "bg-gray-50 border border-border/50"}`}>
                <h3 className={`text-xl font-semibold mb-2 ${idx === 0 ? "text-white" : ""}`}>{t.name}</h3>
                <div className="mb-3">
                  <span className={`text-5xl font-bold ${idx === 0 ? "text-white" : ""}`}>{t.price}</span>
                  {t.price !== "Custom" && <span className={idx === 0 ? "text-white/70" : "text-muted-foreground"}>/mo</span>}
                </div>
                <p className={`text-sm mb-8 ${idx === 0 ? "text-white/80" : "text-muted-foreground"}`}>{t.desc}</p>
                <ul className="space-y-3 mb-10">
                  {t.features.map(f => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${idx === 0 ? "text-white" : ""}`}>
                      <CheckCircle2 size={16} className={idx === 0 ? "text-white shrink-0" : "text-accent shrink-0"} />{f}
                    </li>
                  ))}
                </ul>
                <Button variant={idx === 0 ? "white" : "accent"} className="w-full" onClick={() => window.location.href='/contact'}>{t.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">What Retainer Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}</div>
                <p className="italic text-foreground/80 mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Enterprise-Grade WordPress Security?</h2>
          <p className="text-lg text-white/90 mb-8">Let's talk about a custom retainer that fits your business requirements.</p>
          <Button variant="white" size="lg" onClick={() => window.location.href='/contact'}>
            Book a Security Consultation <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
