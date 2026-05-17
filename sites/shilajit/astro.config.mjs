import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://shilajitsverige.se',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always' },
});
