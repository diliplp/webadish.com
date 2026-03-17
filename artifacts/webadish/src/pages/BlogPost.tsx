import React from "react";
import { ArrowLeft, Clock, Calendar, Share2, Shield } from "lucide-react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const posts: Record<string, {
  tag: string; tagColor: string; title: string; date: string; read: string;
  img: string; content: React.ReactNode;
}> = {
  "protect-your-digital-assets": {
    tag: "Security", tagColor: "text-primary",
    title: "Protect Your Digital Assets: Why Cybersecurity Is Critical for Modern Businesses",
    date: "March 16, 2026", read: "5 min",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-xl font-medium text-foreground">The modern business is a digital business. Your website is your storefront, your brand, your revenue engine — and it's under attack around the clock.</p>
        <p>Cyberattacks have increased by over 300% since 2020, and WordPress — powering 43% of all websites — is the #1 target. The question is no longer <em>if</em> your site will be targeted. It's <em>when</em> — and whether you'll be ready.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">What's Really at Stake?</h2>
        <p>A hacked website doesn't just mean a few hours of downtime. The real costs cascade quickly:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Revenue loss</strong> — an offline or compromised site can't convert customers.</li>
          <li><strong>Reputation damage</strong> — customers who see a security warning never return.</li>
          <li><strong>SEO damage</strong> — Google blacklists hacked sites, wiping months of ranking progress overnight.</li>
          <li><strong>Data breaches</strong> — if customer data is exposed, legal liability follows.</li>
          <li><strong>Recovery costs</strong> — emergency cleanup, developer fees, and lost productivity.</li>
        </ul>
        <p>The average cost of a website breach for a small business is now over $25,000 when all direct and indirect costs are included. Compare that to a professional security plan that costs a fraction of that per year.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">The WordPress Attack Surface</h2>
        <p>WordPress's popularity is its greatest strength and biggest weakness. With thousands of plugins, themes, and a well-documented architecture, attackers know exactly where to look:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li><strong>Outdated plugins</strong> account for 56% of all WordPress hacks.</li>
          <li><strong>Weak passwords</strong> and no two-factor authentication make brute force trivial.</li>
          <li><strong>Shared hosting</strong> environments allow one compromised site to infect neighbours.</li>
          <li><strong>Abandoned themes</strong> — themes that are no longer updated are full of unpatched vulnerabilities.</li>
        </ul>
        <h2 className="text-2xl font-bold text-foreground mt-8">Five Steps Every Business Should Take Today</h2>
        <ol className="list-decimal list-inside space-y-3 pl-4">
          <li><strong>Enable automatic updates</strong> for WordPress core, and establish a tested process for plugin/theme updates.</li>
          <li><strong>Install a web application firewall (WAF)</strong> to block attack traffic before it reaches your site.</li>
          <li><strong>Enforce two-factor authentication (2FA)</strong> for all admin users — no exceptions.</li>
          <li><strong>Set up daily offsite backups</strong> so you can recover instantly if the worst happens.</li>
          <li><strong>Run regular malware scans</strong> to catch infections before they cause visible damage.</li>
        </ol>
        <h2 className="text-2xl font-bold text-foreground mt-8">The Case for Professional Security Management</h2>
        <p>Most business owners are not security experts — nor should they need to be. The plugins-and-hope approach is not a security strategy. Professional managed security means:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>A team monitoring your site 24/7, not just during business hours.</li>
          <li>Experts who understand the threat landscape and can respond instantly.</li>
          <li>Systematic updates applied safely with rollback protection.</li>
          <li>Monthly reports so you always know your security posture.</li>
        </ul>
        <p>Your website is one of your most valuable business assets. Protect it like one.</p>
      </div>
    ),
  },
  "how-hackers-break-into-websites": {
    tag: "Security", tagColor: "text-primary",
    title: "How Hackers Break Into Websites – And How to Stop Them",
    date: "March 2, 2026", read: "7 min",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-xl font-medium text-foreground">Understanding how attackers think is the first step to keeping them out. Here's a breakdown of the most common attack vectors against WordPress sites — and exactly what you can do to stop each one.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">1. Exploiting Vulnerable Plugins & Themes</h2>
        <p>This is the #1 cause of WordPress hacks — responsible for over 56% of all successful breaches. Plugins and themes are third-party code that runs with full access to your site. When a security vulnerability is discovered in a popular plugin, it's published in a CVE database — and automated bots start scanning for unpatched sites within hours.</p>
        <p><strong>How to stop it:</strong> Update plugins and themes promptly, remove deactivated plugins entirely, use a plugin vulnerability scanner, and consider a managed update service that tests updates in staging first.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">2. Brute Force Attacks</h2>
        <p>Bots hammer your login page with thousands of username/password combinations per minute. The WordPress default login at /wp-login.php is well-known, and weak passwords make this devastatingly effective.</p>
        <p><strong>How to stop it:</strong> Enable two-factor authentication, limit login attempts, change your login URL, use a strong unique password for admin accounts, and implement a WAF that blocks repeat failed logins.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">3. SQL Injection</h2>
        <p>Attackers submit malicious SQL commands through contact forms, search boxes, or URL parameters. A vulnerable input field that isn't properly sanitised can give attackers full access to your database — including all user data and passwords.</p>
        <p><strong>How to stop it:</strong> Keep WordPress and plugins updated (modern code sanitises inputs), use a WAF that detects and blocks SQL injection patterns, and avoid plugins with poor security track records.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">4. Cross-Site Scripting (XSS)</h2>
        <p>Attackers inject malicious JavaScript into your site — through comments, form fields, or vulnerable plugins. This code then runs in the browsers of your visitors, potentially stealing session cookies or redirecting users to malicious sites.</p>
        <p><strong>How to stop it:</strong> Use a WAF with XSS protection, ensure plugins sanitise outputs, implement a Content Security Policy (CSP) header, and scan regularly for injected scripts.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">5. Backdoors</h2>
        <p>After gaining initial access, sophisticated attackers plant backdoors — hidden code that lets them re-enter even after you've changed passwords and patched the original vulnerability. Backdoors are often disguised as legitimate WordPress files and are the reason why sites get "re-hacked" after amateur cleanup attempts.</p>
        <p><strong>How to stop it:</strong> Professional malware removal that includes a full file integrity scan, comparison against clean WordPress core files, and post-cleanup hardening is the only reliable solution.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">6. Credential Stuffing</h2>
        <p>Attackers use lists of username/password combinations leaked from other sites (there are billions of these online). They try these against your WordPress login — and if you reuse passwords, they get in.</p>
        <p><strong>How to stop it:</strong> Use unique, complex passwords for every account. A password manager makes this painless. Enforce this policy for all admin users, and use 2FA as a second layer.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">The Takeaway</h2>
        <p>Hackers are not targeting you personally. They're running automated tools that scan millions of sites simultaneously looking for known weaknesses. The solution is simple: remove the known weaknesses before they find them. A professional security and maintenance plan does exactly that — systematically, continuously.</p>
      </div>
    ),
  },
  "wordpress-maintenance-guide": {
    tag: "Maintenance", tagColor: "text-accent",
    title: "The Ultimate Guide to WordPress Maintenance for Australian Businesses",
    date: "February 13, 2026", read: "8 min",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-xl font-medium text-foreground">WordPress maintenance isn't a once-a-year task. It's an ongoing discipline — and for Australian businesses, the stakes are higher than ever given rising cyber threats and increasing regulatory scrutiny.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Why WordPress Needs Regular Maintenance</h2>
        <p>WordPress is a living system. It has moving parts — the core software, dozens of plugins, themes, server software, and your content — all of which need regular attention. Without maintenance:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Outdated software creates security vulnerabilities attackers actively exploit.</li>
          <li>Plugin conflicts emerge over time, causing subtle performance degradation or breakage.</li>
          <li>Database bloat slows page load times and query performance.</li>
          <li>Backups either don't run, fill up local storage, or become corrupted.</li>
          <li>SSL certificates expire, causing browser warnings that kill conversion rates.</li>
        </ul>
        <h2 className="text-2xl font-bold text-foreground mt-8">The Monthly WordPress Maintenance Checklist</h2>
        <h3 className="text-xl font-bold text-foreground mt-6">Security & Updates</h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Update WordPress core to the latest stable version.</li>
          <li>Update all active plugins (tested in staging before live push).</li>
          <li>Update all active themes.</li>
          <li>Run a malware scan and review results.</li>
          <li>Check for and remove any suspicious admin users.</li>
          <li>Verify SSL certificate is valid and auto-renewing.</li>
        </ul>
        <h3 className="text-xl font-bold text-foreground mt-6">Performance</h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Check page load speeds (desktop and mobile) using PageSpeed Insights.</li>
          <li>Optimise database: remove post revisions, trashed posts, expired transients.</li>
          <li>Clear and rebuild caches.</li>
          <li>Audit and compress any new unoptimised images.</li>
        </ul>
        <h3 className="text-xl font-bold text-foreground mt-6">Backups & Recovery</h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Verify daily backups are running and stored offsite.</li>
          <li>Test a backup restore at least quarterly.</li>
          <li>Ensure backup retention meets your business requirements (30+ days recommended).</li>
        </ul>
        <h3 className="text-xl font-bold text-foreground mt-6">Content & SEO</h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Check for and fix broken links.</li>
          <li>Review and update outdated content.</li>
          <li>Check Google Search Console for crawl errors or manual actions.</li>
          <li>Verify structured data is error-free.</li>
        </ul>
        <h2 className="text-2xl font-bold text-foreground mt-8">Australian Compliance Considerations</h2>
        <p>Australian businesses have specific obligations under the Privacy Act 1988 and the Notifiable Data Breaches (NDB) scheme. If your site collects personal information from Australian customers, you must:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Implement reasonable security measures to protect personal data.</li>
          <li>Notify the OAIC and affected individuals within 30 days of an eligible data breach.</li>
          <li>Have an up-to-date Privacy Policy that meets Australian Privacy Principles (APPs).</li>
        </ul>
        <p>Regular security maintenance is a key component of demonstrating "reasonable steps" for NDB compliance.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">DIY vs. Managed Maintenance</h2>
        <p>Many business owners start with DIY maintenance — and stop within 3 months when other priorities take over. The cost of neglect is always higher than the cost of a managed plan. A managed WordPress maintenance service provides:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Consistent execution — no skipped months when you're busy.</li>
          <li>Expert judgment — knowing which updates to apply immediately vs. test first.</li>
          <li>Rapid response — when something breaks, it's fixed without delay.</li>
          <li>Documented proof — monthly reports you can use for compliance purposes.</li>
        </ul>
        <p>Your website is an asset. Treat it like one.</p>
      </div>
    ),
  },
  "wordpress-security-mistakes": {
    tag: "Security", tagColor: "text-primary",
    title: "The Most Common WordPress Security Mistakes (And How to Fix Them)",
    date: "January 20, 2026", read: "6 min",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-xl font-medium text-foreground">After recovering hundreds of hacked WordPress sites, we see the same security mistakes over and over. Here are the most common — and how to fix each one right now.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Mistake 1: Using "admin" as Your Username</h2>
        <p>Every brute force bot on the internet tries "admin" first. If that's your administrator username, you've handed attackers half the puzzle.</p>
        <p><strong>Fix:</strong> Create a new admin user with a unique username. Log in with the new account and delete the old "admin" user (reassigning content to the new account).</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Mistake 2: Weak or Reused Passwords</h2>
        <p>"Password123" or a password reused from another account is an open door. Credential stuffing attacks use leaked passwords from other breaches — attackers have lists of billions of real-world passwords.</p>
        <p><strong>Fix:</strong> Use a password manager. Generate a unique, 20+ character random password for your WordPress admin. Enforce this for all admin-level users.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Mistake 3: No Two-Factor Authentication</h2>
        <p>Even a strong password can be compromised via phishing or credential theft. 2FA means a stolen password alone isn't enough to break in.</p>
        <p><strong>Fix:</strong> Install a 2FA plugin (like WP 2FA or Google Authenticator) and enforce it for all administrator and editor accounts.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Mistake 4: Ignoring Plugin Updates</h2>
        <p>Every unpatched plugin is a potential entry point. Attackers run automated scans looking for sites running known-vulnerable plugin versions — often within hours of a CVE being published.</p>
        <p><strong>Fix:</strong> Update plugins regularly. For critical security updates, apply immediately. For other updates, test in a staging environment first, then deploy to live.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Mistake 5: Leaving Inactive Plugins & Themes Installed</h2>
        <p>Deactivated plugins still run code that can be exploited. Many users install plugins to test them, then deactivate — but not delete. Each one is a liability.</p>
        <p><strong>Fix:</strong> Delete any plugin or theme you're not actively using. There's no benefit to keeping them, only risk.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Mistake 6: No Backups (or Backups Stored on the Same Server)</h2>
        <p>When attackers compromise a server, they often corrupt or delete local backups. If your only backup is on the same server as your site, it's not a backup — it's a false sense of security.</p>
        <p><strong>Fix:</strong> Use a backup solution that stores copies offsite (Amazon S3, Google Drive, Dropbox). Run daily backups. Test restores quarterly.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Mistake 7: No Security Monitoring</h2>
        <p>Most hacked sites are infected for weeks or months before the owner notices. By then, the damage — blacklisting, SEO loss, customer exposure — is extensive.</p>
        <p><strong>Fix:</strong> Implement real-time malware scanning and file change monitoring. Automated alerts mean you know within minutes if something suspicious happens.</p>
      </div>
    ),
  },
  "site-hacked-what-to-do": {
    tag: "Recovery", tagColor: "text-red-600",
    title: "My WordPress Site Got Hacked: What To Do Right Now",
    date: "January 5, 2026", read: "5 min",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-xl font-medium text-foreground">Stay calm. A hacked WordPress site is recoverable — but the steps you take in the first hour matter enormously. Here's exactly what to do.</p>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 my-6">
          <p className="font-bold text-red-700 text-lg mb-2">🚨 Need immediate help?</p>
          <p className="text-red-700 text-sm">If your site is actively infected, <Link href="/hacked-site-recovery" className="underline font-semibold">contact our emergency team</Link> now. We recover WordPress sites in under 24 hours.</p>
        </div>
        <h2 className="text-2xl font-bold text-foreground mt-8">Step 1: Don't Panic — But Act Fast</h2>
        <p>Every minute your site is infected, Google is indexing the malware, visitors are being warned away, and the infection may be spreading. Speed matters. But panicking and clicking everything leads to mistakes — like accidentally deleting clean files or alerting the attacker.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Step 2: Put Your Site in Maintenance Mode</h2>
        <p>If your site is serving malware to visitors, take it offline immediately. Most hosting panels let you quickly enable maintenance mode or an "under construction" page. This stops visitors from being infected while you work on the problem.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Step 3: Change All Passwords</h2>
        <p>Change every credential associated with your site immediately:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>WordPress admin account passwords (all of them).</li>
          <li>Hosting panel password (cPanel, Plesk, etc.).</li>
          <li>FTP/SFTP credentials.</li>
          <li>Database password.</li>
          <li>Email accounts associated with the domain.</li>
        </ul>
        <h2 className="text-2xl font-bold text-foreground mt-8">Step 4: Notify Your Hosting Provider</h2>
        <p>Most hosts have a security team and can provide useful information — like access logs showing when and how the attacker got in. They can also quarantine the account if needed to prevent spread to other sites on shared hosting.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Step 5: Do NOT Just Reinstall WordPress</h2>
        <p>This is the #1 mistake people make. A reinstall clears core files but does nothing about:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Backdoors planted in plugin or theme directories.</li>
          <li>Infected database tables.</li>
          <li>Modified .htaccess or wp-config.php files.</li>
          <li>The original vulnerability that let the attacker in.</li>
        </ul>
        <p>A reinstall without full malware removal means you'll be hacked again within days.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">Step 6: Get Professional Help</h2>
        <p>Thorough malware removal requires comparing every file against clean WordPress core files, scanning database tables for injected code, finding and closing backdoors, and identifying the original entry point to prevent recurrence. This is technical, time-consuming work that requires expertise to do correctly.</p>
        <p>Our team does this every day. <Link href="/hacked-site-recovery" className="text-accent hover:underline font-medium">Learn about our emergency recovery service →</Link></p>
      </div>
    ),
  },
  "why-plugin-updates-matter": {
    tag: "Maintenance", tagColor: "text-accent",
    title: "Why WordPress Plugin Updates Matter More Than You Think",
    date: "December 12, 2025", read: "4 min",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200&h=600",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-xl font-medium text-foreground">Plugin updates seem like a minor housekeeping task. They're not. Keeping plugins updated is one of the most important security practices for any WordPress site.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">The Numbers</h2>
        <p>According to security research across millions of hacked WordPress sites:</p>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>56% of all WordPress hacks exploit outdated plugins.</li>
          <li>17% exploit outdated themes.</li>
          <li>Only 8% exploit WordPress core vulnerabilities.</li>
        </ul>
        <p>Your plugins are your biggest attack surface — not WordPress core, which has an excellent security team and rapid patch cycle.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">How Plugin Vulnerabilities Work</h2>
        <p>Here's the typical timeline when a plugin vulnerability is discovered:</p>
        <ol className="list-decimal list-inside space-y-3 pl-4">
          <li><strong>Day 0:</strong> A security researcher discovers a vulnerability in Plugin X.</li>
          <li><strong>Day 1:</strong> The researcher reports it to the plugin developer (responsible disclosure).</li>
          <li><strong>Day 7–30:</strong> The developer patches the vulnerability and releases an update.</li>
          <li><strong>Day 30–31:</strong> The vulnerability is published publicly in CVE databases.</li>
          <li><strong>Day 31 (same day):</strong> Automated scanners begin probing all sites running the unpatched plugin version.</li>
          <li><strong>Day 32:</strong> Your site is hacked if you haven't updated.</li>
        </ol>
        <h2 className="text-2xl font-bold text-foreground mt-8">Why People Don't Update (And Why They Should)</h2>
        <p>The most common reason people avoid updates: "Last time I updated a plugin, my site broke." This is a real concern — and it's why the right approach is to test updates in a staging environment before pushing to live. The solution to fear of updates is a proper update process, not avoiding updates.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">The Right Update Process</h2>
        <ol className="list-decimal list-inside space-y-3 pl-4">
          <li><strong>Backup first.</strong> Always take a fresh backup immediately before applying updates.</li>
          <li><strong>Update in staging.</strong> Apply updates to a copy of your site and verify nothing broke.</li>
          <li><strong>Deploy to live.</strong> Once verified in staging, deploy with confidence.</li>
          <li><strong>Monitor post-update.</strong> Keep an eye on the live site for 24 hours after major updates.</li>
        </ol>
        <p>This process takes time — which is exactly why a managed maintenance service is valuable. We do this for you, every month, for every plugin, every time.</p>
        <h2 className="text-2xl font-bold text-foreground mt-8">What About Auto-Updates?</h2>
        <p>WordPress supports automatic plugin updates. For minor releases, auto-update is generally safe. For major version updates, we recommend manual review first — major updates sometimes introduce breaking changes that need to be caught in staging. Our maintenance service handles this distinction automatically.</p>
        <p>Bottom line: keep your plugins updated. <Link href="/maintenance" className="text-accent hover:underline font-medium">Our maintenance plans do this for you →</Link></p>
      </div>
    ),
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = posts[slug];

  if (!post) {
    return (
      <Layout>
        <section className="pt-36 pb-24 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">This article doesn't exist or may have been moved.</p>
            <Link href="/blog"><Button variant="accent">Browse All Articles</Button></Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-36 pb-0 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold mb-4 bg-white border border-border/50 ${post.tagColor}`}>
            {post.tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Calendar size={16} /> {post.date}</div>
            <div className="flex items-center gap-2"><Clock size={16} /> {post.read} read</div>
            <div className="flex items-center gap-2"><Shield size={16} className="text-accent" /> WebAdish Security Team</div>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={post.img} alt={post.title} className="w-full h-80 object-cover" />
        </div>
      </div>

      {/* CONTENT */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {post.content}

        {/* SHARE */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Found this helpful?</p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium transition-colors">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-muted-foreground mb-1">Protect your WordPress site</p>
            <Link href="/contact"><Button variant="accent" size="sm">Get a Security Assessment</Button></Link>
          </div>
        </div>

        {/* RELATED CTA */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-border/50 text-center">
          <h3 className="text-xl font-bold mb-3">Need Professional WordPress Security?</h3>
          <p className="text-muted-foreground text-sm mb-6">Our team of WordPress security experts protects 800+ sites. Let us protect yours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/security"><Button variant="accent">View Security Plans</Button></Link>
            <Link href="/hacked-site-recovery"><Button variant="outline-primary">Emergency Recovery</Button></Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
