<script lang="ts" module>
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  import { DashboardIcon, type DashboardIconName } from '../../icon';
  import { resolve } from '$app/paths';
  import type { Pathname } from '$app/types';
  import { page } from '$app/state';

  export type NavbarProps = {
    class?: string;
    children?: Snippet;
  };
</script>

<script lang="ts">
  let { class: className, children }: NavbarProps = $props();

  const links: { icon: DashboardIconName; label: string; href: Pathname }[] = [
    { href: '/', icon: 'layout-box', label: 'Dashboard' },
    { href: '/balance', icon: 'wallet', label: 'Balances' },
    { href: '/transaction', icon: 'transaction-list', label: 'Transactions' },
    { href: '/report', icon: 'chart-square', label: 'Reports' },
    { href: '/settings', icon: 'settings', label: 'Settings' }
  ];
</script>

<aside class={cn('flex-1', className)}>
  <nav>
    <ul class="flex flex-col items-start justify-start gap-1">
      {#each links as link (link.href)}
        <li class="w-full">
          <a
            href={resolve(link.href)}
            class={cn(
              'flex w-full items-center gap-4 border-l-4 border-l-transparent px-6 py-2 text-muted-foreground transition-colors hover:border-l-primary hover:text-primary',
              page.url.pathname === link.href && 'border-l-primary text-primary'
            )}
          >
            <DashboardIcon icon={link.icon} width={18} height={18} class="size-4.5 " />
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  {@render children?.()}

  <form method="POST" action="/logout" class="px-6 pb-4">
    <button
      type="submit"
      class="w-full rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
    >
      Log out
    </button>
  </form>
</aside>
