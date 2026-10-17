// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://davidromer.github.io",
  trailingSlash: "always",
  integrations: [preact(), sitemap()],
});
