import { Building2, CheckCircle2, Clock3, ShieldCheck } from "lucide-react";

const clients = [
  { name: "Verofax", detail: "Global technology company", href: "/case-studies/verofax" },
  { name: "Crystal Group", detail: "B2B logistics and cold chain", href: "/case-studies/crystalgroup" },
  { name: "Shivam Autozone", detail: "Automotive dealership", href: "/case-studies/shivamautozone" },
];

const proof = [
  { label: "Engineer-led cleanup", icon: ShieldCheck },
  { label: "1-hour triage response", icon: Clock3 },
  { label: "30-day re-infection guarantee", icon: CheckCircle2 },
];

export function TrustBar() {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.4fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700 border border-green-100 mb-4">
              <ShieldCheck size={15} />
              Trusted recovery team
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Backed by real WebAdish recovery and WordPress support work.
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              When a hacked site is affecting leads, payments, or Google trust, you need a specialist who can explain the risk clearly and fix the root cause.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {proof.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4">
                  <Icon size={20} className="text-green-600 mb-3" />
                  <p className="text-sm font-bold text-foreground leading-snug">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              className="group rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 size={19} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">{client.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{client.detail}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-5 text-center text-xs font-medium text-muted-foreground">
          Selected WebAdish clients and case studies. Emergency malware recovery is handled by the same security-focused team.
        </p>
      </div>
    </section>
  );
}
