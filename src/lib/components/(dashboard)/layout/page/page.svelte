<script lang="ts" module>
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  export type PageProps = {
    class?: string;
    children: Snippet;
  };
</script>

<script lang="ts">
  let { class: className, children }: PageProps = $props();
</script>

<main class={cn('bg-background', className)}>
  {@render children()}
</main>
