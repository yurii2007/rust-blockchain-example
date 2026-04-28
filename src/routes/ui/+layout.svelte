<script lang="ts">
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { Tabs, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
  import type { Pathname } from '$app/types';

  let { children } = $props();

  const tabs: { value: string; label: string; href: Pathname }[] = [
    { value: 'button', label: 'Button', href: '/ui/button' },
    { value: 'input', label: 'Input', href: '/ui/input' },
    { value: 'typography', label: 'Typography', href: '/ui/typography' },
    { value: 'palette', label: 'Palette', href: '/ui/palette' }
  ];

  let activeTab = $derived(page.url.pathname.split('/').pop() || 'button');
</script>

<div class="mx-auto max-w-4xl p-8">
  <h1 class="typography-h2 mb-8">Design System</h1>

  <Tabs
    value={activeTab}
    onValueChange={(v) => {
      const tab = tabs.find((t) => t.value === v);
      if (tab) goto(resolve(tab.href));
    }}
  >
    <TabsList>
      {#each tabs as tab (tab.value)}
        <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
      {/each}
    </TabsList>

    {@render children()}
  </Tabs>
</div>
