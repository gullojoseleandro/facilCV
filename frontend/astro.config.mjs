import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  vite: {
    build: {
      outDir: 'dist', // Esto asegura que se genere una carpeta dist adecuada para el despliegue
    },
  },

  output: 'static', // Usar output estático si solo quieres archivos estáticos para el frontend.
});
