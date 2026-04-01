<script lang="ts" module>
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import { DashboardIcon } from '../../icon';

  export type NavbarProps = {
    class?: string;
    children?: Snippet;
  };
</script>

<script lang="ts">
  let { class: className, children }: NavbarProps = $props();
</script>

<aside class={cn('flex-1', className)}>
  <nav>
    <ul class="flex flex-col items-start justify-start gap-1">
      <li class="text-white">
        <DashboardIcon icon="layout-box" />dashboard
      </li>
      <li><DashboardIcon icon="wallet" />balances</li>
      <li>transactions</li>
      <li>reports</li>
      <li>settings</li>
    </ul>
  </nav>

  {@render children?.()}
</aside>
