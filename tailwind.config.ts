import type { Config } from "tailwindcss";

/**
 * Solarlux Kenya — Tailwind Configuration
 *
 * In Tailwind v4, most theme configuration lives in globals.css via @theme.
 * This file handles darkMode, content scanning, and any remaining extensions.
 */

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
};

export default config;
