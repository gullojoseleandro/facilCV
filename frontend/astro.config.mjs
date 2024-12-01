import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import * as dotenv from 'dotenv';

// Carga manual de variables .env dependiendo del entorno
dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env' });

console.log("VITE_API_URL cargado manualmente:", process.env.VITE_API_URL);

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  buildOptions: {
    site: import.meta.env.VITE_FRONTEND_URL || 'http://localhost:3000', 
  },
  vite: {
    define: {
      'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL), 
      'import.meta.env.VITE_FRONTEND_URL': JSON.stringify(process.env.VITE_FRONTEND_URL), 
    },
  },
  output: 'static', 
});
