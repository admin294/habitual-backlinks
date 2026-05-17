import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://kreatingummies.se',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always' },
});
