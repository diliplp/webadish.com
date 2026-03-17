import { Clock, ArrowRight, Search } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useState } from "react";

const posts = [
  {
    tag: "Security",
    tagColor: "text-primary",
    tagBg: "bg-primary/10",
    title: "Protect Your Digital Assets: Why Cybersecurity Is Critical for Modern Businesses",
    excerpt: "As businesses move more of their operations online, the attack surface grows. Here's why cybersecurity is no longer optional — and what you need to do today.",
    date: "March 16, 2026",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/blog/protect-your-digital-assets",
  },
  {
    tag: "Security",
    tagColor: "text-primary",
    tagBg: "bg-primary/10",
    title: "How Hackers Break Into Websites – And How to Stop Them",
    excerpt: "From SQL injection to brute force attacks — we break down the most common methods hackers use to compromise WordPress sites and how to defend against each one.",
    date: "March 2, 2026",
    read: "7 min",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/blog/how-hackers-break-into-websites",
  },
  {
    tag: "Maintenance",
    tagColor: "text-accent",
    tagBg: "bg-accent/10",
    title: "The Ultimate Guide to WordPress Maintenance for Australian Businesses",
    excerpt: "A comprehensive breakdown of everything Australian businesses need to keep their WordPress site healthy, compliant, and performing at its best.",
    date: "February 13, 2026",
    read: "8 min",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/blog/wordpress-maintenance-guide",
  },
  {
    tag: "Security",
    tagColor: "text-primary",
    tagBg: "bg-primary/10",
    title: "The Most Common WordPress Security Mistakes (And How to Fix Them)",
    excerpt: "Most WordPress hacks are preventable. We've seen thousands of compromised sites — here are the most common mistakes that let attackers in.",
    date: "January 20, 2026",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/blog/wordpress-security-mistakes",
  },
  {
    tag: "Recovery",
    tagColor: "text-red-600",
    tagBg: "bg-red-50",
    title: "My WordPress Site Got Hacked: What To Do Right Now",
    excerpt: "Don't panic. Follow these immediate steps to contain the damage, assess the breach, and begin the recovery process.",
    date: "January 5, 2026",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/blog/site-hacked-what-to-do",
  },
  {
    tag: "Maintenance",
    tagColor: "text-accent",
    tagBg: "bg-accent/10",
    title: "Why WordPress Plugin Updates Matter More Than You Think",
    excerpt: "Outdated plugins are the #1 cause of WordPress hacks. Here's why keeping them updated is critical — and how to do it safely.",
    date: "December 12, 2025",
    read: "4 min",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
    href: "/blog/why-plugin-updates-matter",
  },
];

const categories = ["All", "Security", "Maintenance", "Recovery", "Performance"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === "All" || p.tag === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">WordPress Security <span className="text-accent">Insights</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Expert advice on WordPress security, maintenance, and hacked site recovery from our team of specialists.</p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-accent text-sm"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-6 bg-white border-b border-border/50 sticky top-[72px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-sm"
                    : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No articles found. Try a different search or category.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <Link key={post.title} href={post.href} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="h-52 overflow-hidden relative">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className={`absolute top-4 left-4 ${post.tagBg} text-xs font-bold px-3 py-1 rounded-full ${post.tagColor}`}>{post.tag}</div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-xs text-muted-foreground mb-3 gap-4">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.read} read</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center text-sm font-medium text-link">
                        Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 cta-gradient text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of WordPress Threats</h2>
          <p className="text-white/90 mb-8">Subscribe to our security newsletter — no fluff, just actionable WordPress security advice delivered monthly.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3 rounded-xl text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-white/50" />
            <Link href="/contact"><Button variant="white">Subscribe</Button></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
