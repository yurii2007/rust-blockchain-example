<script lang="ts">
  import { Button } from '$lib/components/ui/button';
</script>

<div class="flex h-screen w-screen flex-col items-center justify-center gap-10">
  <section>
    <span>logo</span>
    <h1 class="typography-h2 text-center">NeoSpend</h1>
    <p class="typography-body1 mt-2 text-center text-muted-foreground">
      Next-gen expense management
    </p>
    <form
      class="mt-10 max-w-98 rounded-2xl border border-primary/10 bg-background/80 p-8 backdrop-blur-md"
    >
      <p class="typography-h4 text-left">Welcome back</p>
      <p class="typography-subtitle">Please choose a service to continue</p>

      <ul class="mt-8 flex w-full flex-col gap-4">
        <li class="w-full">
          <Button variant="outline" class="w-full">google</Button>
        </li>
        <li class="w-full">
          <Button variant="outline" class="w-full">github</Button>
        </li>
      </ul>

      <div class="mt-8 flex w-full items-center gap-2">
        <span class="h-px w-full bg-background"></span>
        <span class="typography-subtitle whitespace-nowrap uppercase">Secure Access</span>
        <span class="h-px w-full bg-background"></span>
      </div>

      <p class="typography-subtitle mt-8 text-center">
        By accessing NeoSpend, you agree to our <a href="/" class="text-primary">Terms</a> and
        <a href="/" class="text-primary">Privacy Policy</a>.
      </p>
    </form>
  </section>

  <footer class="mx-auto mt-10">
    <ul class="flex flex-row items-center justify-center">
      <li class="typography-subtitle border-r border-r-accent px-6 last:border-r-transparent">
        <a href="/">Support</a>
      </li>
      <li class="typography-subtitle border-r border-r-accent px-6 last:border-r-transparent">
        <a href="/">System Status</a>
      </li>
    </ul>
  </footer>
</div>
