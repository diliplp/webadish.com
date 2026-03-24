import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export default function CaseStudyShivamAutozone() {
  return (
    <Layout>
      <section className="pt-36 pb-16 hero-gradient text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Shivam Autozone Website Rebuild <br />with Security Hardening
          </h1>
          <p className="text-xl text-muted-foreground">
            How WebAdish rebuilt and hardened <strong>shivamautozone.com</strong> to improve trust, speed, and lead quality.
          </p>
        </div>
      </section>

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Shield size={12} /> Security + Development
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Security Hardening and Performance Rebuild for a Growing Automotive Dealership
            </h2>
            <p className="text-muted-foreground text-lg">Client: Shivam Autozone (shivamautozone.com) — Automotive dealership</p>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-border/50 p-8 mb-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Case Snapshot</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Client Type", value: "Automotive Dealership" },
                { label: "Issue", value: "Outdated site, poor performance, weak security" },
                { label: "Impact", value: "Low lead quality, credibility risk" },
                { label: "Engagement Level", value: "Full Rebuild + Ongoing Protection" },
              ].map((row) => (
                <div key={row.label} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{row.label}</span>
                  <span className="text-sm font-medium text-foreground">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 mb-10">
            <div>
              <h3 className="text-lg font-bold mb-3">The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                Shivam Autozone needed a more credible, conversion-ready website with better security and stronger mobile performance. The older site looked dated and did not support a growing dealership brand.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Our Approach</h3>
              <ul className="space-y-2">
                {[
                  "Full WordPress rebuild with modern architecture",
                  "SSL and firewall implementation",
                  "Performance optimisation for mobile-first visitors",
                  "Responsive design upgrade",
                  "Ongoing maintenance and support coverage",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={15} className="text-accent shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "60%", label: "Faster Load Time" },
                { value: "Better", label: "Mobile Readiness" },
                { value: "Higher", label: "Lead Quality" },
              ].map((m) => (
                <div key={m.label} className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-700 mb-1">{m.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wide text-green-600">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-foreground text-white rounded-2xl p-8 mb-10">
            <h3 className="text-lg font-bold mb-3">Key Takeaway</h3>
            <p className="text-white/75 leading-relaxed">
              For dealerships and local brands, website trust is not just visual. Security, speed, and mobile reliability all shape lead quality and conversion.
            </p>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button variant="accent" size="lg">
                Request a Free Security Audit <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
