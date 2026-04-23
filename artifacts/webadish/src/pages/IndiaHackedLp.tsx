import { AlertTriangle, CheckCircle2, Clock, Phone, Shield, MessageCircle } from "lucide-react";
import { LandingLayout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const signs = [
  "Site redirecting visitors to spam / pharma pages",
  "Google showing 'This site may be hacked' warning",
  "Hosting account suspended by your provider",
  "Strange admin accounts you didn't create",
  "Customers reporting antivirus or browser warnings",
  "Google Search Console security alert",
];

const included = [
  "Complete malware & backdoor removal",
  "Blacklist removal from Google, McAfee, Sucuri",
  "Firewall setup to stop re-infection",
  "Post-recovery hardening checklist",
  "30-day re-infection guarantee",
  "Dedicated security engineer — not a bot",
];

const pricing = [
  { label: "Basic Recovery", range: "₹25,000 – ₹40,000", desc: "Single infected site, no e-commerce" },
  { label: "Business Recovery", range: "₹40,000 – ₹60,000", desc: "Lead-gen or business site with customer data" },
  { label: "E-Commerce Recovery", range: "₹55,000 – ₹75,000", desc: "WooCommerce or payment-integrated sites" },
];

export default function IndiaHackedLp() {
  return (
    <LandingLayout>
      {/* EMERGENCY HERO */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-red-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(214,26,102,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-bold mb-6 border border-red-200 animate-pulse">
              🚨 Emergency Service — We Respond Within 1 Hour
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Website Was Hacked.<br />
              <span className="text-primary">We'll Clean It in 24 Hours.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional malware removal, blacklist clearance, and full site recovery for Indian businesses. Flat-rate INR pricing. 30-day guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="tel:+919998757045">
                <Button variant="primary" size="lg" className="text-lg px-8 shadow-lg shadow-primary/30">
                  <Phone size={18} className="mr-2" /> Call Now: +91 9998757045
                </Button>
              </a>
              <a href="https://wa.me/919998757045?text=My%20website%20has%20been%20hacked%2C%20I%20need%20emergency%20recovery" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <MessageCircle size={18} className="mr-2" /> WhatsApp Us
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              {[
                { icon: <Clock size={16} className="text-primary" />, label: "1-hour response, 24h recovery" },
                { icon: <Shield size={16} className="text-green-600" />, label: "30-day re-infection guarantee" },
                { icon: <CheckCircle2 size={16} className="text-accent" />, label: "800+ sites recovered" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-muted-foreground">
                  {b.icon} {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IS YOUR SITE HACKED? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
                <AlertTriangle size={16} /> Signs Your Site Has Been Hacked
              </div>
              <h2 className="text-3xl font-bold mb-6">Recognise any of these?</h2>
              <ul className="space-y-3">
                {signs.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle size={11} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                Every hour a hacked site is live, Google deepens the blacklist penalty. The sooner you act, the faster the recovery.
              </p>
            </div>

            {/* WHAT'S INCLUDED */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-border/50">
              <h3 className="text-xl font-bold mb-6">What's Included in Every Recovery</h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-gray-50 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Flat-Rate INR Pricing</h2>
            <p className="text-muted-foreground">No hidden charges. Price confirmed before we start work.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((p) => (
              <div key={p.label} className="bg-white rounded-2xl p-6 border border-border/50 text-center">
                <h3 className="font-bold mb-2">{p.label}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{p.range}</div>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Final price confirmed after a quick site assessment. GST applicable.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section id="recovery-form" className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get Emergency Help Now
              </h2>
              <p className="text-white/70 mb-8 leading-relaxed">
                Fill in the form and a security engineer will call or WhatsApp you within 1 hour. We work 24/7 for hacked site emergencies.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Clock size={18} />, text: "Response within 1 hour — including nights & weekends" },
                  { icon: <Shield size={18} />, text: "30-day re-infection guarantee, in writing" },
                  { icon: <CheckCircle2 size={18} />, text: "Price fixed before work starts — no surprises" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="text-primary mt-0.5 shrink-0">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
              <div className="mt-10 space-y-3">
                <p className="text-white/50 text-xs uppercase tracking-wider font-semibold">Prefer to call or message?</p>
                <a href="tel:+919998757045" className="flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors">
                  <Phone size={16} /> +91 9998757045
                </a>
                <a href="https://wa.me/919998757045?text=My%20website%20has%20been%20hacked%2C%20I%20need%20emergency%20recovery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-semibold hover:text-primary transition-colors">
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-foreground">
              <ContactForm
                formName="hacked_lp_india"
                pagePath="/india/hacked-site-recovery-lp"
                defaultService="Hacked Site Recovery (Emergency)"
                submitLabel="Request Emergency Recovery"
                successMessage="We've received your request. A security engineer will call or WhatsApp you within 1 hour."
              />
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
