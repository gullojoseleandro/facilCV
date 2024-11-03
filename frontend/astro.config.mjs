import MillionLint from '@million/lint';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import MillionCompiler from '@million/lint';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: 
  [
    react(), 
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  vite: {
    plugins: [
      MillionCompiler.vite({
        mode: "react",
        server: true,
        root: "./src",
      }),
      MillionLint.vite({
        enabled: true,
      })
    ],
  },

  output: 'server',
  adapter: netlify(),
  },
)