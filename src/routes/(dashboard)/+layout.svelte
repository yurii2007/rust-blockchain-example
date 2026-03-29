<script lang="ts">
  import { Header } from '$lib/components/(dashboard)/layout/header';
  import { Navbar } from '$lib/components/(dashboard)/layout/navbar';

  let { children } = $props();
</script>

<svelte:head>
  <title>Neo Ledger</title>
</svelte:head>

<div>
  <Header />
  <Navbar />
  {@render children()}
</div>
