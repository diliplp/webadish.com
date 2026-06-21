import { CheckCircle2, ArrowRight, MessageCircle, Phone, Mail, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const platforms = [
  "cPanel / Webmail",
  "Google Workspace",
  "Microsoft 365 / Outlook",
  "Zoho Mail",
  "Yahoo Mail Business",
  "Rackspace Email",
  "Hostinger / GoDaddy Mail",
  "Any IMAP / POP3 server",
];

const commonPaths = [
  { from: "cPanel / Webmail", to: "Google Workspace", note: "Most common — upgrade from hosting email to professional Workspace" },
  { from: "Google Workspace", to: "Microsoft 365", note: "Switch between platforms without losing email history" },
  { from: "Zoho Mail", to: "Google Workspace", note: "Move to Google ecosystem with full mailbox history" },
  { from: "Outlook / Exchange", to: "Google Workspace", note: "On-prem or M365 to Google, contacts & calendar included" },
  { from: "cPanel / Webmail", to: "Zoho Mail", note: "Cost-effective upgrade from hosting webmail" },
  { from: "Any platform", to: "Any platform", note: "If it has IMAP access or an export option, we can migrate it" },
];

const migrationSteps = [
  { step: "01", title: "Audit your current setup", desc: "We assess user count, mailbox size, aliases, shared inboxes, forwarding rules, and any special requirements before quoting." },
  { step: "02", title: "Prepare the destination", desc: "We set up the target platform — domain verification, MX records, SPF/DKIM/DMARC configured — before any data moves." },
  { step: "03", title: "Migrate all data", desc: "All emails, folders, contacts, and calendar events moved to the new platform. Users keep everything they had before." },
  { step: "04", title: "Cutover & verify", desc: "Switch MX records, verify delivery both ways, test send/receive — done in a maintenance window to minimise disruption." },
  { step: "05", title: "Handover & decommission", desc: "Admin access confirmed, staff settings updated, old server decommissioned on your schedule." },
];

const included = [
  "Full mailbox migration — emails, folders, contacts, calendar",
  "Shared mailboxes & aliases migrated (info@, support@ etc.)",
  "SPF, DKIM & DMARC records configured on destination",
  "MX record cutover with zero-downtime window",
  "Old server kept live until you confirm everything is correct",
  "Staff email client reconfiguration guide",
  "Old server decommission guidance",
  "GST invoice + UPI / bank transfer accepted",
  "WhatsApp support throughout the migration",
];

const faqs = [
  {
    q: "Can you migrate between any two email platforms?",
    a: "Yes — if the source platform supports IMAP access or has an export option, we can migrate it. We handle Google Workspace, Microsoft 365, Zoho, cPanel webmail, Yahoo, Rackspace, and any standard IMAP/POP3 server.",
  },
  {
    q: "Will emails be lost during migration?",
    a: "No. We migrate all data to the new platform first, then switch routing. The old server stays live until you confirm everything is correct — nothing gets lost in transit.",
  },
  {
    q: "How long does migration take?",
    a: "For most SMEs (up to 25 users), 1–2 business days. Larger or more complex setups take longer — we give you an estimate before starting.",
  },
  {
    q: "Can you migrate shared mailboxes and aliases?",
    a: "Yes. Shared inboxes (info@, support@), aliases, and distribution groups are all handled as part of the migration.",
  },
  {
    q: "What do my staff need to do?",
    a: "Minimal. We handle the technical side. At cutover, staff update their email client settings — we provide a simple guide or configure it for them.",
  },
  {
    q: "Which platform should we migrate to?",
    a: "Depends on your team size, budget, and workflow. Google Workspace suits most Indian SMEs well — collaborative, reliable, and easy to admin. Microsoft 365 makes sense if you're already in the Microsoft ecosystem. We'll advise based on your situation.",
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-semibold mb-6">
              <Mail size={15} /> Email Migration Service — India
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Migrate Your Business Email.<br />
              <span className="text-blue-600">Any Platform. Any Direction.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              cPanel to Google Workspace. Zoho to Microsoft 365. Outlook to Gmail. Or any other combination — we migrate business email between any two platforms without losing a single message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/919998757045?text=I%20need%20help%20migrating%20my%20business%20email"
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
              {["Zero data loss", "No downtime cutover", "INR pricing & GST invoice", "1–2 day turnaround"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-green-500" /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ANY TO ANY VISUAL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Migrate from any platform to any platform</h2>
            <p className="text-muted-foreground">If it has IMAP access or an export option, we can move it.</p>
          </div>

          {/* Platform bubbles */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
            {platforms.map((p) => (
              <span key={p} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                {p}
              </span>
            ))}
          </div>

          {/* Common migration paths */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg font-bold mb-6 text-center text-muted-foreground">Common migration paths we handle</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {commonPaths.map((path) => (
                <div key={path.from + path.to} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-gray-800">{path.from}</span>
                    <ArrowRight size={14} className="text-blue-400 shrink-0" />
                    <span className="text-sm font-semibold text-blue-600">{path.to}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{path.note}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Don't see your combination?{" "}
            <a href="https://wa.me/919998757045?text=I%20need%20email%20migration%20help" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">
              WhatsApp us
            </a>{" "}
            — we'll confirm if we can handle it within a few hours.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How migration works</h2>
            <p className="text-muted-foreground">A structured process so nothing gets lost and your team stays productive throughout.</p>
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
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-amber-800 mb-1">Don't try to migrate yourself</h3>
                    <p className="text-sm text-amber-700 leading-relaxed">
                      DIY migrations commonly result in email loss, broken MX records, or SPF/DMARC misconfigs that send your outgoing email straight to spam. We've fixed many of these after the fact — it costs more than doing it right the first time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <h3 className="font-bold mb-2">Migrating to Google Workspace?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We're a Google Workspace SELECT Partner — we handle the full setup and migration together as one engagement.
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
              Pricing depends on user count, mailbox size, source platform, and migration complexity. Most migrations for up to 25 users fall in the ₹4,999–₹12,999 range (one-time).
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { label: "1–5 users", price: "From ₹4,999", note: "Simple platform-to-platform migration" },
                { label: "6–25 users", price: "From ₹9,999", note: "Full migration with admin handover", highlight: true },
                { label: "25+ users / complex", price: "Custom", note: "Multi-domain, Exchange, or legacy servers" },
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
              href="https://wa.me/919998757045?text=I%20need%20email%20migration%20for%20my%20business"
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
          <p className="text-blue-100 mb-8">Tell us your current platform, where you want to move, and how many users. We'll quote within a few hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919998757045?text=I%20need%20email%20migration%20for%20my%20business" target="_blank" rel="noopener noreferrer">
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
