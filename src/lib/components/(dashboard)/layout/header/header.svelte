<script lang="ts" module>
  import { cn } from '$lib/utils';

  export type HeaderProps = {
    class?: string;
  };
</script>

<script lang="ts">
  let { class: className }: HeaderProps = $props();
</script>

<header class={cn('', className)}>
  <h2>Page title</h2>
</header>
