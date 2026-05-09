import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import svgSprite from '$lib/assets/sprite.svg?raw';
import type { Handle, HandleFetch } from '@sveltejs/kit';
import { INTERNAL_API_URL } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';

const handleSvgSprite: Handle = async ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%vite.plugin.svelte%', svgSprite ?? '')
  });
};

const handleAuthState: Handle = async ({ event, resolve }) => {
  const cookies = event.request.headers.get('cookie');

  if (cookies) {
    try {
      const res = await event.fetch(`${INTERNAL_API_URL}/auth/user`, {
        headers: { cookie: cookies }
      });

      if (res.ok) {
        const body = await res.json();
        event.locals.user = body.data;
      }
    } catch {
      event.locals.user = undefined;
    }
  }

  const { pathname } = event.url;
  const isAuthRoute = pathname.startsWith('/auth');
  const isPublicRoute = isAuthRoute || pathname.startsWith('/ui');

  if (!isPublicRoute && !event.locals.user) {
    redirect(303, '/auth');
  }

  if (isAuthRoute && event.locals.user) {
    redirect(303, '/');
  }

  return resolve(event);
};

export const handle: Handle = sequence(handleSvgSprite, handleAuthState);

export const handleFetch: HandleFetch = async ({ request, fetch, event }) => {
  if (request.url.startsWith(PUBLIC_API_URL)) {
    const newRequest = new Request(request.url.replace(PUBLIC_API_URL, INTERNAL_API_URL), request);

    const cookies = event.request.headers.get('cookie');
    if (cookies) newRequest.headers.set('cookie', cookies);

    return fetch(newRequest);
  }

  return fetch(request);
};
