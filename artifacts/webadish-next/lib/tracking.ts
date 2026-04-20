declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackingParams = Record<string, string | number | boolean | null | undefined>;

function cleanParams(params: TrackingParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ''),
  );
}

export function trackEvent(name: string, params: TrackingParams = {}) {
  if (typeof window === 'undefined') return;

  const payload = cleanParams(params);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...payload });

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, payload);
  }
}
