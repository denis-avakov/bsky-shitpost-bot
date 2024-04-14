// Read about how to use Astro configuration
// https://astro.build/config

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import tailwind from '@astrojs/tailwind';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), tailwind()],
  output: 'hybrid',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [mkcert()],
    server: {
      https: true
    }
  }
});
