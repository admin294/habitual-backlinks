import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ashwagandhagummies.se',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'always',
  },
});
