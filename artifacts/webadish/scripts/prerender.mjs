import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const templatePath = path.join(distDir, "index.html");
const serverEntryPath = path.join(projectRoot, ".ssr", "entry-server.js");

const template = await readFile(templatePath, "utf8");
const { PRERENDER_ROUTES, render, renderHead, renderTitle } = await import(
  pathToFileURL(serverEntryPath).href
);

for (const route of PRERENDER_ROUTES) {
  const appHtml = render(route);
  const headHtml = renderHead(route);
  const title = renderTitle(route);
  const html = template
    .replace("<!--app-title-->", title)
    .replace("<!--app-head-->", headHtml)
    .replace("<!--app-html-->", appHtml);

  const outputDir =
    route === "/" ? distDir : path.join(distDir, route.replace(/^\//, ""));

  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html, "utf8");
}
