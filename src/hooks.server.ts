import { sequence } from '@sveltejs/kit/hooks';
import svgSprite from '$lib/assets/sprite.svg?raw';
import type { Handle } from '@sveltejs/kit';

const handleSvgSprite: Handle = async ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%vite.plugin.svelte%', svgSprite ?? '')
  });
};

export const handle: Handle = sequence(handleSvgSprite);
