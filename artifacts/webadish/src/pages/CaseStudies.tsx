import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const cases = [
  {
    client: "Verofax",
    tag: "Recovery + Security + Maintenance",
    tagColor: "text-primary",
    tagBg: "bg-primary/10",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500",
    challenge: "Verofax's WordPress site was compromised by a sophisticated attack injecting malware into core files and creating hidden backdoors. The site was blacklisted by Google, causing significant traffic and revenue loss.",
    solution: "We performed emergency malware removal, eliminated all backdoors, submitted Google blacklist removal requests, rebuilt compromised files, and implemented a full security hardening protocol.",
    results: ["Site restored in under 18 hours", "Google blacklist cleared in 48 hours", "Implemented WAF & 2FA", "Zero re-infections since recovery", "Ongoing maintenance & security retainer"],
  },
  {
    client: "Shivam Autozone",
    tag: "Security + Development + Maintenance",
    tagColor: "text-accent",
    tagBg: "bg-accent/10",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800&h=500",
    challenge: "Shivam Autozone needed a professional, high-converting website with robust security to support their growing dealership business. Their previous site was slow, outdated, and lacked proper security.",
    solution: "We designed and developed a modern WordPress website with full security hardening, performance optimization, and set up an ongoing maintenance plan to keep it running perfectly.",
    results: ["60% faster page load times", "Fully responsive mobile design", "SSL + firewall implementation", "Monthly maintenance retainer", "Significant increase in lead enquiries"],
  },
  {
    client: "Crystal Cold Chain Solutions",
    tag: "Development + Maintenance",
    tagColor: "text-accent",
    tagBg: "bg-accent/10",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=500",
    challenge: "Crystal Cold Chain needed a professional B2B website that would establish credibility with enterprise clients. Their existing site was basic and failed to communicate the scale of their operations.",
    solution: "We built a custom WordPress site showcasing their capabilities, certifications, and services — optimized for lead generation and ongoing business development.",
    results: ["Custom WordPress development", "SEO-optimized structure", "Professional B2B design", "Ongoing monthly maintenance", "Improved enterprise lead quality"],
  },
];

const metrics = [
  { value: "800+", label: "Sites Protected & Maintained" },
  { value: "500+", label: "Hacked Sites Recovered" },
  { value: "99.9%", label: "Average Uptime Delivered" },
  { value: "10+", label: "Years of Experience" },
];

export default function CaseStudies() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Real Results for <span className="text-accent">Real Businesses</span></h1>
          <p className="text-xl text-muted-foreground mb-10">See how we've helped businesses recover from hacks, secure their WordPress sites, and build high-performing digital presences.</p>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-12 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {metrics.map(m => (
              <div key={m.label}>
                <div className="text-4xl font-bold text-accent mb-2">{m.value}</div>
                <div className="text-sm text-white/70">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {cases.map((c, idx) => (
              <div key={c.client} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${c.tagBg} ${c.tagColor}`}>{c.tag}</div>
                  <h2 className="text-4xl font-bold mb-6">{c.client}</h2>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">The Challenge</h3>
                    <p className="text-muted-foreground leading-relaxed">{c.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Our Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{c.solution}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Results</h3>
                    <ul className="space-y-2">
                      {c.results.map(r => (
                        <li key={r} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button variant="accent">
                      Start a Similar Project <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>

                <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                    <img src={c.img} alt={c.client} className="w-full h-80 object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Results Like These?</h2>
          <p className="text-lg text-white/90 mb-8">Let's talk about what we can do for your WordPress site.</p>
          <Button variant="white" size="lg" onClick={() => window.location.href = '/contact'}>
            Start a Project <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}
