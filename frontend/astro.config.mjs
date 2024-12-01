import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import * as dotenv from 'dotenv';

// Carga manual de variables .env dependiendo del entorno
dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env' });

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    define: {
      'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
    },
  },
  output: 'static',
});