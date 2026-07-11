import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aaronprice.org',
  redirects: {
    '/products/switchboard': '/products'
  }
});
