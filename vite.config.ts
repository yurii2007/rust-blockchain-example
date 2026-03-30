import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { sveltekitSprite } from 'sveltekit-sprite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), sveltekitSprite({})],
  server: { port: 3000 }
});
