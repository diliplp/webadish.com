import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Gauge,
  LockKeyhole,
  Shield,
  Siren,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

type Answers = {
  url: string;
  siteType: "brochure" | "leadgen" | "ecommerce" | "agency";
  plugins: "low" | "medium" | "high";
  lastAudit: "recent" | "older" | "never";
  backups: "tested" | "unknown" | "none";
  protection: "strong" | "partial" | "weak";
};

const defaultAnswers: Answers = {
  url: "",
  siteType: "leadgen",
  plugins: "medium",
  lastAudit: "older",
  backups: "unknown",
  protection: "partial",
};

function normalizeUrl(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (/^[a-z]+:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function calculateScore(answers: Answers) {
  let score = 88;

  const normalized = normalizeUrl(answers.url).toLowerCase();
  if (!normalized) score -= 18;
  if (!normalized.startsWith("https://")) score -= 12;
  if (normalized.includes("staging")) score -= 8;
  if (normalized.includes("wp-admin")) score -= 6;

  if (answers.siteType === "leadgen") score -= 6;
  if (answers.siteType === "ecommerce") score -= 12;
  if (answers.siteType === "agency") score -= 10;

  if (answers.plugins === "medium") score -= 7;
  if (answers.plugins === "high") score -= 14;

  if (answers.lastAudit === "older") score -= 10;
  if (answers.lastAudit === "never") score -= 18;

  if (answers.backups === "unknown") score -= 10;
  if (answers.backups === "none") score -= 18;

  if (answers.protection === "partial") score -= 10;
  if (answers.protection === "weak") score -= 18;

  return Math.max(28, Math.min(score, 96));
}

function getScoreBand(score: number) {
  if (score >= 80) {
    return {
      label: "Stronger than average, but still worth auditing",
      tone: "bg-green-100 text-green-700",
      heading: "You have a decent base, but hidden risk can still sit in plugins, admin access, and backups.",
      actions: [
        "Run a proper plugin and admin-access review before the next major site change.",
        "Confirm backups with a real test restore, not just a backup plugin dashboard.",
        "Review whether your current setup would catch a compromise before traffic or revenue drops.",
      ],
    };
  }

  if (score >= 60) {
    return {
      label: "Meaningful risk exposure",
      tone: "bg-amber-100 text-amber-700",
      heading: "Your site likely has enough visible hygiene to feel safe, but not enough depth to rely on that feeling.",
      actions: [
        "Audit plugins, admin users, and hosting access before the next incident does it for you.",
        "Strengthen backup confidence, hardening, and login protection this quarter.",
        "Move to a structured security review if downtime, leads, or customer trust matter commercially.",
      ],
    };
  }

  return {
    label: "Priority action recommended",
    tone: "bg-red-100 text-red-700",
    heading: "This setup carries elevated risk for repeat compromise, downtime, or expensive emergency cleanup.",
    actions: [
      "Run a full WordPress security audit as soon as possible.",
      "Review whether your forms, plugins, and admin surface would stand up to a real incident.",
      "Treat this as a business continuity issue, not just a maintenance task.",
    ],
  };
}

export default function SecurityScore() {
  const [answers, setAnswers] = useState<Answers>(defaultAnswers);
  const [hasRun, setHasRun] = useState(false);

  const score = useMemo(() => calculateScore(answers), [answers]);
  const band = useMemo(() => getScoreBand(score), [score]);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  return (
    <Layout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
            <Gauge size={16} className="text-accent" />
            Free Security Score
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Check Your WordPress <span className="text-accent">Security Score</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            A practical self-assessment for business websites. Use it to spot obvious exposure in plugins, backups, audit cadence, and protection depth before you book a deeper review.
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-border/50 p-6 md:p-8 shadow-sm text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-3">Website URL</label>
                <input
                  type="text"
                  placeholder="example.com"
                  value={answers.url}
                  onChange={(e) => update("url", e.target.value)}
                  className="w-full rounded-xl border border-border bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">What kind of site is this?</label>
                <select
                  value={answers.siteType}
                  onChange={(e) => update("siteType", e.target.value as Answers["siteType"])}
                  className="w-full rounded-xl border border-border bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="brochure">Brochure / company site</option>
                  <option value="leadgen">Lead generation site</option>
                  <option value="ecommerce">WooCommerce / ecommerce</option>
                  <option value="agency">Agency or multi-client stack</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">How plugin-heavy is the site?</label>
                <select
                  value={answers.plugins}
                  onChange={(e) => update("plugins", e.target.value as Answers["plugins"])}
                  className="w-full rounded-xl border border-border bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="low">Low: under 10 active plugins</option>
                  <option value="medium">Medium: 10–25 active plugins</option>
                  <option value="high">High: 25+ active plugins</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">When was the last real security audit?</label>
                <select
                  value={answers.lastAudit}
                  onChange={(e) => update("lastAudit", e.target.value as Answers["lastAudit"])}
                  className="w-full rounded-xl border border-border bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="recent">Within the last 90 days</option>
                  <option value="older">More than 90 days ago</option>
                  <option value="never">No real audit yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">How confident are you in backups?</label>
                <select
                  value={answers.backups}
                  onChange={(e) => update("backups", e.target.value as Answers["backups"])}
                  className="w-full rounded-xl border border-border bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="tested">Backups are tested with restores</option>
                  <option value="unknown">Backups exist, restore confidence is unclear</option>
                  <option value="none">No reliable backup confidence</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-3">Which statement fits your current protection best?</label>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {[
                    {
                      value: "strong",
                      title: "Structured protection",
                      text: "Regular reviews, strong access control, tested backups, and a clear response plan.",
                    },
                    {
                      value: "partial",
                      title: "Some basics in place",
                      text: "Updates and backups happen, but monitoring, audits, or response depth are inconsistent.",
                    },
                    {
                      value: "weak",
                      title: "Mostly reactive",
                      text: "The site is maintained when something breaks or when someone remembers to check it.",
                    },
                  ].map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => update("protection", item.value as Answers["protection"])}
                      className={`rounded-2xl border p-4 text-left transition-all ${
                        answers.protection === item.value
                          ? "border-accent bg-accent/5"
                          : "border-border/60 bg-gray-50 hover:border-accent/40"
                      }`}
                    >
                      <div className="font-semibold mb-2">{item.title}</div>
                      <div className="text-sm text-muted-foreground leading-6">{item.text}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button variant="accent" size="lg" onClick={() => setHasRun(true)}>
                Run Security Score <ArrowRight size={16} className="ml-2" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg">Request Full Security Review</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {hasRun && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/50 bg-gray-50 p-8 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Instant Snapshot</p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">Estimated security score: {score}/100</h2>
                  <p className="text-muted-foreground max-w-2xl">{band.heading}</p>
                </div>
                <div className={`rounded-full px-5 py-3 text-sm font-semibold ${band.tone}`}>
                  {band.label}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-white p-6 border border-border/50 lg:col-span-2">
                  <h3 className="font-bold mb-4">What to do next</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {band.actions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-6 border border-border/50">
                  <h3 className="font-bold mb-4">Commercial risk flags</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {[
                      answers.siteType === "ecommerce"
                        ? "WooCommerce sites usually need tighter audit cadence and deeper recovery readiness."
                        : "If the website drives leads or trust, visible uptime is not enough as a security signal.",
                      answers.backups !== "tested"
                        ? "Backup confidence is weaker than most teams think until restores are tested."
                        : "Tested backups are a strong sign, but they do not replace plugin and access reviews.",
                      answers.lastAudit === "never"
                        ? "No formal audit usually means hidden plugin, access, or admin-surface exposure."
                        : "Audit history matters most when paired with current plugin and access-control discipline.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <AlertTriangle size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-gray-950 text-white p-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.12em] mb-4">
                      <Shield size={14} />
                      Full Review
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Want a proper review instead of a surface-level score?</h3>
                    <p className="text-white/70 mb-6">
                      This tool is a lead-in, not a substitute for a real audit. If the site supports leads, sales, clients, or operational trust, the next step is a deeper review of plugins, access, backups, and incident-readiness.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild variant="accent" size="lg">
                        <Link href="/contact">
                          Request Full Security Review <ArrowRight size={18} className="ml-2" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                        <Link href="/retainer">
                          Explore Retainer
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h4 className="font-bold mb-4">Why buyers trust this review</h4>
                    <ul className="space-y-4 text-sm text-white/75">
                      <li className="flex items-start gap-3">
                        <LockKeyhole size={16} className="text-accent mt-0.5 shrink-0" />
                        Led by a CCNA-certified and ISC2 Certified in Cybersecurity practitioner.
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield size={16} className="text-accent mt-0.5 shrink-0" />
                        Built for real WordPress operations, not generic “scan and forget” outputs.
                      </li>
                      <li className="flex items-start gap-3">
                        <Siren size={16} className="text-accent mt-0.5 shrink-0" />
                        Additional specialist freelancer resources can be brought in for deeper security, hardening, and recovery engagements.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
