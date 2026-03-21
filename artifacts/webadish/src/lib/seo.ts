export const SITE_URL = "https://webadish.com";
export const SITE_NAME = "WebAdish";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;
export const DEFAULT_DESCRIPTION =
  "WebAdish helps growth-focused businesses protect and recover WordPress websites with protection plans, security retainers, audits, and emergency incident response.";
export const PRERENDER_ROUTES = [
  "/",
  "/maintenance",
  "/security",
  "/hacked-site-recovery",
  "/retainer",
  "/pricing",
  "/india",
  "/security-score",
  "/agency-partners",
  "/blog",
  "/blog/wordpress-security-agency-vs-freelancer",
  "/blog/hacked-wordpress-site-recovery-cost",
  "/blog/wordpress-security-retainer-includes",
  "/blog/woocommerce-maintenance-checklist",
  "/blog/protect-your-digital-assets",
  "/blog/how-hackers-break-into-websites",
  "/blog/wordpress-maintenance-guide",
  "/blog/wordpress-security-mistakes",
  "/blog/site-hacked-what-to-do",
  "/blog/why-plugin-updates-matter",
  "/case-studies",
  "/contact",
  "/web-design",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
];

type SeoData = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  keywords?: string[];
  noindex?: boolean;
  breadcrumbs?: Array<{ name: string; path: string }>;
  schema?: Array<Record<string, unknown>>;
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WebAdish LLP",
  url: SITE_URL,
  logo: "https://webadish.com/wp-content/uploads/2025/02/logo-bp-webadish-1.webp",
  email: "hello@webadish.com",
  telephone: "+44 7344 540450",
  sameAs: [
    "https://www.linkedin.com/company/webadish",
    "https://www.facebook.com/webadish",
    "https://www.instagram.com/webadish",
    "https://x.com/webadish",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@webadish.com",
      telephone: "+44 7344 540450",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
};

const serviceSchema = (
  name: string,
  description: string,
  path: string,
  serviceType: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType,
  name,
  description,
  url: `${SITE_URL}${path}`,
  provider: {
    "@type": "Organization",
    name: "WebAdish LLP",
    url: SITE_URL,
  },
  areaServed: "Worldwide",
});

const faqSchema = (items: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

const maintenanceFaqs = [
  {
    question: "How do you handle plugin updates safely?",
    answer:
      "WebAdish tests WordPress core, theme, and plugin updates in staging before applying them to the live website to avoid unexpected breakage.",
  },
  {
    question: "What if my site breaks after an update?",
    answer:
      "A fresh backup is taken before changes and the team can roll back quickly if an update creates an issue.",
  },
  {
    question: "Do I need to give you admin access?",
    answer:
      "Yes. WebAdish typically needs WordPress admin access and, when relevant, hosting access to perform maintenance safely.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Protection plans are month-to-month with no long lock-in contract, subject to the notice terms on the website.",
  },
];

const pricingFaqs = [
  {
    question: "Are there setup fees?",
    answer: "No. The plans shown on the website do not include hidden setup fees.",
  },
  {
    question: "Can I upgrade or downgrade?",
    answer:
      "Yes. Clients can move between plans as needs change, with upgrades taking effect quickly and downgrades handled on the next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "WebAdish accepts common online payment methods including cards, bank transfers, and PayPal.",
  },
  {
    question: "Do you offer custom plans?",
    answer:
      "Yes. Custom plans are available for agencies, WooCommerce stores, and high-traffic or enterprise WordPress environments.",
  },
];

const breadcrumbs = (name: string, path: string) => [
  { name: "Home", path: "/" },
  { name, path },
];

const pageSeo: Record<string, SeoData> = {
  "/": {
    title: "WordPress Security & Protection Agency",
    description:
      "WebAdish provides WordPress security, protection plans, hacked site recovery, and retainers for businesses that cannot afford downtime, breaches, or slow support.",
    path: "/",
    type: "website",
    keywords: [
      "wordpress security agency",
      "wordpress protection plans",
      "hacked wordpress site recovery",
      "wordpress support retainer",
    ],
    schema: [
      organizationSchema,
      websiteSchema,
      serviceSchema(
        "WordPress Security and Protection Services",
        "Managed WordPress security, protection plans, hacked site recovery, and proactive support for business websites.",
        "/",
        "WordPress security and protection",
      ),
    ],
  },
  "/maintenance": {
    title: "WordPress Protection Plans",
    description:
      "Managed WordPress protection plans with safe updates, daily backups, uptime monitoring, reporting, and support for businesses that need a reliable website partner.",
    path: "/maintenance",
    keywords: [
      "wordpress protection plan",
      "wordpress maintenance agency",
      "wordpress support plan",
    ],
    breadcrumbs: breadcrumbs("Protection Plans", "/maintenance"),
    schema: [
      serviceSchema(
        "WordPress Protection Plans",
        "Ongoing WordPress protection with safe updates, backups, uptime monitoring, and support.",
        "/maintenance",
        "WordPress protection plan",
      ),
      faqSchema(maintenanceFaqs),
    ],
  },
  "/security": {
    title: "WordPress Security Services",
    description:
      "Protect your WordPress site with firewall management, malware scanning, hardening, vulnerability patching, blacklist monitoring, and 24/7 security oversight.",
    path: "/security",
    keywords: [
      "wordpress security service",
      "wordpress malware protection",
      "wordpress hardening service",
    ],
    breadcrumbs: breadcrumbs("Security", "/security"),
    schema: [
      serviceSchema(
        "WordPress Security Services",
        "Firewall, hardening, malware scanning, and proactive WordPress protection for business websites.",
        "/security",
        "WordPress security",
      ),
    ],
  },
  "/hacked-site-recovery": {
    title: "Hacked WordPress Site Recovery",
    description:
      "Emergency hacked WordPress site recovery with malware removal, blacklist cleanup, hardening, and reinfection protection for business-critical websites.",
    path: "/hacked-site-recovery",
    keywords: [
      "hacked wordpress site recovery",
      "wordpress malware removal service",
      "wordpress blacklist removal",
    ],
    breadcrumbs: breadcrumbs("Hacked Site Recovery", "/hacked-site-recovery"),
    schema: [
      serviceSchema(
        "Hacked WordPress Site Recovery",
        "Emergency malware cleanup, blacklist removal, and incident response for compromised WordPress websites.",
        "/hacked-site-recovery",
        "WordPress hacked site recovery",
      ),
    ],
  },
  "/retainer": {
    title: "WordPress Business Continuity Retainer",
    description:
      "Retained WordPress security for agencies, WooCommerce stores, and high-value businesses needing a dedicated expert, response SLAs, ongoing audits, and white-label support.",
    path: "/retainer",
    keywords: [
      "wordpress security retainer",
      "wordpress security consultant",
      "wordpress support SLA",
    ],
    breadcrumbs: breadcrumbs("Retainer", "/retainer"),
    schema: [
      serviceSchema(
        "WordPress Business Continuity Retainer",
        "Dedicated ongoing WordPress security support with audits, SLAs, and incident response.",
        "/retainer",
        "WordPress security retainer",
      ),
    ],
  },
  "/india": {
    title: "WordPress Protection Plans for India",
    description:
      "Dedicated INR pricing for Indian businesses needing WordPress maintenance, security hardening, audits, and hacked site recovery without mixing local pricing into global plans.",
    path: "/india",
    keywords: [
      "wordpress maintenance india",
      "wordpress security india",
      "wordpress hacked site recovery india",
    ],
    breadcrumbs: breadcrumbs("India Pricing", "/india"),
    schema: [
      serviceSchema(
        "WordPress Protection Plans India",
        "INR-priced WordPress security and protection services for Indian businesses.",
        "/india",
        "WordPress security India",
      ),
    ],
  },
  "/security-score": {
    title: "Free WordPress Security Score",
    description:
      "Run a quick WordPress security score for your website and see the immediate risks that should be reviewed before they turn into downtime or incident-response costs.",
    path: "/security-score",
    keywords: [
      "wordpress security score",
      "wordpress website security check",
      "wordpress risk assessment",
    ],
    breadcrumbs: breadcrumbs("Free Security Score", "/security-score"),
    schema: [
      serviceSchema(
        "Free WordPress Security Score",
        "A lead-magnet style WordPress security score tool for business websites.",
        "/security-score",
        "WordPress security assessment",
      ),
    ],
  },
  "/agency-partners": {
    title: "Agency White-Label WordPress Security",
    description:
      "White-label WordPress security, monitoring, and incident response for agencies managing multiple client websites worldwide.",
    path: "/agency-partners",
    keywords: [
      "white label wordpress security",
      "agency wordpress security partner",
      "wordpress retainer for agencies",
    ],
    breadcrumbs: breadcrumbs("Agency Partners", "/agency-partners"),
    schema: [
      serviceSchema(
        "Agency White-Label WordPress Security",
        "White-label monitoring, audits, and incident response for agencies managing WordPress portfolios.",
        "/agency-partners",
        "Agency WordPress security partner",
      ),
    ],
  },
  "/pricing": {
    title: "WordPress Maintenance & Security Pricing",
    description:
      "Compare WebAdish plans for WordPress maintenance, security, emergency recovery, and premium retainers for growing businesses and enterprise teams.",
    path: "/pricing",
    keywords: [
      "wordpress maintenance pricing",
      "wordpress security pricing",
      "wordpress support plans",
    ],
    breadcrumbs: breadcrumbs("Pricing", "/pricing"),
    schema: [faqSchema(pricingFaqs)],
  },
  "/blog": {
    title: "WordPress Security & Maintenance Blog",
    description:
      "Guides on WordPress security, maintenance, hacked site recovery, and website operations for serious businesses and digital teams.",
    path: "/blog",
    keywords: [
      "wordpress security blog",
      "wordpress maintenance articles",
      "wordpress recovery guides",
    ],
    breadcrumbs: breadcrumbs("Blog", "/blog"),
  },
  "/case-studies": {
    title: "WordPress Case Studies",
    description:
      "See how WebAdish helps businesses recover hacked WordPress sites, improve performance, and maintain business-critical websites with ongoing support.",
    path: "/case-studies",
    keywords: [
      "wordpress case studies",
      "wordpress security case study",
      "wordpress maintenance results",
    ],
    breadcrumbs: breadcrumbs("Case Studies", "/case-studies"),
  },
  "/contact": {
    title: "Contact WebAdish",
    description:
      "Talk to WebAdish about WordPress maintenance, security, emergency hacked site recovery, or a high-touch retainer for your business website.",
    path: "/contact",
    keywords: [
      "contact wordpress security agency",
      "wordpress emergency support",
      "wordpress maintenance consultation",
    ],
    breadcrumbs: breadcrumbs("Contact", "/contact"),
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact WebAdish",
        url: `${SITE_URL}/contact`,
      },
    ],
  },
  "/web-design": {
    title: "WordPress Web Design Services",
    description:
      "Conversion-focused WordPress web design with performance, SEO readiness, and ongoing support for brands that need a polished, secure website.",
    path: "/web-design",
    keywords: [
      "wordpress web design agency",
      "business wordpress website design",
      "seo-ready wordpress web design",
    ],
    breadcrumbs: breadcrumbs("Web Design", "/web-design"),
    schema: [
      serviceSchema(
        "WordPress Web Design Services",
        "Custom WordPress website design for businesses that want credibility, performance, and growth.",
        "/web-design",
        "WordPress web design",
      ),
    ],
  },
  "/privacy-policy": {
    title: "Privacy Policy",
    description: "Read the WebAdish privacy policy.",
    path: "/privacy-policy",
    noindex: true,
    breadcrumbs: breadcrumbs("Privacy Policy", "/privacy-policy"),
  },
  "/terms": {
    title: "Terms of Service",
    description: "Read the WebAdish terms of service.",
    path: "/terms",
    noindex: true,
    breadcrumbs: breadcrumbs("Terms", "/terms"),
  },
  "/refund-policy": {
    title: "Refund Policy",
    description: "Read the WebAdish refund policy.",
    path: "/refund-policy",
    noindex: true,
    breadcrumbs: breadcrumbs("Refund Policy", "/refund-policy"),
  },
};

const articleSchema = (data: {
  title: string;
  description: string;
  path: string;
  published: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: data.title,
  description: data.description,
  datePublished: data.published,
  dateModified: data.published,
  mainEntityOfPage: `${SITE_URL}${data.path}`,
  image: [DEFAULT_OG_IMAGE],
  author: {
    "@type": "Organization",
    name: "WebAdish",
  },
  publisher: {
    "@type": "Organization",
    name: "WebAdish LLP",
    logo: {
      "@type": "ImageObject",
      url: "https://webadish.com/wp-content/uploads/2025/02/logo-bp-webadish-1.webp",
    },
  },
});

const blogPosts: Record<string, SeoData> = {
  "/blog/wordpress-security-agency-vs-freelancer": {
    title: "WordPress Security Agency vs Freelancer",
    description:
      "A buyer-focused guide to choosing between a freelancer and an agency for WordPress security, maintenance, and incident response.",
    path: "/blog/wordpress-security-agency-vs-freelancer",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "WordPress Security Agency vs Freelancer", path: "/blog/wordpress-security-agency-vs-freelancer" },
    ],
    schema: [
      articleSchema({
        title: "WordPress Security Agency vs Freelancer: Which Is Right for a Revenue-Critical Website?",
        description:
          "How to choose the right WordPress support model when your website has commercial, operational, or brand risk.",
        path: "/blog/wordpress-security-agency-vs-freelancer",
        published: "2026-03-17",
      }),
    ],
  },
  "/blog/hacked-wordpress-site-recovery-cost": {
    title: "How Much Does Hacked WordPress Site Recovery Cost?",
    description:
      "A practical buyer guide to the cost of hacked WordPress site recovery, malware cleanup, blacklist removal, and hardening.",
    path: "/blog/hacked-wordpress-site-recovery-cost",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Hacked WordPress Site Recovery Cost", path: "/blog/hacked-wordpress-site-recovery-cost" },
    ],
    schema: [
      articleSchema({
        title: "How Much Does Hacked WordPress Site Recovery Cost?",
        description:
          "The real cost drivers behind emergency WordPress recovery and what buyers should expect from a serious provider.",
        path: "/blog/hacked-wordpress-site-recovery-cost",
        published: "2026-03-17",
      }),
    ],
  },
  "/blog/wordpress-security-retainer-includes": {
    title: "What a WordPress Business Continuity Retainer Includes",
    description:
      "A decision-stage guide to what buyers should expect from a WordPress security retainer, including audits, monitoring, incident response, and SLAs.",
    path: "/blog/wordpress-security-retainer-includes",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "WordPress Business Continuity Retainer Includes", path: "/blog/wordpress-security-retainer-includes" },
    ],
    schema: [
      articleSchema({
        title: "What Does a WordPress Business Continuity Retainer Actually Include?",
        description:
          "What premium WordPress security retainers usually cover, who they are for, and how to evaluate providers.",
        path: "/blog/wordpress-security-retainer-includes",
        published: "2026-03-17",
      }),
    ],
  },
  "/blog/woocommerce-maintenance-checklist": {
    title: "WooCommerce Maintenance Checklist for Growing Stores",
    description:
      "A buyer-intent guide to WooCommerce maintenance, covering staging, updates, rollback, monitoring, and support expectations for growing stores.",
    path: "/blog/woocommerce-maintenance-checklist",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "WooCommerce Maintenance Checklist", path: "/blog/woocommerce-maintenance-checklist" },
    ],
    schema: [
      articleSchema({
        title: "WordPress Maintenance for WooCommerce: What Growing Stores Should Expect",
        description:
          "A practical checklist for WooCommerce owners evaluating WordPress maintenance partners and support processes.",
        path: "/blog/woocommerce-maintenance-checklist",
        published: "2026-03-17",
      }),
    ],
  },
  "/blog/protect-your-digital-assets": {
    title: "Why Cybersecurity Is Critical for Modern Businesses",
    description:
      "Learn why cybersecurity is now a core business function and what modern companies should do to protect their websites, data, and reputation.",
    path: "/blog/protect-your-digital-assets",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Why Cybersecurity Is Critical for Modern Businesses", path: "/blog/protect-your-digital-assets" },
    ],
    schema: [
      articleSchema({
        title: "Protect Your Digital Assets: Why Cybersecurity Is Critical for Modern Businesses",
        description:
          "A practical overview of why cybersecurity matters for modern businesses and how website security affects revenue, trust, and operations.",
        path: "/blog/protect-your-digital-assets",
        published: "2026-03-16",
      }),
    ],
  },
  "/blog/how-hackers-break-into-websites": {
    title: "How Hackers Break Into Websites and How to Stop Them",
    description:
      "A practical breakdown of the most common website attack paths and what businesses can do to reduce risk on WordPress sites.",
    path: "/blog/how-hackers-break-into-websites",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "How Hackers Break Into Websites", path: "/blog/how-hackers-break-into-websites" },
    ],
    schema: [
      articleSchema({
        title: "How Hackers Break Into Websites – And How to Stop Them",
        description:
          "Common website attack methods and practical WordPress defenses for businesses that need stronger protection.",
        path: "/blog/how-hackers-break-into-websites",
        published: "2026-03-02",
      }),
    ],
  },
  "/blog/wordpress-maintenance-guide": {
    title: "The Ultimate Guide to WordPress Maintenance",
    description:
      "A comprehensive guide to WordPress maintenance, uptime, updates, backups, and security for businesses that depend on their websites.",
    path: "/blog/wordpress-maintenance-guide",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "The Ultimate Guide to WordPress Maintenance", path: "/blog/wordpress-maintenance-guide" },
    ],
    schema: [
      articleSchema({
        title: "The Ultimate Guide to WordPress Maintenance for Australian Businesses",
        description:
          "A business-focused guide to keeping WordPress sites healthy, secure, and high-performing over time.",
        path: "/blog/wordpress-maintenance-guide",
        published: "2026-02-13",
      }),
    ],
  },
  "/blog/wordpress-security-mistakes": {
    title: "Common WordPress Security Mistakes",
    description:
      "The most common WordPress security mistakes businesses make and the steps needed to fix them before attackers exploit them.",
    path: "/blog/wordpress-security-mistakes",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Common WordPress Security Mistakes", path: "/blog/wordpress-security-mistakes" },
    ],
    schema: [
      articleSchema({
        title: "The Most Common WordPress Security Mistakes (And How to Fix Them)",
        description:
          "The avoidable WordPress security issues that often lead to breaches and what to do differently.",
        path: "/blog/wordpress-security-mistakes",
        published: "2026-01-20",
      }),
    ],
  },
  "/blog/site-hacked-what-to-do": {
    title: "My WordPress Site Got Hacked: What To Do Right Now",
    description:
      "A step-by-step response plan for businesses whose WordPress website has been hacked, blacklisted, or infected with malware.",
    path: "/blog/site-hacked-what-to-do",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "My WordPress Site Got Hacked", path: "/blog/site-hacked-what-to-do" },
    ],
    schema: [
      articleSchema({
        title: "My WordPress Site Got Hacked: What To Do Right Now",
        description:
          "Immediate triage steps for hacked WordPress websites and how to start recovery safely.",
        path: "/blog/site-hacked-what-to-do",
        published: "2026-01-05",
      }),
    ],
  },
  "/blog/why-plugin-updates-matter": {
    title: "Why WordPress Plugin Updates Matter",
    description:
      "Why outdated WordPress plugins create serious business risk and how to build a safer update process for your site.",
    path: "/blog/why-plugin-updates-matter",
    type: "article",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Why WordPress Plugin Updates Matter", path: "/blog/why-plugin-updates-matter" },
    ],
    schema: [
      articleSchema({
        title: "Why WordPress Plugin Updates Matter More Than You Think",
        description:
          "Why plugin updates are one of the most important WordPress security practices for modern business websites.",
        path: "/blog/why-plugin-updates-matter",
        published: "2025-12-12",
      }),
    ],
  },
};

export function getSeoData(pathname: string): SeoData {
  return (
    blogPosts[pathname] ??
    pageSeo[pathname] ?? {
      title: "Page Not Found",
      description: DEFAULT_DESCRIPTION,
      path: pathname,
      noindex: true,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Page Not Found", path: pathname },
      ],
    }
  );
}

export function getCanonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname === "/" ? "" : pathname}`;
}

export function getFullTitle(pathname: string): string {
  return `${getSeoData(pathname).title} | ${SITE_NAME}`;
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderSeoHead(pathname: string): string {
  const seo = getSeoData(pathname);
  const canonicalUrl = getCanonicalUrl(seo.path);
  const fullTitle = getFullTitle(pathname);
  const description = seo.description || DEFAULT_DESCRIPTION;
  const robots = seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";
  const schemaNodes = [
    ...(seo.breadcrumbs ? [buildBreadcrumbSchema(seo.breadcrumbs)] : []),
    ...(seo.schema ?? []),
  ];

  const metaTags = [
    `<meta name="description" content="${escapeHtml(description)}" />`,
    seo.keywords?.length
      ? `<meta name="keywords" content="${escapeHtml(seo.keywords.join(", "))}" />`
      : "",
    `<meta name="robots" content="${escapeHtml(robots)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:type" content="${escapeHtml(seo.type ?? "website")}" />`,
    `<meta property="og:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(DEFAULT_OG_IMAGE)}" />`,
    `<meta property="og:image:alt" content="WebAdish WordPress security and maintenance services" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(DEFAULT_OG_IMAGE)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
  ]
    .filter(Boolean)
    .join("\n    ");

  const schemaTags = schemaNodes
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema).replaceAll(
          "</script",
          "<\\/script",
        )}</script>`,
    )
    .join("\n    ");

  return [metaTags, schemaTags].filter(Boolean).join("\n    ");
}
