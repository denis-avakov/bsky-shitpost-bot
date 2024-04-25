// Read about how to use Astro configuration
// https://astro.build/config

import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), tailwind()],
  output: 'server',
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
