import { CheckCircle2, ArrowRight, MessageCircle, Phone, Mail, MoveRight, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const fromPlatforms = [
  { name: "cPanel Webmail", note: "Hostinger, Bluehost, GoDaddy, SiteGround, Namecheap etc." },
  { name: "Old Gmail / Google Apps", note: "Personal Gmail or legacy Google Apps accounts" },
  { name: "Outlook / Exchange", note: "On-premise Exchange or Microsoft 365" },
  { name: "Zoho Mail", note: "All plans including free tier" },
  { name: "Yahoo Mail Business", note: "Including Yahoo Small Business" },
  { name: "Any IMAP/POP3 server", note: "Any email provider with IMAP access" },
];

const migrationSteps = [
  { step: "01", title: "Audit your current email", desc: "We assess how many accounts, how much data, and any special requirements — aliases, shared mailboxes, forwarding rules." },
  { step: "02", title: "Set up Google Workspace", desc: "Domain verification, MX records pointed to Google, SPF/DKIM/DMARC configured before the cutover." },
  { step: "03", title: "Migrate email history", desc: "All emails, folders, contacts, and calendar events moved to the new account — users keep everything they had before." },
  { step: "04", title: "Cutover & test", desc: "Switch MX records, verify delivery, test send/receive — all done in a maintenance window to minimise disruption." },
  { step: "05", title: "Admin handover", desc: "Admin console walkthrough, user access confirmed, old server decommissioned on your schedule." },
];

const included = [
  "All existing emails migrated (no data lost)",
  "Contacts & calendar events moved",
  "Folder/label structure preserved",
  "SPF, DKIM & DMARC records set up",
  "MX record cutover with zero-downtime window",
  "Old server decommission guidance",
  "GST invoice + UPI / bank transfer",
  "WhatsApp support throughout",
];

const faqs = [
  {
    q: "Will my emails be lost during migration?",
    a: "No. We migrate everything first, then switch the routing. Your old server stays live until you confirm everything is correct on the new one.",
  },
  {
    q: "How long does email migration take?",
    a: "For most SMEs (up to 25 users), 1–2 business days. Larger mailboxes or complex setups may take longer — we'll give you an estimate upfront.",
  },
  {
    q: "Can you migrate shared mailboxes and aliases?",
    a: "Yes. We handle shared inboxes (e.g. info@, support@), email aliases, and distribution groups as part of the migration.",
  },
  {
    q: "Do my staff need to do anything?",
    a: "Minimal. We handle the technical side. Staff only need to update their email client settings at the end — we provide a simple guide or do it for them.",
  },
  {
    q: "What happens to emails sent to the old address during migration?",
    a: "We keep both systems live during migration and only switch routing after your data is confirmed on Google Workspace — so nothing is missed.",
  },
];

export default function IndiaEmailMigration() {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.07),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl pl-2 pr-4 py-2 mb-6 shadow-sm">
              <img
                src="https://www.gstatic.com/cloud-partners/images/gcpn/badges/tiers/tier_gws_cosell_and_service_select.png"
                alt="Google Workspace SELECT Partner"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-sm leading-tight">
                <div className="font-bold text-gray-800">Google Workspace SELECT Partner</div>
                <div className="text-gray-500 text-xs">Migration specialists — India</div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Email Migration to<br />
              <span className="text-blue-600">Google Workspace.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Move from cPanel, Outlook, Zoho, or Gmail to Google Workspace — without losing a single email. We handle the full migration, cutover, and admin handover.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/919998757045?text=I%20need%20help%20migrating%20my%20email%20to%20Google%20Workspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full text-lg px-8 h-14 bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/30">
                  <MessageCircle size={20} className="mr-2" /> WhatsApp for a Quote
                </Button>
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full text-lg px-8 h-14 border-blue-600 text-blue-700 hover:bg-blue-50">
                  Request Free Consultation <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              {["Zero data loss", "No downtime window", "INR pricing & GST invoice", "1–2 day turnaround"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-green-500" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MIGRATE FROM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">We migrate from any platform</h2>
            <p className="text-muted-foreground">If it supports IMAP or has an export option, we can move it to Google Workspace.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {fromPlatforms.map((p) => (
              <div key={p.name} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-3 w-full">
                  <Mail size={18} className="text-indigo-500 shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{p.note}</div>
                  </div>
                  <MoveRight size={16} className="text-blue-400 ml-auto shrink-0" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Not sure if we can migrate your setup?{" "}
            <a href="https://wa.me/919998757045?text=I%20need%20email%20migration%20help" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">
              WhatsApp us
            </a>{" "}
            — we'll confirm within a few hours.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How migration works</h2>
            <p className="text-muted-foreground">A structured process so nothing gets lost and your team is never in the dark.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {migrationSteps.map((s) => (
              <div key={s.step} className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-2xl font-black text-blue-200 shrink-0 w-10">{s.step}</div>
                <div>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED + WARNING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">What's included</h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-amber-800 mb-1">Don't try to migrate yourself</h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      DIY migrations commonly result in email loss, broken MX records, or SPF/DMARC misconfigs that land your outgoing email in spam. We've fixed many of these after the fact — it costs more than doing it right the first time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="font-bold mb-2">Also need a full Workspace setup?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you don't have Google Workspace yet, we handle the full setup and migration together — same one-time fee.
                </p>
                <Link href="/google-workspace">
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                    See Google Workspace Setup <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Migration pricing</h2>
            <p className="text-muted-foreground mb-10">
              Pricing depends on user count, mailbox size, and source platform. Most migrations for up to 25 users fall in the ₹4,999–₹9,999 range (one-time).
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { label: "1–5 users", price: "From ₹4,999", note: "Simple migration or new setup + migration" },
                { label: "6–25 users", price: "From ₹9,999", note: "Full migration with admin handover", highlight: true },
                { label: "25+ users", price: "Custom", note: "Complex migrations, multiple domains, Exchange" },
              ].map((p) => (
                <div
                  key={p.label}
                  className={`rounded-2xl p-6 border text-center ${p.highlight ? "bg-blue-600 text-white border-blue-600 shadow-lg" : "bg-white border-gray-200"}`}
                >
                  <div className={`font-semibold text-sm mb-1 ${p.highlight ? "text-blue-100" : "text-muted-foreground"}`}>{p.label}</div>
                  <div className={`text-2xl font-bold mb-2 ${p.highlight ? "text-white" : "text-blue-600"}`}>{p.price}</div>
                  <p className={`text-xs ${p.highlight ? "text-blue-200" : "text-muted-foreground"}`}>{p.note}</p>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919998757045?text=I%20need%20email%20migration%20to%20Google%20Workspace"
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
          <h2 className="text-3xl font-bold mb-10 text-center">Migration questions</h2>
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
          <Mail size={40} className="mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to migrate your business email?</h2>
          <p className="text-blue-100 mb-8">Tell us your current provider and user count. We'll give you an exact quote and timeline on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919998757045?text=I%20need%20email%20migration%20to%20Google%20Workspace" target="_blank" rel="noopener noreferrer">
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
