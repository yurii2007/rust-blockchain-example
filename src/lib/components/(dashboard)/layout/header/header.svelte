<script lang="ts" module>
  import { cn } from '$lib/utils';
  import { DashboardIcon } from '../../icon';

  export type HeaderProps = {
    class?: string;
  };
</script>

<script lang="ts">
  import { Input } from '$lib/components/ui/input';

  let { class: className }: HeaderProps = $props();
</script>

<header class={cn('flex items-center gap-6 px-8 py-2.5', className)}>
  <h2>Page title</h2>
  <Input class="ml-auto max-w-70" placeholder="Search..." />
  <button
    aria-label="See all notifications"
    class="p-0.5 text-muted-foreground transition-colors hover:text-primary"
  >
    <DashboardIcon icon="notification" class="size-4" width={16} height={16} />
  </button>
</header>
