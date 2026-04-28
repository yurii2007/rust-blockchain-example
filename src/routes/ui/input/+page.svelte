<script lang="ts">
  import { Input } from '$lib/components/ui/input';
</script>

<section class="max-w-sm space-y-4">
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
</section>
