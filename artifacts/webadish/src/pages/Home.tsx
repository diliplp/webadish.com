import React, { useRef } from "react";
import {
  Shield,
  Wrench,
  Ambulance,
  Clock,
  CheckCircle2,
  Star,
  ArrowRight,
  Lock,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Users,
  Activity,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import OptimizedImage from "@/components/OptimizedImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .fromTo(".hero-title-word", { opacity: 0, y: 40, rotateX: -20 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.4")
      .fromTo(".hero-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .fromTo(".hero-cta", { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.2")
      .fromTo(".hero-trust", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.2");

    gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
      gsap.fromTo(section, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 85%", toggleActions: "play none none none" },
      });
    });
  }, { scope: heroRef });

  return (
    <Layout>
      <div ref={heroRef}>

        {/* HERO */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 hero-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
              <Shield size={16} className="text-accent" />
              <span>Proactive WordPress Security & Maintenance — 20+ Years Experience</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-5xl mx-auto leading-tight mb-6 perspective-[1000px]">
              <span className="inline-block hero-title-word origin-bottom">WordPress</span>{" "}
              <span className="inline-block hero-title-word origin-bottom">Security</span>{" "}
              <span className="inline-block hero-title-word origin-bottom">&</span>{" "}
              <span className="inline-block hero-title-word origin-bottom">Maintenance</span>
              <br />
              <span className="inline-block hero-title-word origin-bottom text-accent">for Business-Critical</span>{" "}
              <span className="inline-block hero-title-word origin-bottom text-accent">Websites</span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
              Prevent incidents, protect revenue, and ensure continuous uptime with expert-led security and maintenance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button variant="accent" size="lg" className="hero-cta w-full sm:w-auto text-lg px-8" onClick={() => window.location.href='/contact'}>
                Get Protected <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="/hacked-site-recovery">
                <Button variant="outline-primary" size="lg" className="hero-cta w-full sm:w-auto text-lg px-8 bg-white">
                  <Ambulance size={18} className="mr-2" /> Already Hacked? Emergency Help
                </Button>
              </Link>
            </div>

            <div className="hero-trust flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 800+ Sites Protected</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> &lt;24h Malware Recovery</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-accent" /> 20+ Years in Business</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Dedicated Security Team</div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </section>

        {/* EMERGENCY BANNER */}
        <a href="https://www.webadish.co.uk/hacked-website-recovery-uk" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-primary-foreground py-4 px-4 text-center font-medium hover:bg-primary/90 transition-colors z-20 relative group">
          <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
            <span className="text-xl">🚨</span>
            <span className="text-sm md:text-base">Site Hacked? Get emergency incident response with our dedicated security team</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* AUTHORITY STRIP */}
        <section className="py-10 bg-white border-b border-border/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              Built on 20+ years of infrastructure, security, and enterprise system experience.
            </p>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-section">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Most websites fail not due to design — but due to weak security and poor maintenance practices.
              </h2>
              <p className="text-lg text-muted-foreground">We exist to fix that. Our team of security experts and WordPress developers ensures your site stays operational, protected, and performing — so you never have to deal with a preventable crisis.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Activity size={28} className="text-accent" />,
                  title: "Continuous Uptime",
                  desc: "24/7 monitoring with immediate alerts. Your site stays up so your business stays running.",
                },
                {
                  icon: <Shield size={28} className="text-accent" />,
                  title: "Security Protection",
                  desc: "Firewall management, malware scanning, vulnerability patching, and hardening — applied before threats become incidents.",
                },
                {
                  icon: <TrendingUp size={28} className="text-accent" />,
                  title: "Performance Stability",
                  desc: "Safe updates, staging-tested deployments, and expert oversight that keeps your site fast and reliable.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all reveal-section">
                  <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PREVENTION ANGLE */}
        <section className="py-20 bg-foreground text-white reveal-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                  <AlertTriangle size={14} /> Prevention vs Recovery
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Prevention is significantly cheaper than incident recovery.</h2>
                <p className="text-white/70 text-base mb-4">
                  Even well-maintained websites can be compromised if security is not handled properly.
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Most hacked websites were "maintained" — but not properly secured. A plugin update schedule is not a security strategy. We implement defence-in-depth so problems are caught and contained before they escalate into emergencies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="white" size="lg" onClick={() => window.location.href='/contact'}>
                    Get Protected <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Link href="/hacked-site-recovery">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
                      Already Compromised? →
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Emergency malware cleanup", cost: "$500–$2,000+", icon: "🔴" },
                  { label: "Google blacklist removal & SEO recovery", cost: "Weeks to months", icon: "🔴" },
                  { label: "Lost revenue during downtime", cost: "Ongoing", icon: "🔴" },
                  { label: "Managed security retainer (prevents all of the above)", cost: "$199–$999/mo", icon: "🟢" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                    <div className="flex items-center gap-3 text-sm">
                      <span>{row.icon}</span>
                      <span className="text-white/80">{row.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-white shrink-0 ml-4">{row.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal-section">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">Protection Plans</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Continuous Protection for Different Levels of Business Risk</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">No hidden fees. No lock-in contracts. Built for businesses that need real protection, not just a maintenance checkbox.</p>
              <div className="inline-block bg-foreground text-white px-6 py-4 rounded-2xl">
                <p className="text-base md:text-lg font-semibold leading-snug">
                  This is not generic maintenance.<br />
                  This is continuous protection for business-critical websites.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
              {/* Basic Protection */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50 reveal-section">
                <h3 className="text-xl font-semibold mb-1">Basic Protection</h3>
                <p className="text-sm text-muted-foreground mb-4">For low-risk websites requiring basic protection</p>
                <div className="mb-6"><span className="text-4xl font-bold">$199</span><span className="text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {["Core updates & monitoring", "Backup systems", "Baseline security"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link href="/pricing"><Button variant="outline" className="w-full">Get Started</Button></Link>
              </div>

              {/* Recommended */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-accent relative transform lg:scale-105 z-10 reveal-section">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">⭐ Recommended</div>
                <h3 className="text-xl font-semibold mb-1">Business Protection</h3>
                <p className="text-sm text-muted-foreground mb-4">For growing businesses and revenue-generating sites</p>
                <div className="mb-6"><span className="text-5xl font-bold">$399–$599</span><span className="text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {["Advanced monitoring", "Performance optimization", "Priority support", "Enhanced security"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium"><CheckCircle2 size={16} className="text-accent shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button variant="accent" className="w-full h-12 text-base" onClick={() => window.location.href='/contact'}>Get Started Now</Button>
              </div>

              {/* Full Protection */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50 reveal-section">
                <h3 className="text-xl font-semibold mb-1">Full Protection</h3>
                <p className="text-sm text-muted-foreground mb-4">Continuous protection for high-value websites</p>
                <div className="mb-6"><span className="text-4xl font-bold">$999+</span><span className="text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {["Dedicated security oversight", "Threat monitoring", "Monthly security audits", "Priority incident response"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link href="/pricing"><Button variant="outline" className="w-full">Contact Sales</Button></Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-10 max-w-2xl mx-auto reveal-section">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-center">
                <p className="text-sm text-amber-800 mb-3">
                  <strong>⚠️ Important:</strong> Critical security incidents are handled separately by our dedicated incident response team.
                </p>
                <Link href="/hacked-site-recovery">
                  <Button variant="outline" size="sm" className="border-amber-400 text-amber-800 hover:bg-amber-100">
                    Get Emergency Help <ArrowRight size={14} className="ml-1" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center mt-8 reveal-section">
              <Link href="/pricing"><Button variant="ghost" className="text-accent">See full pricing breakdown →</Button></Link>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal-section">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Every plan is built around four outcomes your business actually needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Activity size={24} className="text-accent" />, title: "Continuous Uptime Monitoring", desc: "Real-time checks with immediate alerts so issues are caught before customers notice." },
                { icon: <Shield size={24} className="text-accent" />, title: "Security Threat Prevention", desc: "Firewall, malware scanning, and vulnerability monitoring running around the clock." },
                { icon: <Users size={24} className="text-accent" />, title: "Expert Support", desc: "A dedicated team of WordPress security specialists — not a generic helpdesk." },
                { icon: <TrendingUp size={24} className="text-accent" />, title: "Performance Stability", desc: "Staging-tested updates and optimisation so changes never break what's working." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-2xl p-7 border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all reveal-section">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-section">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Is For</h2>
              <p className="text-lg text-muted-foreground">We work best with businesses where website performance and security directly impact operations, revenue, or reputation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: <Lock size={20} className="text-accent" />, title: "Business Websites", desc: "Lead-gen sites, B2B platforms, and brand websites where downtime or a security warning costs you deals." },
                { icon: <Wrench size={20} className="text-accent" />, title: "eCommerce Platforms", desc: "WooCommerce stores where checkout failures, malware, or slow performance directly cut revenue." },
                { icon: <Users size={20} className="text-accent" />, title: "Agencies Managing Multiple Sites", desc: "Digital agencies that need a reliable security and maintenance partner for client portfolios." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-7 border border-border/50 reveal-section">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto reveal-section">
              <div className="bg-white rounded-xl border border-border/50 p-5 flex items-start gap-3">
                <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">Not suitable for low-budget or non-critical websites.</strong> Our plans are built for businesses where security and uptime have real operational consequences. If you need basic hosting support, we're not the right fit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal-section">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by businesses where uptime and security are critical</h2>
              <p className="text-lg text-muted-foreground">Real results for agencies, eCommerce stores, and high-growth brands.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { name: "Verofax", desc: "Hacked Website Recovery, Development, Maintenance & Security.", href: "/case-studies" },
                { name: "Shivam Autozone", desc: "Website Security, Development & Maintenance.", href: "/case-studies" },
                { name: "Crystal Cold Chain", desc: "Website Development & Maintenance.", href: "/case-studies" },
              ].map((c) => (
                <Link key={c.name} href={c.href} className="group block reveal-section">
                  <div className="bg-gray-50 rounded-2xl p-8 h-full border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all">
                    <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Case Study</div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">{c.name}</h3>
                    <p className="text-muted-foreground mb-6">{c.desc}</p>
                    <div className="flex items-center text-sm font-medium text-link">Read full story <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Vashishtha Luxury Fashion", role: "Fashion Brand", quote: "Webadish is undoubtedly best service providers in today's digital industry!! Especially Sneha ji is the one whom you can rely on for any queries. From last 3 years extremely happy with their prompt and timely services." },
                { name: "Shivam Autozone", role: "Automotive Dealership", quote: "We are really impressed with the amazing website. Such a great company to work with and highly recommended to everyone." },
                { name: "Triton Poker Tables", role: "eCommerce Store", quote: "Just wanted to thank you for helping us with the website. I think you did an amazing job guiding me through the whole process." },
              ].map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 flex flex-col reveal-section">
                  <div className="flex gap-1 text-yellow-400 mb-6">{[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}</div>
                  <p className="text-foreground/80 italic mb-8 flex-grow leading-relaxed">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 reveal-section">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">From Our Security Team</p>
                <h2 className="text-2xl font-bold">WordPress Security Insights</h2>
              </div>
              <Link href="/blog" className="hidden md:flex items-center text-sm text-muted-foreground hover:text-accent transition-colors mt-2 md:mt-0">View all articles <ArrowRight size={15} className="ml-1" /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { tag: "Security", tagColor: "text-primary", title: "Protect Your Digital Assets: Why Cybersecurity Is Critical for Modern Businesses", date: "March 16, 2026", read: "5 min", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500" },
                { tag: "Security", tagColor: "text-primary", title: "How Hackers Break Into Websites – And How to Stop Them", date: "March 2, 2026", read: "7 min", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500" },
                { tag: "Buyer Intent", tagColor: "text-foreground", title: "Before You Hire a WordPress Security Team: 7 Questions That Reveal the Right Fit", date: "March 21, 2026", read: "7 min", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=500" },
              ].map((post) => (
                <Link href="/blog" key={post.title} className="group block reveal-section">
                  <div className="bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                      <OptimizedImage src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={576} height={380} />
                      <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full ${post.tagColor}`}>{post.tag}</div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-muted-foreground mb-3 gap-4">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.read} read</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                      <div className="mt-auto flex items-center text-sm font-medium text-link">Read More <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* BRIDGE — EMERGENCY ESCALATION */}
        <section className="py-24 bg-primary text-white reveal-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Ambulance size={16} /> Already Under Attack?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Website already<br className="hidden md:block" /> compromised?
            </h2>
            <p className="text-xl font-semibold text-white/90 mb-6">
              Get expert incident response — not just a quick fix.
            </p>
            <p className="text-lg text-white/75 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every hour your site is infected, Google is recording it, customers are being warned away, and the damage compounds. Our incident response team is available now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/hacked-site-recovery">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-6">
                  Get Emergency Help Now <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <a href="https://www.webadish.co.uk/hacked-website-recovery-uk" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-6">
                  UK Emergency Service →
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 cta-gradient text-white text-center reveal-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Protect your website before problems occur.</h2>
            <p className="text-xl text-white/90 mb-10 text-balance">
              Every day without proper security is a day your site is exposed. Our team handles it so you don't have to.
            </p>
            <p className="text-base text-white/60 mb-10">
              We specialize in WordPress security, incident response, and ongoing protection for business-critical websites.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="lg" className="text-lg px-10 py-7" onClick={() => window.location.href='/contact'}>
                Get Started <ArrowRight size={20} className="ml-2" />
              </Button>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-lg px-10 py-7 border-white text-white hover:bg-white hover:text-foreground">
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
