<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

  const palette = [
    { name: 'Background', var: '--background', fg: '--foreground' },
    { name: 'Foreground', var: '--foreground', fg: '--background' },
    { name: 'Primary', var: '--primary', fg: '--primary-foreground' },
    { name: 'Secondary', var: '--secondary', fg: '--secondary-foreground' },
    { name: 'Accent', var: '--accent', fg: '--accent-foreground' },
    { name: 'Destructive', var: '--destructive', fg: '--destructive-foreground' },
    { name: 'Muted', var: '--muted', fg: '--muted-foreground' },
    { name: 'Success', var: '--success', fg: '--success-foreground' },
    { name: 'Warning', var: '--warning', fg: '--warning-foreground' },
    { name: 'Info', var: '--info', fg: '--info-foreground' },
    { name: 'Card', var: '--card', fg: '--card-foreground' },
    { name: 'Popover', var: '--popover', fg: '--popover-foreground' },
    { name: 'Border', var: '--border', fg: '--foreground' },
    { name: 'Input', var: '--input', fg: '--foreground' },
    { name: 'Ring', var: '--ring', fg: '--background' }
  ];
</script>

<div class="mx-auto max-w-4xl p-8">
  <h1 class="typography-h2 mb-8">Design System</h1>

  <Tabs value="button">
    <TabsList>
      <TabsTrigger value="button">Button</TabsTrigger>
      <TabsTrigger value="input">Input</TabsTrigger>
      <TabsTrigger value="typography">Typography</TabsTrigger>
      <TabsTrigger value="palette">Palette</TabsTrigger>
    </TabsList>

    <TabsContent value="button">
      <section class="space-y-6">
        <div>
          <h3 class="typography-h4 mb-3">Variants</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        <div>
          <h3 class="typography-h4 mb-3">Sizes</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div>
          <h3 class="typography-h4 mb-3">States</h3>
          <div class="flex flex-wrap items-center gap-4">
            <Button>Enabled</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </section>
    </TabsContent>

    <TabsContent value="input">
      <section class="space-y-6">
        <div class="max-w-sm space-y-4">
          <div>
            <span class="typography-subtitle mb-1 block uppercase">Default</span>
            <Input placeholder="Enter text..." />
          </div>
          <div>
            <span class="typography-subtitle mb-1 block uppercase">Disabled</span>
            <Input placeholder="Disabled input" disabled />
          </div>
          <div>
            <span class="typography-subtitle mb-1 block uppercase">With value</span>
            <Input value="Some value" />
          </div>
          <div>
            <span class="typography-subtitle mb-1 block uppercase">Password</span>
            <Input type="password" placeholder="Password" />
          </div>
          <div>
            <span class="typography-subtitle mb-1 block uppercase">File</span>
            <Input type="file" />
          </div>
        </div>
      </section>
    </TabsContent>

    <TabsContent value="typography">
      <section class="space-y-6">
        <div class="space-y-4">
          <div>
            <span class="typography-subtitle uppercase">H1</span>
            <p class="typography-h1">Heading One</p>
          </div>
          <div>
            <span class="typography-subtitle uppercase">H2</span>
            <p class="typography-h2">Heading Two</p>
          </div>
          <div>
            <span class="typography-subtitle uppercase">H3</span>
            <p class="typography-h3">Heading Three</p>
          </div>
          <div>
            <span class="typography-subtitle uppercase">H4</span>
            <p class="typography-h4">Heading Four</p>
          </div>
          <div>
            <span class="typography-subtitle uppercase">Subtitle</span>
            <p class="typography-subtitle">Subtitle text style</p>
          </div>
          <div>
            <span class="typography-subtitle uppercase">Body 1</span>
            <p class="typography-body1">
              Body one text — medium weight, slightly larger for emphasis.
            </p>
          </div>
          <div>
            <span class="typography-subtitle uppercase">Body 2</span>
            <p class="typography-body2">Body two text — regular weight, standard reading size.</p>
          </div>
          <div>
            <span class="typography-subtitle uppercase">Button</span>
            <p class="typography-button">Button text style</p>
          </div>
        </div>
      </section>
    </TabsContent>

    <TabsContent value="palette">
      <section>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {#each palette as color (color.name)}
            <div class="flex flex-col overflow-hidden rounded-lg border border-border">
              <div class="h-16" style="background-color: var({color.var});"></div>
              <div class="px-3 py-2">
                <p class="text-sm font-medium">{color.name}</p>
                <p class="font-mono text-xs text-muted-foreground">{color.var}</p>
              </div>
            </div>
          {/each}
        </div>
      </section>
    </TabsContent>
  </Tabs>
</div>
