<script lang="ts">
  const palette = [
    {
      group: 'Core',
      colors: [
        { name: 'Background', var: '--background', fg: '--foreground' },
        { name: 'Foreground', var: '--foreground', fg: '--background' },
        { name: 'Primary', var: '--primary', fg: '--primary-foreground' },
        { name: 'Secondary', var: '--secondary', fg: '--secondary-foreground' },
        { name: 'Accent', var: '--accent', fg: '--accent-foreground' },
        { name: 'Muted', var: '--muted', fg: '--muted-foreground' }
      ]
    },
    {
      group: 'Semantic',
      colors: [
        { name: 'Destructive', var: '--destructive', fg: '--destructive-foreground' },
        { name: 'Success', var: '--success', fg: '--success-foreground' },
        { name: 'Warning', var: '--warning', fg: '--warning-foreground' },
        { name: 'Info', var: '--info', fg: '--info-foreground' }
      ]
    },
    {
      group: 'Surfaces',
      colors: [
        { name: 'Card', var: '--card', fg: '--card-foreground' },
        { name: 'Popover', var: '--popover', fg: '--popover-foreground' },
        { name: 'Border', var: '--border', fg: '--foreground' },
        { name: 'Input', var: '--input', fg: '--foreground' },
        { name: 'Ring', var: '--ring', fg: '--background' }
      ]
    },
    {
      group: 'Chart',
      colors: [
        { name: 'Chart 1', var: '--chart-1', fg: '--background' },
        { name: 'Chart 2', var: '--chart-2', fg: '--background' },
        { name: 'Chart 3', var: '--chart-3', fg: '--background' },
        { name: 'Chart 4', var: '--chart-4', fg: '--background' },
        { name: 'Chart 5', var: '--chart-5', fg: '--background' }
      ]
    },
    {
      group: 'Sidebar',
      colors: [
        { name: 'Sidebar', var: '--sidebar', fg: '--sidebar-foreground' },
        { name: 'Sidebar Primary', var: '--sidebar-primary', fg: '--sidebar-primary-foreground' },
        { name: 'Sidebar Accent', var: '--sidebar-accent', fg: '--sidebar-accent-foreground' },
        { name: 'Sidebar Border', var: '--sidebar-border', fg: '--sidebar-foreground' },
        { name: 'Sidebar Ring', var: '--sidebar-ring', fg: '--sidebar-foreground' }
      ]
    }
  ];
</script>

<section class="space-y-8">
  {#each palette as group (group.group)}
    <div>
      <h3 class="typography-h4 mb-3">{group.group}</h3>
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {#each group.colors as color (color.name)}
          <div class="flex flex-col overflow-hidden rounded-lg border border-border">
            <div
              class="flex h-16 items-center justify-center"
              style="background-color: var({color.var}); color: var({color.fg});"
            >
              <span class="text-sm font-medium">Aa</span>
            </div>
            <div class="px-3 py-2">
              <p class="text-sm font-medium">{color.name}</p>
              <p class="font-mono text-xs text-muted-foreground">{color.var}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>
