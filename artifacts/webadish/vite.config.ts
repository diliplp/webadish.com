import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
const port = Number(process.env.PORT ?? "3000");

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${process.env.PORT}"`);
}

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/") ||
              id.includes("/scheduler/") ||
              id.includes("/framer-motion/") ||
              id.includes("/recharts/") ||
              id.includes("/victory-vendor/") ||
              id.includes("/@tanstack/") ||
              id.includes("/vaul/") ||
              id.includes("/cmdk/") ||
              id.includes("/sonner/") ||
              id.includes("/next-themes/") ||
              id.includes("/embla-carousel") ||
              id.includes("/react-day-picker/") ||
              id.includes("/react-hook-form/") ||
              id.includes("/react-resizable-panels/") ||
              id.includes("/react-icons/") ||
              id.includes("/input-otp/")
            ) {
              return "react-core";
            }
            if (id.includes("/lucide-react/")) {
              return "icons";
            }
            if (id.includes("/@radix-ui/")) {
              return "radix";
            }
            if (id.includes("/wouter/")) {
              return "router";
            }
            return "vendor";
          }
        },
      },
    },
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
