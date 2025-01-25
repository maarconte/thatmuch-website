import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://the-kubrick-astro.vercel.app/",
  integrations: [tailwind(), sitemap(), mdx({
    syntaxHighlight: "shiki"
  }), react()],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    }
  },
  image: {
    service: passthroughImageService()
  }
});