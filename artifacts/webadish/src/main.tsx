import { createRoot, hydrateRoot } from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

function hasRenderableServerMarkup(element: HTMLElement) {
  return Array.from(element.childNodes).some((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      return true;
    }

    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent?.trim().length;
    }

    return false;
  });
}

if (hasRenderableServerMarkup(rootElement)) {
  hydrateRoot(rootElement, (
    <>
      <App />
      <SpeedInsights />
    </>
  ));
} else {
  createRoot(rootElement).render(
    <>
      <App />
      <SpeedInsights />
    </>,
  );
}
