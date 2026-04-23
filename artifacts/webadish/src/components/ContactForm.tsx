import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import TurnstileField from "@/components/TurnstileField";
import { trackEvent } from "@/lib/tracking";

const services = [
  "DPDP Site Assessment",
  "Protection Plan",
  "WordPress Security",
  "Hacked Site Recovery (Emergency)",
  "Security Retainer",
  "General Enquiry",
];

type ContactFormProps = {
  formName?: string;
  pagePath?: string;
  defaultService?: string;
  submitLabel?: string;
  successMessage?: string;
};

export default function ContactForm({
  formName = "global_contact",
  pagePath = "/contact",
  defaultService = "DPDP Site Assessment",
  submitLabel = "Request Free Site Assessment",
  successMessage = "We'll review your site and reply within a few hours.",
}: ContactFormProps) {
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
  const [turnstileStatus, setTurnstileStatus] = useState<"idle" | "loading" | "ready" | "error" | "skipped">(
    turnstileSiteKey ? "idle" : "skipped",
  );
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
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
    trackEvent("form_start", { form_name: formName, page_path: pagePath });
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to send message");
      }

      await response.json();
      trackEvent("form_submit_success", {
        form_name: formName,
        service: form.service || "unspecified",
        page_path: pagePath,
      });
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: defaultService,
        message: "",
        fax_number: "",
        form_started_at: Date.now(),
        turnstile_token: "",
      });
      hasTrackedStart.current = false;
    } catch (err) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(errorMsg);
      trackEvent("form_submit_error", {
        form_name: formName,
        page_path: pagePath,
        error_message: errorMsg,
      });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Request Sent</h3>
        <p className="text-muted-foreground">{successMessage}</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-accent hover:underline text-sm font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            required
            type="text"
            placeholder="Rahul Sharma"
            value={form.name}
            onFocus={trackFormStart}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            minLength={2}
            maxLength={80}
            autoComplete="name"
            className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email Address *</label>
          <input
            required
            type="email"
            placeholder="rahul@company.com"
            value={form.email}
            onFocus={trackFormStart}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="email"
            className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Phone / WhatsApp</label>
        <input
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onFocus={trackFormStart}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          autoComplete="tel"
          className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Service Needed</label>
        <select
          value={form.service}
          onFocus={trackFormStart}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all"
        >
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Your Website URL *</label>
        <textarea
          required
          rows={4}
          placeholder="Website URL and what concerns you most about DPDP readiness..."
          value={form.message}
          onFocus={trackFormStart}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          minLength={12}
          className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all resize-none"
        />
      </div>
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.fax_number}
          onChange={(e) => setForm({ ...form, fax_number: e.target.value })}
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
            The Cloudflare security check did not load. You can still submit this form, and we will review it manually.
          </p>
        </div>
      )}
      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full text-base"
        disabled={loading}
      >
        {loading ? "Sending..." : submitLabel}{" "}
        {!loading && <ArrowRight size={18} className="ml-2" />}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We respond within 4 business hours. No spam, no hard sell.
      </p>
    </form>
  );
}
