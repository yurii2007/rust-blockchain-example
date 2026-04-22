import { sequence } from '@sveltejs/kit/hooks';
import svgSprite from '$lib/assets/sprite.svg?raw';
import type { Handle } from '@sveltejs/kit';

const handleSvgSprite: Handle = async ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%vite.plugin.svelte%', svgSprite ?? '')
  });
};

const handleAuthState: Handle = async ({ event, resolve }) => {
  console.log('handle auth state: ', event.url);

  if (!event.locals.user) {
    console.log('checking if the route is under (auth): ');
  } else {
    console.log('checking if the route is under (protected): ');
  }

  return resolve(event);
};

export const handle: Handle = sequence(handleSvgSprite, handleAuthState);
