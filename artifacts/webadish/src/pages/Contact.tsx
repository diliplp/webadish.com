import { Phone, Mail, Clock, MapPin, ArrowRight, Ambulance } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

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
              <ContactForm
                formName="global_contact"
                pagePath="/contact"
                defaultService="Free Security Score"
                submitLabel="Request Free Security Audit"
                successMessage="We will review this and reply within a few hours. If the site is actively hacked, call or WhatsApp us directly for faster triage."
                services={services}
                messagePlaceholder="Website URL, what the site does, what concerns you most, and whether this is urgent..."
              />
              <div className="mt-5 rounded-2xl border border-border/50 bg-gray-50 p-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Helpful details: website URL, recent plugin/theme changes, whether backups exist, whether you have seen malware warnings or suspicious behaviour, and whether this affects sales or leads right now.
                </p>
              </div>
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
