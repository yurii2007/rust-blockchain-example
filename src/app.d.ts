// https://svelte.dev/docs/kit/types#app.d.ts
import type { User } from '$lib/types/user';

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user?: User;
    }
    interface PageData {
      user: User | null;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
