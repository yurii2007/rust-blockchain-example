import { PUBLIC_API_URL } from '$env/static/public';
import type { RequestEvent } from '@sveltejs/kit';

export async function api<T>(
  path: string,
  event: RequestEvent,
  options?: RequestInit
): Promise<{ data: T | null; status: number }> {
  const res = await event.fetch(`${PUBLIC_API_URL}${path}`, options);

  if (!res.ok) return { data: null, status: res.status };

  const body = await res.json();
  return { data: body.data as T, status: res.status };
}
