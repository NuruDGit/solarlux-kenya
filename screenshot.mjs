import puppeteer from "puppeteer";
import { mkdirSync, readdirSync } from "fs";
import { join } from "path";

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3] || "";
const width = parseInt(process.argv[4]) || 1440;
const dir = join(process.cwd(), "temporary screenshots");

mkdirSync(dir, { recursive: true });

const existing = readdirSync(dir).filter((f) => f.startsWith("screenshot-"));
const nextNum = existing.length
  ? Math.max(...existing.map((f) => parseInt(f.split("-")[1]) || 0)) + 1
  : 1;

const filename = label
  ? `screenshot-${nextNum}-${label}.png`
  : `screenshot-${nextNum}.png`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
page.on("console", (msg) => {
  if (msg.type() === "error") console.error("PAGE ERROR:", msg.text());
});
await page.setViewport({ width, height: 900, deviceScaleFactor: 2 });
// Disable animations so whileInView content renders immediately
await page.emulateMediaFeatures([
  { name: "prefers-reduced-motion", value: "reduce" },
]);
await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
await new Promise((r) => setTimeout(r, 1000));
// Force all Framer Motion animated elements to their visible end-state for screenshots
await page.addStyleTag({
  content: `
    [style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; }
    [style*="translateY"] { transform: none !important; }
  `,
});
await new Promise((r) => setTimeout(r, 500));
await page.screenshot({
  path: join(dir, filename),
  fullPage: true,
});
console.log(`✅ Saved: ${filename} (${width}px)`);
await browser.close();
