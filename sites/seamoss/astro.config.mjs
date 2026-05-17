import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://seamossgummies.se',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'always' },
});
