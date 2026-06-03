import { CheckCircle2, Mail, Users, Shield, ArrowRight, MessageCircle, Phone, AlertCircle } from "lucide-react";
import { LandingLayout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { TrustBar } from "@/components/TrustBar";

const problems = [
  "Still sending email from @gmail.com or @yahoo.com — looks unprofessional to clients",
  "cPanel / web hosting email going to spam or junk folders",
  "No shared Drive, Docs, or Meet for your team",
  "Lost access to emails when a staff member leaves",
  "No central admin control over team accounts",
];

const included = [
  "Google Workspace account creation & domain verification",
  "Professional email setup (you@yourbusiness.com)",
  "Email migration from Gmail / cPanel / Outlook / Zoho",
  "Up to 10 team user accounts configured",
  "Google Drive, Meet & Calendar setup",
  "Admin console training (30 min call)",
  "GST invoice + UPI / bank transfer accepted",
  "WhatsApp support during and after setup",
];

const pricing = [
  {
    label: "Starter Setup",
    range: "₹4,999",
    desc: "1–5 users. New setup or migration from Gmail / cPanel.",
    note: "+ Google Workspace subscription ~₹125/user/mo (paid to Google)",
  },
  {
    label: "Business Setup",
    range: "₹9,999",
    desc: "6–25 users. Full migration + admin console handover.",
    note: "+ Google Workspace subscription ~₹125/user/mo (paid to Google)",
  },
  {
    label: "Enterprise / Complex",
    range: "Custom",
    desc: "25+ users, multiple domains, or legacy mail server migration.",
    note: "WhatsApp us for a quote",
  },
];

const faqs = [
  {
    q: "Do I keep my existing emails?",
    a: "Yes. We migrate all your existing emails, contacts, and calendar events to Google Workspace before switching over — nothing is lost.",
  },
  {
    q: "What does the Google Workspace subscription cost?",
    a: "Google charges ~₹125–₹672/user/month depending on the plan (Business Starter to Business Plus). This is paid directly to Google — our fee is a one-time setup charge.",
  },
  {
    q: "How long does setup take?",
    a: "New setups: same day. Migrations with existing email history: typically 1–2 business days.",
  },
  {
    q: "Can you help after setup?",
    a: "Yes — WhatsApp us any time. We also offer ongoing WordPress and IT support retainers if you need regular help.",
  },
];

export default function IndiaWorkspaceLp() {
  return (
    <LandingLayout>
      {/* HERO */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6 border border-blue-200">
              <Mail size={14} /> Google Workspace Partner — India Setup Service
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Get a Professional Business Email.<br />
              <span className="text-blue-600">Set Up in 1 Day.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Stop sending from @gmail.com. We set up Google Workspace for your business — email migration included, INR pricing, WhatsApp support.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              <span className="font-semibold text-foreground">you@yourbusiness.com</span> — professional, reliable, backed by Google.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/919998757045?text=I%20need%20help%20setting%20up%20Google%20Workspace%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full text-lg px-8 shadow-lg shadow-green-600/30 h-14 bg-green-600 hover:bg-green-700">
                  <MessageCircle size={20} className="mr-2" /> WhatsApp for Quick Quote
                </Button>
              </a>
              <a href="#workspace-form" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full text-lg px-8 h-14 border-blue-600 text-blue-700 hover:bg-blue-50">
                  Get a Free Consultation <ArrowRight size={18} className="ml-2" />
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" /> INR pricing</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" /> UPI &amp; bank transfer</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" /> GST invoice</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-500" /> Same-day setup</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* PROBLEMS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Sound familiar?</h2>
            <p className="text-muted-foreground">These are the most common email problems we fix for Indian businesses every week.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {problems.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-red-100">
                <AlertCircle size={16} className="text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="workspace-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-foreground rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-2">Get a Free Setup Consultation</h2>
            <p className="text-white/70 mb-8">Tell us your current setup and number of users. We'll send you an exact quote within a few hours.</p>
            <div className="bg-white rounded-3xl p-6 md:p-8 text-foreground">
              <ContactForm
                formName="workspace_lp_india"
                pagePath="/lp/google-workspace-india"
                defaultService="Google Workspace Setup"
                submitLabel="Request Free Consultation"
                successMessage="Request received. We'll send your quote on WhatsApp or email within a few hours."
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mb-4">
                <Users size={16} /> Everything included in every setup
              </div>
              <h2 className="text-3xl font-bold mb-6">What we set up for you</h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WHY GOOGLE WORKSPACE */}
            <div className="bg-white rounded-3xl p-8 border border-border">
              <Shield size={28} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Why Google Workspace over free Gmail?</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Email deliverability:</strong> Google Workspace email lands in inbox, not spam — critical for client communication and invoices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Admin control:</strong> Reset passwords, revoke access, audit logs — full control even when staff changes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Collaboration:</strong> Shared Drive, Docs, Sheets, Meet, Calendar — your entire team in one place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Looks professional:</strong> Client trust goes up when you email from name@yourcompany.com vs @gmail.com.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Setup Pricing (One-Time)</h2>
            <p className="text-muted-foreground text-sm">Our fee is one-time. Google's subscription is billed directly by Google after setup.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((p) => (
              <div key={p.label} className="bg-gray-50 rounded-2xl p-6 border text-center">
                <h3 className="font-bold mb-2">{p.label}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{p.range}</div>
                <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                <p className="text-xs text-muted-foreground border-t pt-3">{p.note}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://wa.me/919998757045?text=I%20need%20Google%20Workspace%20setup%20for%20my%20business" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 h-12">
                <MessageCircle size={18} className="mr-2" /> WhatsApp for Exact Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <Mail size={40} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to set up your business email?</h2>
          <p className="text-blue-100 mb-8">WhatsApp us now — we'll send a quote within a few hours and have you set up by tomorrow.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919998757045?text=I%20need%20Google%20Workspace%20setup%20for%20my%20business" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 h-14 font-bold">
                <MessageCircle size={20} className="mr-2" /> WhatsApp Now
              </Button>
            </a>
            <a href="tel:+919998757045">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 h-14">
                <Phone size={20} className="mr-2" /> Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
