import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekitSprite } from 'sveltekit-sprite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // https://github.com/sveltejs/kit/issues/13863
    devtoolsJson(),
    tailwindcss(),
    sveltekit(),
    sveltekitSprite({
      svgSource: 'src/lib/assets/svg',
      outputFile: 'src/lib/assets/sprite.svg'
    })
  ],
  server: { port: 3000 },
  ssr: {
    noExternal: ['bits-ui']
  }
});
