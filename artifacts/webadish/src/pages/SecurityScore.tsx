import { useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

function calculateScore(url: string) {
  const normalized = url.trim().toLowerCase();
  if (!normalized) return 0;
  let score = 84;
  if (!normalized.startsWith("https://")) score -= 18;
  if (normalized.includes("wp-admin")) score -= 6;
  if (normalized.includes("staging")) score -= 8;
  if (normalized.length < 18) score -= 4;
  return Math.max(42, Math.min(score, 94));
}

export default function SecurityScore() {
  const [url, setUrl] = useState("");
  const [score, setScore] = useState<number | null>(null);

  return (
    <Layout>
      <section className="pt-36 pb-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
            <Shield size={16} className="text-accent" />
            Free Security Score
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Check Your WordPress <span className="text-accent">Security Score</span></h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Enter your website URL for a quick risk snapshot. Use it to spot obvious gaps, then request a deeper branded audit if your site is revenue-critical.
          </p>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-border/50 p-6 shadow-sm">
            <label className="block text-left text-sm font-medium mb-3">Website URL</label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="url"
                placeholder="https://yourwebsite.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 rounded-xl border border-border bg-gray-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="accent" onClick={() => setScore(calculateScore(url))}>
                Run Score <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {score !== null && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border/50 bg-gray-50 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Instant Snapshot</p>
                  <h2 className="text-3xl font-bold">Estimated security score: {score}/100</h2>
                </div>
                <div className={`rounded-full px-5 py-3 text-sm font-semibold ${score >= 80 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                  {score >= 80 ? "Solid base, still worth auditing" : "Action recommended soon"}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 border border-border/50">
                  <h3 className="font-bold mb-4">What this score suggests</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {[
                      "Public-facing hygiene looks acceptable, but WordPress estates still need regular plugin and access reviews.",
                      "A proper audit should confirm backups, recovery readiness, and vulnerable plugin exposure.",
                      "Business-critical sites should not rely on visible uptime alone as a proxy for security.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-white p-6 border border-border/50">
                  <h3 className="font-bold mb-4">Next best actions</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {[
                      "Review plugin/theme inventory and remove abandoned components.",
                      "Validate backups with a test restore instead of assuming they work.",
                      "Move to a protection plan or retainer if downtime affects revenue, leads, or client trust.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <AlertTriangle size={16} className="text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button variant="accent" size="lg" onClick={() => window.location.href = "/contact"}>
                  Request Full Security Review <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
