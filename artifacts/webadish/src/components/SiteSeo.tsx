import { useEffect } from "react";
import { useLocation } from "wouter";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  buildBreadcrumbSchema,
  getCanonicalUrl,
  getSeoData,
} from "@/lib/seo";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

export default function SiteSeo() {
  const [location] = useLocation();

  useEffect(() => {
    const seo = getSeoData(location);
    const canonicalUrl = getCanonicalUrl(seo.path);
    const fullTitle = `${seo.title} | ${SITE_NAME}`;
    const description = seo.description || DEFAULT_DESCRIPTION;
    const robots = seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

    document.documentElement.lang = "en";
    document.title = fullTitle;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: seo.keywords?.join(", ") ?? "",
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: robots,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: seo.type ?? "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: fullTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    const ogImage = seo.ogImage ?? DEFAULT_OG_IMAGE;
    const ogImageAlt = seo.ogImageAlt ?? "WebAdish — WordPress security and protection services";
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: ogImage,
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: "1280",
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: "720",
    });
    upsertMeta('meta[property="og:image:type"]', {
      property: "og:image:type",
      content: "image/jpeg",
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: ogImageAlt,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: fullTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: ogImage,
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const schemaNodes = [
      ...(seo.breadcrumbs ? [buildBreadcrumbSchema(seo.breadcrumbs)] : []),
      ...(seo.schema ?? []),
    ];

    document.head
      .querySelectorAll('script[data-seo-schema="true"]')
      .forEach((node) => node.remove());

    schemaNodes.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seoSchema = "true";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, [location]);

  return null;
}
