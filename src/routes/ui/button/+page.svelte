<script lang="ts">
  import { Button } from '$lib/components/ui/button';
</script>

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
