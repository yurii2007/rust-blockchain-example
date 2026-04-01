import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { sveltekitSprite } from 'sveltekit-sprite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit(),
    sveltekitSprite({
      svgSource: 'src/lib/assets/svg',
      outputFile: 'src/lib/assets/sprite.svg'
    })
  ],
  server: { port: 3000 }
});
