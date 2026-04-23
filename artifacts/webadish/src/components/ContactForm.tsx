import { ArrowRight, CheckCircle2, Loader2, Phone, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import TurnstileField from "@/components/TurnstileField";
import { trackEvent } from "@/lib/tracking";

const DEFAULT_SERVICES = [
  "Protection Plan",
  "WordPress Security",
  "Hacked Site Recovery (Emergency)",
  "Security Retainer",
  "Free Security Score",
  "DPDP Site Assessment",
  "Agency White-Label Program",
  "Web Design",
  "General Enquiry",
];

const REQUEST_TIMEOUT_MS = 25_000;

type ContactFormProps = {
  formName?: string;
  pagePath?: string;
  defaultService?: string;
  submitLabel?: string;
  successMessage?: string;
  services?: string[];
  messageLabel?: string;
  messagePlaceholder?: string;
};

export default function ContactForm({
  formName = "global_contact",
  pagePath = "/contact",
  defaultService,
  submitLabel = "Send Message",
  successMessage = "We'll review your request and reply within 4 business hours.",
  services = DEFAULT_SERVICES,
  messageLabel = "Message *",
  messagePlaceholder = "Website URL, what the site does, what concerns you most, and whether this is urgent...",
}: ContactFormProps) {
  const turnstileEnabled = import.meta.env.VITE_TURNSTILE_ENABLED === "true";
  const turnstileSiteKey = turnstileEnabled ? (import.meta.env.VITE_TURNSTILE_SITE_KEY || "") : "";
  // useMemo so initialService stays stable even if parent re-renders with same props
  const initialService = useMemo(
    () => (defaultService && services.includes(defaultService) ? defaultService : services[0]),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [], // intentionally computed once at mount
  );
  const [turnstileStatus, setTurnstileStatus] = useState<"idle" | "loading" | "ready" | "error" | "skipped">(
    turnstileSiteKey ? "idle" : "skipped",
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialService,
    message: "",
    fax_number: "",
    form_started_at: Date.now(),
    turnstile_token: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [requestId, setRequestId] = useState("");
  const hasTrackedStart = useRef(false);
  const isSubmittingRef = useRef(false);
  const feedbackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const status = params.get("contact_status");
    const ref = params.get("contact_ref") || "";
    const msg = params.get("contact_msg") || "";

    if (status === "success") {
      setSubmitted(true);
      setError("");
      if (ref) setRequestId(ref);
    } else if (status === "error") {
      setSubmitted(false);
      setError(msg || "We could not submit your request. Please try again or reach us on WhatsApp.");
      if (ref) setRequestId(ref);
    }

    if (status) {
      params.delete("contact_status");
      params.delete("contact_ref");
      params.delete("contact_msg");
      const nextQuery = params.toString();
      const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}${window.location.hash}`;
      window.history.replaceState({}, "", nextUrl);
    }
  }, []);

  useEffect(() => {
    if ((submitted || error) && feedbackRef.current) {
      feedbackRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submitted, error]);

  const trackFormStart = () => {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackEvent("form_start", { form_name: formName, page_path: pagePath });
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      service: initialService,
      message: "",
      fax_number: "",
      form_started_at: Date.now(),
      turnstile_token: "",
    });
    hasTrackedStart.current = false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setLoading(true);
    setError("");
    setRequestId("");
    trackFormStart();

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      const responseRequestId = response.headers.get("x-contact-request-id") || "";
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const errorText = typeof data?.error === "string" ? data.error : "Failed to send message";
        throw new Error(responseRequestId ? `${errorText} (Ref: ${responseRequestId})` : errorText);
      }

      if (responseRequestId) setRequestId(responseRequestId);
      trackEvent("form_submit_success", {
        form_name: formName,
        service: form.service || "unspecified",
        page_path: pagePath,
      });
      setSubmitted(true);
      resetForm();
    } catch (err) {
      const isTimeout = err instanceof DOMException && err.name === "AbortError";
      const errorMsg = isTimeout
        ? "The request timed out. Please check your connection and try again, or reach us on WhatsApp."
        : err instanceof Error
          ? err.message
          : "Failed to send message. Please try again.";
      setError(errorMsg);
      trackEvent("form_submit_error", {
        form_name: formName,
        page_path: pagePath,
        error_message: errorMsg,
      });
    } finally {
      window.clearTimeout(timeoutId);
      setLoading(false);
      isSubmittingRef.current = false;
    }
  };

  if (submitted) {
    return (
      <div ref={feedbackRef} className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center" role="status" aria-live="polite">
        <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Request Sent</h3>
        <p className="text-muted-foreground">{successMessage}</p>
        {requestId && (
          <p className="mt-3 text-xs text-muted-foreground">Reference: {requestId}</p>
        )}
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setError("");
            setRequestId("");
          }}
          className="mt-6 text-accent hover:underline text-sm font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} method="post" action="/api/contact" className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${formName}-name`} className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            id={`${formName}-name`}
            required
            type="text"
            name="name"
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
          <label htmlFor={`${formName}-email`} className="block text-sm font-medium mb-2">Email Address *</label>
          <input
            id={`${formName}-email`}
            required
            type="email"
            name="email"
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
        <label htmlFor={`${formName}-phone`} className="block text-sm font-medium mb-2">Phone / WhatsApp</label>
        <input
          id={`${formName}-phone`}
          type="tel"
          name="phone"
          placeholder="+91 98765 43210"
          value={form.phone}
          onFocus={trackFormStart}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          autoComplete="tel"
          className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white text-sm transition-all"
        />
      </div>
      <div>
        <label htmlFor={`${formName}-service`} className="block text-sm font-medium mb-2">Service Needed</label>
        <select
          id={`${formName}-service`}
          name="service"
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
        <label htmlFor={`${formName}-message`} className="block text-sm font-medium mb-2">{messageLabel}</label>
        <textarea
          id={`${formName}-message`}
          required
          rows={5}
          name="message"
          placeholder={messagePlaceholder}
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
          name="fax_number"
          tabIndex={-1}
          autoComplete="off"
          value={form.fax_number}
          onChange={(e) => setForm({ ...form, fax_number: e.target.value })}
        />
      </div>
      <input type="hidden" name="form_started_at" value={String(form.form_started_at)} />
      <input type="hidden" name="turnstile_token" value={form.turnstile_token} />
      <input type="hidden" name="return_to" value={pagePath || "/contact"} />
      <TurnstileField
        siteKey={turnstileSiteKey}
        theme="light"
        onTokenChange={(token) => setForm((current) => ({ ...current, turnstile_token: token }))}
        onStatusChange={setTurnstileStatus}
      />
      {turnstileStatus === "error" && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
          <p className="text-xs text-amber-800">
            Security check failed to load. You can still submit, or reach us on{" "}
            <a href="https://wa.me/919998757045" className="underline font-medium">WhatsApp</a>.
          </p>
        </div>
      )}
      {error && (
        <div
          ref={feedbackRef}
          className="bg-red-50 border border-red-200 rounded-xl p-4 space-y-3"
          role="alert"
          aria-live="assertive"
        >
          <p className="text-red-700 text-sm font-medium">{error}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/919998757045?text=Hi%2C%20I%20tried%20submitting%20the%20form%20on%20webadish.com%20but%20it%20failed."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 underline"
            >
              <MessageCircle size={14} /> WhatsApp us instead
            </a>
            <a
              href="tel:+919998757045"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-700 hover:text-red-900 underline"
            >
              <Phone size={14} /> Call +91 9998757045
            </a>
          </div>
        </div>
      )}
      {(turnstileStatus === "idle" || turnstileStatus === "loading") && turnstileSiteKey && (
        <p className="text-xs text-muted-foreground text-center">Security check loading…</p>
      )}
      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full text-base"
        disabled={loading || turnstileStatus === "idle" || turnstileStatus === "loading"}
        aria-busy={loading}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            {submitLabel}
            <ArrowRight size={18} className="ml-2" />
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        We respond within 4 business hours. No spam, no hard sell.
      </p>
      {requestId && !error && (
        <p className="text-xs text-muted-foreground text-center">Reference: {requestId}</p>
      )}
    </form>
  );
}
