import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Live preview URL. Switch to 'https://fedari.ae' once the real domain is connected.
//
// `base` is only needed while the preview is served from a GitHub project page
// (shasuani.github.io/fedari-web/). When the real domain is connected, delete the
// `base` line — internal links go through withBase() in src/lib/url.ts, which
// collapses to a no-op as soon as BASE_URL is '/'.
export default defineConfig({
  site: 'https://shasuani.github.io',
  base: '/fedari-web',
  integrations: [tailwind(), sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
