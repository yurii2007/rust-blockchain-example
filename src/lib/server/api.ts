import { INTERNAL_API_URL } from '$env/static/private';

type FetchFn = typeof globalThis.fetch;

export async function api<T>(
  path: string,
  fetchFn: FetchFn,
  options?: RequestInit
): Promise<{ data: T | null; status: number }> {
  const res = await fetchFn(`${INTERNAL_API_URL}${path}`, options);

  if (!res.ok) return { data: null, status: res.status };

  const body = await res.json();
  return { data: body.data as T, status: res.status };
}
