import Link from 'next/link';
import { Activity, AlertTriangle, Ambulance, ArrowRight, CheckCircle2, Shield, TrendingUp } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import { Button } from '@/components/Button';
import OptimizedImage from '@/components/OptimizedImage';

const featuredPosts = [
  {
    tag: 'Security',
    tagColor: 'text-primary',
    title: 'Protect Your Digital Assets: Why Cybersecurity Is Critical for Modern Businesses',
    date: 'March 16, 2026',
    read: '5 min',
    img: '/blog/legacy-security-awareness-banner.svg',
  },
  {
    tag: 'Security',
    tagColor: 'text-primary',
    title: 'How Hackers Break Into Websites – And How to Stop Them',
    date: 'March 2, 2026',
    read: '7 min',
    img: '/blog/legacy-security-awareness-banner.svg',
  },
  {
    tag: 'Buyer Intent',
    tagColor: 'text-foreground',
    title: 'Before You Hire a WordPress Security Team: 7 Questions That Reveal the Right Fit',
    date: 'March 21, 2026',
    read: '7 min',
    img: '/blog/hire-wordpress-security-team-banner.svg',
  },
];

export default function HomePage() {
  return (
    <SiteLayout>
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
            <Shield size={16} className="text-accent" />
            <span>WordPress Security, Protection Plans, and Incident Response — 20+ Years Experience</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-5xl mx-auto leading-tight mb-6">
            WordPress Security &amp; Protection
            <br />
            <span className="text-accent">for Business-Critical Websites</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            Prevent incidents, protect revenue, and keep WordPress business-critical with expert-led security, protection plans, and emergency response.
          </p>

          <div className="max-w-3xl mx-auto mb-8 rounded-2xl border border-accent/20 bg-white/90 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">Start Here</p>
            <p className="text-base md:text-lg text-foreground font-medium">
              Free Security Audit for WordPress business sites.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              We review visible risk, plugin exposure, backups, and obvious weak points, then recommend the right next step.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="w-full sm:w-auto text-lg px-8">
                Request Free Security Audit <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/hacked-site-recovery">
              <Button variant="outline-primary" size="lg" className="w-full sm:w-auto text-lg px-8 bg-white">
                <Ambulance size={18} className="mr-2" /> Already Hacked? Emergency Help
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 800+ Sites Protected</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-primary" /> &lt;24h Malware Recovery</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-accent" /> 20+ Years in Business</div>
            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Dedicated Security Team</div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      <section className="py-8 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg md:text-xl font-semibold leading-snug">Security is not a plugin or a checklist.</p>
          <p className="text-base md:text-lg text-white/75 mt-1">
            It requires continuous oversight, monitoring, and expert handling.
          </p>
        </div>
      </section>

      <a
        href="https://www.webadish.co.uk/hacked-website-recovery-uk"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-primary text-primary-foreground py-4 px-4 text-center font-medium hover:bg-primary/90 transition-colors z-20 relative group"
      >
        <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto">
          <span className="text-xl">🚨</span>
          <span className="text-sm md:text-base">Site Hacked? Get emergency incident response with our dedicated security team</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </a>

      <section className="py-14 bg-gray-50 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground text-center mb-8 uppercase tracking-wider">Why Businesses Trust WebAdish</h2>
          <div className="mb-8 rounded-2xl border border-border/50 bg-white p-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">Real Client Trust</p>
            <p className="text-base md:text-lg text-foreground">
              Client work includes <strong>verofax.com</strong>, <strong>shivamautozone.com</strong>, and <strong>crystalgroup.in</strong>.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Real-world WordPress delivery, recovery, and ongoing protection work across business-critical sites.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              '20+ years in infrastructure & security',
              'Experience handling critical website incidents',
              'Focused on business-critical systems',
              'Not a generic WordPress service provider',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 border border-border/50">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-foreground leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Most websites fail not due to design — but due to weak security and poor maintenance practices.
            </h2>
            <p className="text-lg text-muted-foreground">
              We exist to fix that. Our team of security experts and WordPress developers ensures your site stays operational, protected, and performing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity size={28} className="text-accent" />,
                title: 'Continuous Uptime',
                desc: '24/7 monitoring with immediate alerts. Your site stays up so your business stays running.',
              },
              {
                icon: <Shield size={28} className="text-accent" />,
                title: 'Security Protection',
                desc: 'Firewall management, malware scanning, vulnerability patching, and hardening before threats become incidents.',
              },
              {
                icon: <TrendingUp size={28} className="text-accent" />,
                title: 'Performance Stability',
                desc: 'Safe updates, staging-tested deployments, and expert oversight that keeps your site fast and reliable.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
                <AlertTriangle size={14} /> Prevention vs Recovery
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Prevention is significantly cheaper than incident recovery.</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Most hacked websites were &quot;maintained&quot; — but not properly secured. A plugin update schedule is not a security strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="white" size="lg">
                    Get Protected <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/hacked-site-recovery">
                  <Button variant="outline" size="lg" className="border-white text-white bg-transparent hover:bg-white hover:text-foreground">
                    Already Compromised? →
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Emergency malware cleanup', cost: '$500–$2,000+', icon: '🔴' },
                { label: 'Google blacklist removal & SEO recovery', cost: 'Weeks to months', icon: '🔴' },
                { label: 'Lost revenue during downtime', cost: 'Ongoing', icon: '🔴' },
                { label: 'Managed security retainer (prevents all of the above)', cost: 'From $3,000/yr', icon: '🟢' },
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Latest Thinking</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Security buying guides and operational insight</h2>
            </div>
            <Link href="/blog" className="text-accent font-medium hover:underline hidden md:inline-flex">
              Explore the blog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.title} className="group overflow-hidden rounded-2xl border border-border/50 bg-white shadow-sm hover:shadow-lg transition-all">
                <div className="aspect-[3/2] overflow-hidden bg-muted">
                  <OptimizedImage src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={576} height={380} />
                </div>
                <div className="p-6">
                  <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold mb-4 bg-white border border-border/50 ${post.tagColor}`}>
                    {post.tag}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.date} · {post.read}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
