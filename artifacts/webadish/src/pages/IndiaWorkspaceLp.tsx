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

function WorkspaceHeroGraphic() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
      {/* Main card — email client mockup */}
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Title bar */}
        <div className="bg-gray-50 border-b px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border mx-4">mail.google.com</div>
        </div>
        {/* Compose area */}
        <div className="p-5">
          <div className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wide">New Message</div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 border-b pb-2">
              <span className="text-xs text-gray-400 w-8">From</span>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">R</div>
                <span className="text-xs font-semibold text-blue-700">rahul@yourcompany.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b pb-2">
              <span className="text-xs text-gray-400 w-8">To</span>
              <span className="text-xs text-gray-600">client@enterprise.com</span>
            </div>
            <div className="flex items-center gap-2 border-b pb-2">
              <span className="text-xs text-gray-400 w-8">Sub</span>
              <span className="text-xs text-gray-700 font-medium">Project Proposal — Q3 2026</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 leading-relaxed">
            Dear Team,<br />
            Please find attached our proposal for...<br />
            <span className="text-gray-300">━━━━━━━━━━━━━━━━━━━</span>
          </div>
        </div>
      </div>

      {/* Google Apps floating chips */}
      <div className="absolute -right-4 top-8 flex flex-col gap-2">
        {[
          { label: "Gmail", color: "bg-red-500", letter: "M" },
          { label: "Drive", color: "bg-yellow-500", letter: "D" },
          { label: "Meet", color: "bg-green-500", letter: "M" },
          { label: "Calendar", color: "bg-blue-500", letter: "C" },
        ].map((app) => (
          <div key={app.label} className="flex items-center gap-2 bg-white rounded-full pl-1.5 pr-3 py-1.5 shadow-md border border-gray-100 text-xs font-medium text-gray-700">
            <div className={`w-5 h-5 rounded-full ${app.color} flex items-center justify-center text-white text-xs font-bold`}>{app.letter}</div>
            {app.label}
          </div>
        ))}
      </div>

      {/* Official badge floating below */}
      <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-3">
        <img
          src="https://www.gstatic.com/cloud-partners/images/gcpn/badges/tiers/tier_gws_cosell_and_service_select.png"
          alt="Google Workspace SELECT Co-sell & Services Partner"
          width={110}
          height={110}
          loading="eager"
        />
      </div>
    </div>
  );
}

export default function IndiaWorkspaceLp() {
  return (
    <LandingLayout>
      {/* HERO */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT — copy */}
            <div>
              {/* Official Google Partner badge */}
              <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl pl-2 pr-4 py-2 mb-6 shadow-sm">
                <img
                  src="https://www.gstatic.com/cloud-partners/images/gcpn/badges/tiers/tier_gws_cosell_and_service_select.png"
                  alt="Google Workspace SELECT Co-sell & Services Partner"
                  width={48}
                  height={48}
                  loading="eager"
                  className="rounded-lg"
                />
                <div className="text-sm leading-tight">
                  <div className="font-bold text-gray-800">Google Workspace SELECT</div>
                  <div className="text-gray-500 text-xs">Co-sell &amp; Services Partner</div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Get a Professional<br />Business Email.<br />
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

            {/* RIGHT — graphic */}
            <div className="hidden lg:flex justify-center items-center pt-8 pb-8 pr-8">
              <WorkspaceHeroGraphic />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* CREDENTIALS STRIP */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {/* Official badge */}
            <div className="flex items-center gap-4">
              <img
                src="https://www.gstatic.com/cloud-partners/images/gcpn/badges/tiers/tier_gws_cosell_and_service_select.png"
                alt="Google Workspace SELECT Co-sell & Services Partner"
                width={72}
                height={72}
                loading="eager"
              />
              <div>
                <div className="font-bold text-gray-900 text-sm">Google Workspace SELECT</div>
                <div className="text-gray-500 text-xs">Co-sell &amp; Services Partner</div>
                <div className="text-gray-400 text-xs mt-0.5">Verified by Google Partner Network Hub</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-200" />

            {/* Certified engineers */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center flex-shrink-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Google Certified Engineers</div>
                <div className="text-gray-500 text-xs">Google Workspace certified setup &amp; migration specialists</div>
                <div className="text-gray-400 text-xs mt-0.5">Certified via Google Cloud Partner program</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-gray-200" />

            {/* Track record */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={26} className="text-green-600" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">100+ Workspaces Deployed</div>
                <div className="text-gray-500 text-xs">For Indian SMEs, WooCommerce stores &amp; agencies</div>
                <div className="text-gray-400 text-xs mt-0.5">Based in Vadodara, Gujarat · Since 2015</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
