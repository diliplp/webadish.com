import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const tiers = [
  {
    name: "Basic Maintenance",
    price: "Rs 5,000-Rs 10,000/mo",
    desc: "For brochure sites and local business websites that need updates, backups, and uptime monitoring.",
    items: ["Core and plugin updates", "Daily backups", "Uptime monitoring", "Monthly maintenance summary"],
  },
  {
    name: "Security + Maintenance",
    price: "Rs 15,000-Rs 25,000/mo",
    desc: "For Indian businesses that need both operational support and ongoing hardening.",
    items: ["Everything in Basic Maintenance", "Security hardening", "Malware scanning", "Priority response", "Performance cleanup"],
  },
  {
    name: "Hacked Site Recovery",
    price: "Rs 25,000-Rs 75,000",
    desc: "One-time incident response pricing tiered by severity, access complexity, and business impact.",
    items: ["Malware removal", "Backdoor cleanup", "Blacklist review", "Post-incident hardening"],
  },
  {
    name: "Security Audit",
    price: "Rs 15,000-Rs 50,000",
    desc: "A one-time security posture review for dealerships, education brands, eCommerce stores, and growing teams.",
    items: ["Risk scoring", "Plugin and theme review", "Access review", "Prioritised recommendations"],
  },
];

export default function India() {
  return (
    <Layout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
            <Shield size={16} className="text-accent" />
            India Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">WordPress Protection Pricing for <span className="text-accent">Indian Businesses</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Local-market pricing for dealerships, education brands, eCommerce businesses, and service companies that need dependable WordPress protection without mixing INR rates into the global pricing page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" onClick={() => window.location.href = "/contact"}>
              Request India Quote <ArrowRight size={18} className="ml-2" />
            </Button>
            <Link href="/pricing">
              <Button variant="outline" size="lg">View Global USD Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="rounded-3xl border border-border/50 bg-gray-50 p-8">
                <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
                <div className="text-3xl font-bold text-accent mb-4">{tier.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
                <ul className="space-y-3">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
