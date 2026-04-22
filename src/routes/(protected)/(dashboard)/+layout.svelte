<script lang="ts">
  import { Header } from '$lib/components/(dashboard)/layout/header';
  import { Navbar } from '$lib/components/(dashboard)/layout/navbar';

  let { children } = $props();
</script>

<svelte:head>
  <title>Neo Ledger</title>
</svelte:head>

<div class="grid grid-cols-[256px_1fr] grid-rows-[auto_1fr]">
  <Navbar class="row-span-2" />
  <Header />
  {@render children()}
</div>
