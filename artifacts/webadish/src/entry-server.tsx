import { renderToString } from "react-dom/server";
import App from "./App";
import { PRERENDER_ROUTES, getFullTitle, renderSeoHead } from "./lib/seo";

export function render(url: string) {
  return renderToString(<App ssrPath={url} />);
}

export function renderHead(url: string) {
  return renderSeoHead(url);
}

export function renderTitle(url: string) {
  return getFullTitle(url);
}

export { PRERENDER_ROUTES };
