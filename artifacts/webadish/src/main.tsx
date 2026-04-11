import { createRoot, hydrateRoot } from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root was not found.");
}

if (rootElement.hasChildNodes()) {
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
