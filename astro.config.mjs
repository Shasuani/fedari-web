import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Live preview URL. Switch to 'https://fedari.ae' once the real domain is connected.
export default defineConfig({
  site: 'https://shasuani.github.io',
  integrations: [tailwind(), sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
