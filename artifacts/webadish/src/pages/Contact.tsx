import { Phone, Mail, Clock, MapPin, CheckCircle2, ArrowRight, Ambulance } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useRef, useState } from "react";
import { trackEvent } from "@/lib/tracking";
import TurnstileField from "@/components/TurnstileField";

const services = [
  "Protection Plan",
  "WordPress Security",
  "Hacked Site Recovery (Emergency)",
  "Security Retainer",
  "Free Security Score",
  "Agency White-Label Program",
  "Web Design",
  "General Enquiry",
];

export default function Contact() {
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
  const [turnstileStatus, setTurnstileStatus] = useState<"idle" | "loading" | "ready" | "error" | "skipped">(
    turnstileSiteKey ? "idle" : "skipped",
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Free Security Audit",
    message: "",
    fax_number: "",
    form_started_at: Date.now(),
    turnstile_token: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const hasTrackedStart = useRef(false);

  const trackFormStart = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackEvent("form_start", {
      form_name: "global_contact",
      page_path: "/contact",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const shouldRequireTurnstile = Boolean(turnstileSiteKey) && turnstileStatus !== "error" && turnstileStatus !== "skipped";
    if (shouldRequireTurnstile && !form.turnstile_token) {
      setError("Please complete the security check and try again.");
      return;
    }
    setLoading(true);
    setError("");
    trackFormStart();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }

      await response.json();
      trackEvent("form_submit_success", {
        form_name: "global_contact",
        service: form.service || "unspecified",
        page_path: "/contact",
      });
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Free Security Audit",
        message: "",
        fax_number: "",
        form_started_at: Date.now(),
        turnstile_token: "",
      });
      hasTrackedStart.current = false;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
      setError(errorMsg);
      trackEvent("form_submit_error", {
        form_name: "global_contact",
        page_path: "/contact",
        error_message: errorMsg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Request Your <span className="text-accent">Free Security Audit</span></h1>
            <p className="text-xl text-muted-foreground">Tell us a little about your site and we will review the obvious risks, likely weak points, and the best next step for protection or recovery.</p>
            <div className="mt-6 rounded-2xl border border-accent/20 bg-white/90 p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">What You Get</p>
              <p className="text-sm text-foreground">A human review, not an automated scan. We will assess visible risk, backup posture, plugin exposure, and whether you need a plan, hardening sprint, or emergency response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY STRIP */}
      <Link href="/hacked-site-recovery" className="block w-full bg-primary text-white py-4 px-4 text-center hover:bg-primary/90 transition-colors group">
        <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
          <Ambulance size={18} />
          <span className="text-sm font-medium">Site hacked? Click here for emergency recovery — we respond within 1 hour</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>

      {/* CONTACT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* FORM */}
            <div>
              <h2 className="text-3xl font-bold mb-3">Start the Audit Request</h2>
              <p className="text-sm text-muted-foreground mb-8">This takes about 1 minute. The more specific you are, the more useful our first reply will be.</p>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Audit Request Sent</h3>
                  <p className="text-muted-foreground">We will review this and reply within a few hours. If the site is actively hacked, call or WhatsApp us directly for faster triage.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-accent hover:underline text-sm font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input required type="text" placeholder="John Smith" value={form.name} onFocus={trackFormStart} onChange={e => setForm({ ...form, name: e.target.value })}
                        minLength={2}
                        maxLength={80}
                        autoComplete="name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input required type="email" placeholder="john@company.com" value={form.email} onFocus={trackFormStart} onChange={e => setForm({ ...form, email: e.target.value })}
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" placeholder="+1 234 567 8900" value={form.phone} onFocus={trackFormStart} onChange={e => setForm({ ...form, phone: e.target.value })}
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed</label>
                    <select value={form.service} onFocus={trackFormStart} onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all">
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea required rows={5} placeholder="Website URL, what the site does, what concerns you most, and whether this is urgent..." value={form.message} onFocus={trackFormStart} onChange={e => setForm({ ...form, message: e.target.value })}
                      minLength={12}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all resize-none" />
                  </div>
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.fax_number}
                      onChange={e => setForm({ ...form, fax_number: e.target.value })}
                    />
                  </div>
                  <TurnstileField
                    siteKey={turnstileSiteKey}
                    theme="light"
                    onTokenChange={(token) => setForm((current) => ({ ...current, turnstile_token: token }))}
                    onStatusChange={setTurnstileStatus}
                  />
                  {turnstileStatus === "error" && (
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                      <p className="text-sm text-amber-900">
                        The Cloudflare security check did not load on this device. You can still submit the form, or use WhatsApp / email below for urgent help.
                      </p>
                    </div>
                  )}
                  <div className="rounded-2xl border border-border/50 bg-gray-50 p-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Helpful details: website URL, recent plugin/theme changes, whether backups exist, whether you have seen malware warnings or suspicious behaviour, and whether this affects sales or leads right now.
                    </p>
                  </div>
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full text-base"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Request Free Security Audit'} {!loading && <ArrowRight size={18} className="ml-2" />}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We respond to all enquiries within 4 business hours. Emergency hacked-site cases are prioritised.</p>
                </form>
              )}
            </div>

            {/* INFO */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Need a Faster Route?</h2>
                <div className="space-y-5">
                  {[
                    { icon: <Phone size={20} className="text-accent" />, label: "Emergency / General", value: "+91 9998757045", href: "tel:+919998757045" },
                    { icon: <Mail size={20} className="text-accent" />, label: "Email", value: "hello@webadish.com", href: "mailto:hello@webadish.com" },
                    { icon: <Phone size={20} className="text-accent" />, label: "WhatsApp", value: "+91 9998757045", href: "https://wa.me/919998757045" },
                    { icon: <Clock size={20} className="text-accent" />, label: "Emergency Support", value: "24/7 for hacked site recovery" },
                    { icon: <Clock size={20} className="text-accent" />, label: "General Support", value: "Mon–Fri, 9am–6pm IST" },
                    { icon: <MapPin size={20} className="text-accent" />, label: "Registered Office", value: "D802, Iscon Habitat, Gotri Sevasi Road, Vadodara, 390021, India" },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5 border border-border/50">
                      <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</div>
                        {item.href
                          ? <a href={item.href} className="font-semibold text-foreground hover:text-accent transition-colors">{item.value}</a>
                          : <p className="font-semibold text-foreground">{item.value}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-border/50">
                <h3 className="font-bold mb-3">Best Next Step</h3>
                <p className="text-sm text-muted-foreground mb-5">Choose the path that matches your situation.</p>
                <div className="space-y-3">
                  {[
                    { label: "My site was hacked →", href: "/hacked-site-recovery", color: "text-primary" },
                    { label: "I need a protection plan →", href: "/maintenance", color: "text-accent" },
                    { label: "Set up WordPress security →", href: "/security", color: "text-accent" },
                    { label: "Get a free security score →", href: "/security-score", color: "text-accent" },
                    { label: "View pricing →", href: "/pricing", color: "text-link" },
                  ].map(l => (
                    <Link key={l.label} href={l.href} className={`block text-sm font-medium hover:underline ${l.color}`}>{l.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
