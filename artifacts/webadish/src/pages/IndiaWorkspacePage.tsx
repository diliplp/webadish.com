import { CheckCircle2, Users, Shield, ArrowRight, MessageCircle, Phone, Star, Building2 } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const included = [
  "Google Workspace account creation & domain verification",
  "Professional email setup (you@yourbusiness.com)",
  "Email migration from Gmail / cPanel / Outlook / Zoho",
  "Up to 10 team user accounts configured",
  "Google Drive, Meet & Calendar setup",
  "SPF, DKIM & DMARC records configured",
  "Admin console training (30-min call)",
  "GST invoice + UPI / bank transfer accepted",
  "WhatsApp support during and after setup",
];

const pricing = [
  {
    label: "Starter Setup",
    price: "₹4,999",
    desc: "1–5 users. New setup or migration from Gmail / cPanel.",
    note: "+ Google Workspace ~₹125/user/mo (paid to Google)",
    highlight: false,
  },
  {
    label: "Business Setup",
    price: "₹9,999",
    desc: "6–25 users. Full migration + admin console handover.",
    note: "+ Google Workspace ~₹125/user/mo (paid to Google)",
    highlight: true,
  },
  {
    label: "Enterprise / Complex",
    price: "Custom",
    desc: "25+ users, multiple domains, or legacy mail server migration.",
    note: "WhatsApp us for a quote",
    highlight: false,
  },
];

const whyPartner = [
  {
    title: "INR billing & GST invoice",
    desc: "Pay in rupees via UPI or bank transfer. We handle the Google billing — no foreign currency conversions.",
  },
  {
    title: "Same-day setup",
    desc: "New setups are done same day. Migrations with email history take 1–2 business days.",
  },
  {
    title: "Local WhatsApp support",
    desc: "Reach us directly on WhatsApp during and after setup — no ticket queues, no offshore scripts.",
  },
  {
    title: "Email deliverability configured",
    desc: "We set up SPF, DKIM, and DMARC records so your email lands in inbox — not spam.",
  },
];

const faqs = [
  {
    q: "Do I keep my existing emails when migrating?",
    a: "Yes. We migrate all your existing emails, contacts, and calendar events before switching over — nothing is lost.",
  },
  {
    q: "What does the Google Workspace subscription cost?",
    a: "Google charges ~₹125–₹672/user/month depending on the plan (Business Starter to Business Plus). This is billed directly by Google — our fee is a one-time setup charge.",
  },
  {
    q: "Can you migrate from Outlook / Zoho / cPanel?",
    a: "Yes. We handle migrations from cPanel webmail, Outlook/Exchange, Zoho Mail, Yahoo, and old Gmail accounts.",
  },
  {
    q: "What if I need help after setup?",
    a: "WhatsApp us any time. We also handle adding new users, resetting passwords, and ongoing admin tasks.",
  },
  {
    q: "Are you an official Google Partner?",
    a: "Yes — WebAdish is a Google Workspace SELECT Co-sell & Services Partner, verified through the Google Partner Network Hub.",
  },
];

export default function IndiaWorkspacePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Google Partner badge */}
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl pl-2 pr-4 py-2 mb-6 shadow-sm">
              <img
                src="https://www.gstatic.com/cloud-partners/images/gcpn/badges/tiers/tier_gws_cosell_and_service_select.png"
                alt="Google Workspace SELECT Co-sell & Services Partner"
                width={44}
                height={44}
                className="rounded-lg"
              />
              <div className="text-sm leading-tight">
                <div className="font-bold text-gray-800">Google Workspace SELECT</div>
                <div className="text-gray-500 text-xs">Co-sell &amp; Services Partner</div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Google Workspace Setup<br />
              <span className="text-blue-600">for Indian Businesses.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional email, Google Drive, Meet and Calendar — set up by a certified Google Partner in India. INR pricing, GST invoice, WhatsApp support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/919998757045?text=I%20need%20help%20setting%20up%20Google%20Workspace%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full text-lg px-8 h-14 bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/30">
                  <MessageCircle size={20} className="mr-2" /> WhatsApp for a Quote
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full text-lg px-8 h-14 border-blue-600 text-blue-700 hover:bg-blue-50">
                  Request Consultation <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {["INR pricing", "UPI & bank transfer", "GST invoice", "Same-day setup", "100+ Workspaces deployed"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-green-500" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14">
            <div className="flex items-center gap-4">
              <img
                src="https://www.gstatic.com/cloud-partners/images/gcpn/badges/tiers/tier_gws_cosell_and_service_select.png"
                alt="Google Workspace SELECT Partner"
                width={60}
                height={60}
              />
              <div>
                <div className="font-bold text-gray-900 text-sm">Google Workspace SELECT Partner</div>
                <div className="text-gray-500 text-xs">Verified via Google Partner Network Hub</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                <Star size={22} className="text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">100+ Workspaces Deployed</div>
                <div className="text-gray-500 text-xs">For Indian SMEs, agencies & WooCommerce stores</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                <Building2 size={22} className="text-green-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Based in Vadodara, Gujarat</div>
                <div className="text-gray-500 text-xs">Serving Indian businesses since 2015</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUY THROUGH A PARTNER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why buy through a certified Partner?</h2>
            <p className="text-muted-foreground">You get the same Google pricing — plus setup, migration, and local support included.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPartner.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <CheckCircle2 size={22} className="text-blue-500 mb-3" />
                <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mb-4">
                <Users size={16} /> Included in every engagement
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
              <div className="mt-8">
                <Link href="/email-migration-india">
                  <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                    Learn about our Email Migration service <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <Shield size={28} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Why Google Workspace over free Gmail?</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Inbox deliverability:</strong> Workspace email lands in inbox — not spam — critical for invoices and client communication.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Admin control:</strong> Reset passwords, revoke access, audit logs — full control even when staff changes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Team collaboration:</strong> Shared Drive, Docs, Sheets, Meet, Calendar — your entire team in one place.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-blue-500 shrink-0 mt-0.5" />
                  <span><strong className="text-foreground">Professional image:</strong> name@yourcompany.com builds client trust that @gmail.com never will.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Setup pricing (one-time)</h2>
            <p className="text-muted-foreground">Our fee is a one-time setup charge. Google's monthly subscription is billed separately by Google.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.map((p) => (
              <div
                key={p.label}
                className={`rounded-2xl p-6 border text-center ${p.highlight ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20" : "bg-white border-gray-200"}`}
              >
                <h3 className={`font-bold mb-2 ${p.highlight ? "text-white" : ""}`}>{p.label}</h3>
                <div className={`text-3xl font-bold mb-2 ${p.highlight ? "text-white" : "text-blue-600"}`}>{p.price}</div>
                <p className={`text-sm mb-3 ${p.highlight ? "text-blue-100" : "text-muted-foreground"}`}>{p.desc}</p>
                <p className={`text-xs border-t pt-3 ${p.highlight ? "text-blue-200 border-blue-500" : "text-muted-foreground border-gray-100"}`}>{p.note}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://wa.me/919998757045?text=I%20need%20Google%20Workspace%20setup%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 h-12">
                <MessageCircle size={18} className="mr-2" /> WhatsApp for Exact Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
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
    </Layout>
  );
}
