import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';

export const POST: RequestHandler = async ({ fetch }) => {
  await fetch(`${PUBLIC_API_URL}/auth/logout`, { method: 'POST' });

  redirect(303, '/auth');
};
