// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Aquí le decimos a Vite que use el plugin de Tailwind v4
  vite: {
    plugins: [tailwindcss()],
  },
  
  // 2. Mantenemos la configuración para GitHub Pages
  output: 'static',
  site: 'https://MontiMaria.github.io',
  base: '/LandingAstro',
  outDir: 'docs',
});