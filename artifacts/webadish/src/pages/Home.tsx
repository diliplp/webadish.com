import React, { useEffect, useRef, useState } from "react";
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
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
      .fromTo(".hero-title-word", { opacity: 0, y: 40, rotateX: -20 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" }, "-=0.4")
      .fromTo(".hero-subtitle", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .fromTo(".hero-cta", { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" }, "-=0.2")
      .fromTo(".hero-trust", { opacity: 0 }, { opacity: 1, duration: 0.8 }, "-=0.2");

    const statNumbers = gsap.utils.toArray<HTMLElement>(".stat-num");
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      onEnter: () => {
        statNumbers.forEach((stat) => {
          const target = parseFloat(stat.getAttribute("data-target") || "0");
          const isDecimal = target % 1 !== 0;
          gsap.to(stat, {
            innerHTML: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: isDecimal ? 0.1 : 1 },
            onUpdate: function () {
              if (isDecimal) stat.innerHTML = Number(this.targets()[0].innerHTML).toFixed(1);
            },
          });
        });
      },
    });

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
              <span>Global WordPress Security Experts</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-tight mb-6 perspective-[1000px]">
              <span className="inline-block hero-title-word origin-bottom">Your</span>{" "}
              <span className="inline-block hero-title-word origin-bottom">WordPress</span>{" "}
              <span className="inline-block hero-title-word origin-bottom">Site,</span>
              <br />
              <span className="inline-block hero-title-word origin-bottom text-accent">Protected</span>{" "}
              <span className="inline-block hero-title-word origin-bottom text-accent">24/7</span>
            </h1>

            <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
              High-ticket WordPress maintenance & security retainers for agencies, eCommerce, and serious businesses. We guard your site around the clock.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button variant="accent" size="lg" className="hero-cta w-full sm:w-auto text-lg px-8" onClick={() => window.location.href='/contact'}>
                Get Protected <ArrowRight size={18} className="ml-2" />
              </Button>
              <Link href="/hacked-site-recovery">
                <Button variant="outline-primary" size="lg" className="hero-cta w-full sm:w-auto text-lg px-8 bg-white">
                  <Ambulance size={18} className="mr-2" /> Emergency Recovery
                </Button>
              </Link>
            </div>

            <div className="hero-trust flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 800+ Sites Protected</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> &lt;24h Malware Recovery</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-accent" /> 99.9% Uptime</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 30-Day Guarantee</div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </section>

        {/* EMERGENCY BANNER */}
        <Link href="/hacked-site-recovery" className="block w-full bg-primary text-primary-foreground py-4 px-4 text-center font-medium hover:bg-primary/90 transition-colors z-20 relative group">
          <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
            <span className="text-xl">🚨</span>
            <span className="text-sm md:text-base">Site Hacked? We recover WordPress sites in under 24 hours</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* STATS */}
        <section ref={statsRef} className="py-16 bg-white border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-border/50 text-center">
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex justify-center"><span className="stat-num" data-target="800">0</span>+</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Sites Protected</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 flex justify-center">&lt;<span className="stat-num" data-target="24">0</span>h</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Malware Recovery</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 flex justify-center"><span className="stat-num" data-target="99.9">0</span>%</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Uptime Guarantee</div>
              </div>
              <div className="px-4">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 flex justify-center"><span className="stat-num" data-target="30">0</span>-Day</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Re-Infection Guarantee</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-section">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Comprehensive WordPress Protection</h2>
              <p className="text-lg text-muted-foreground">We handle the technical heavy lifting so you can focus on growing your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <Wrench size={28} className="text-accent group-hover:text-white" />, iconBg: "bg-accent/10 group-hover:bg-accent", title: "WordPress Maintenance", desc: "Monthly updates, daily cloud backups, performance monitoring & priority support.", href: "/maintenance", border: "hover:border-t-accent" },
                { icon: <Shield size={28} className="text-accent group-hover:text-white" />, iconBg: "bg-accent/10 group-hover:bg-accent", title: "WordPress Security", desc: "Enterprise-grade firewall setup, active malware scanning, vulnerability patching & hardening.", href: "/security", border: "hover:border-t-accent" },
                { icon: <Ambulance size={28} className="text-primary group-hover:text-white" />, iconBg: "bg-primary/10 group-hover:bg-primary", title: "Hacked Site Recovery", desc: "Emergency malware removal, Google blacklist removal & complete site restoration in under 24 hours.", href: "/hacked-site-recovery", border: "hover:border-t-primary" },
                { icon: <Lock size={28} className="text-foreground group-hover:text-white" />, iconBg: "bg-gray-100 group-hover:bg-foreground", title: "Security Retainer", desc: "Ongoing dedicated security monitoring, monthly in-depth audits & instant incident response.", href: "/retainer", border: "hover:border-t-foreground" },
              ].map((s) => (
                <Link key={s.href} href={s.href} className="group block reveal-section">
                  <div className={`bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:-translate-y-2 hover:shadow-xl hover:border-t-4 ${s.border} transition-all duration-300 h-full`}>
                    <div className={`h-14 w-14 rounded-xl ${s.iconBg} flex items-center justify-center mb-6 transition-colors`}>{s.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex items-center text-sm font-medium text-accent">Learn more <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal-section">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Businesses Worldwide</h2>
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

        {/* PRICING PREVIEW */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal-section">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent Pricing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">No hidden fees. Choose the level of protection your business needs.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50 reveal-section">
                <h3 className="text-xl font-semibold mb-2">Standard</h3>
                <div className="mb-6"><span className="text-4xl font-bold">$99</span><span className="text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {["WP & Plugin Updates", "Daily Cloud Backups", "Uptime Monitoring", "Monthly Report"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link href="/pricing"><Button variant="outline" className="w-full">Get Started</Button></Link>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-accent relative transform lg:scale-105 z-10 reveal-section">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Most Popular</div>
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <div className="mb-6"><span className="text-5xl font-bold">$199</span><span className="text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8 font-medium">
                  {["Everything in Standard", "Security Hardening", "Malware Scanning", "Priority Support", "24h Response"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" />{f}</li>
                  ))}
                </ul>
                <Button variant="accent" className="w-full h-12 text-base" onClick={() => window.location.href='/contact'}>Get Started Now</Button>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-border/50 reveal-section">
                <h3 className="text-xl font-semibold mb-2">Security Retainer</h3>
                <div className="mb-6"><span className="text-4xl font-bold">$799</span><span className="text-muted-foreground">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {["Everything in Pro", "Dedicated Security Eng.", "Monthly Audit", "Emergency Recovery", "Custom SLA"].map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm"><CheckCircle2 size={16} className="text-accent shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link href="/pricing"><Button variant="outline" className="w-full">Contact Sales</Button></Link>
              </div>
            </div>
            <div className="text-center mt-10 reveal-section">
              <Link href="/pricing"><Button variant="ghost" className="text-accent">See full pricing breakdown →</Button></Link>
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-section">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">WordPress Security Insights</h2>
                <p className="text-lg text-muted-foreground">The latest strategies from our cybersecurity desk.</p>
              </div>
              <Link href="/blog" className="hidden md:flex items-center text-link font-medium hover:text-accent transition-colors">View all articles <ArrowRight size={18} className="ml-2" /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { tag: "Security", tagColor: "text-primary", title: "Protect Your Digital Assets: Why Cybersecurity Is Critical for Modern Businesses", date: "March 16, 2026", read: "5 min", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500" },
                { tag: "Security", tagColor: "text-primary", title: "How Hackers Break Into Websites – And How to Stop Them", date: "March 2, 2026", read: "7 min", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500" },
                { tag: "Maintenance", tagColor: "text-accent", title: "The Ultimate Guide to WordPress Maintenance for Australian Businesses", date: "February 13, 2026", read: "8 min", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=500" },
              ].map((post) => (
                <Link href="/blog" key={post.title} className="group block reveal-section">
                  <div className="bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 overflow-hidden relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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

        {/* CTA */}
        <section className="py-24 cta-gradient text-white text-center reveal-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Is Your WordPress Site One Hack Away from Disaster?</h2>
            <p className="text-xl text-white/90 mb-10 text-balance">Join 800+ businesses that trust WebAdish for 24/7 WordPress protection.</p>
            <Button variant="white" size="lg" className="text-lg px-10 py-7" onClick={() => window.location.href='/contact'}>
              Get Protected Now <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
