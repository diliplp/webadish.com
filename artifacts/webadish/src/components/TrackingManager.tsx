import { useEffect } from "react";
import { useLocation } from "wouter";
import { trackEvent, trackPageView } from "@/lib/tracking";

function getClickTarget(target: HTMLElement | null) {
  return target?.closest<HTMLElement>("a,button");
}

function getLabel(element: HTMLElement) {
  return (
    element.getAttribute("data-track-label") ||
    element.getAttribute("aria-label") ||
    element.textContent?.replace(/\s+/g, " ").trim() ||
    "unknown"
  ).slice(0, 120);
}

export default function TrackingManager() {
  const [location] = useLocation();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const element = getClickTarget(event.target as HTMLElement | null);
      if (!element) return;

      const href = element instanceof HTMLAnchorElement ? element.href : "";
      const label = getLabel(element);
      const pagePath = window.location.pathname;

      if (href.includes("wa.me")) {
        trackEvent("whatsapp_click", { label, href, page_path: pagePath });
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { label, href, page_path: pagePath });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { label, href, page_path: pagePath });
        return;
      }

      if (
        href.includes("/contact") ||
        element.getAttribute("data-track") === "cta" ||
        /request|get protected|assessment|review|quote|call/i.test(label)
      ) {
        trackEvent("cta_click", { label, href, page_path: pagePath });
      }
    };

    const scheduleTrackingStart = () => {
      trackPageView(location, document.title);
      document.addEventListener("click", onClick);
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(scheduleTrackingStart, { timeout: 2000 });

      return () => {
        window.cancelIdleCallback(idleId);
        document.removeEventListener("click", onClick);
      };
    }

    const timeoutId = window.setTimeout(scheduleTrackingStart, 1200);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("click", onClick);
    };
  }, [location]);

  return null;
}
