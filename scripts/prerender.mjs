// Renders the app to static HTML after the build, so the page shows content
// before JavaScript has downloaded. The client then hydrates this markup.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "dist", "index.html");
const serverEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render } = await import(pathToFileURL(serverEntry).href);
const html = fs.readFileSync(htmlPath, "utf8");
if (!html.includes("<!--app-->")) throw new Error("Missing <!--app--> placeholder in dist/index.html");

fs.writeFileSync(htmlPath, html.replace("<!--app-->", render()));
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log("Pre-rendered dist/index.html");
