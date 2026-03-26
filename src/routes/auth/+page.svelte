<script lang="ts">
  import { Button } from '$lib/components/ui/button';
</script>

<main
  class="mt-auto flex h-screen w-screen flex-col items-center justify-center gap-12 bg-background"
>
  <section class="flex flex-col">
    <span class="typography-h4 mx-auto inline-block text-primary">payments</span>
    <h1 class="typography-h2 mt-6 text-center">NeoSpend</h1>
    <p class="typography-body1 mt-2 text-center text-muted-foreground">
      Next-gen expense management
    </p>
    <form class="mt-12 max-w-100">
      <p class="typography-h4 text-center">Welcome back</p>
      <p class="typography-subtitle mt-1 text-center text-foreground">
        Select a provider to continue
      </p>

      <ul class="mt-8 flex w-full flex-col gap-3">
        <li class="w-full">
          <Button variant="outline" class="w-full">google</Button>
        </li>
        <li class="w-full">
          <Button variant="outline" class="w-full">github</Button>
        </li>
      </ul>

      <p
        class="typography-subtitle2 mt-8 w-full border-t pt-8 text-center whitespace-nowrap uppercase"
      >
        Secure Access Provided by NeoSpend
      </p>

      <p class="typography-subtitle2 mt-8 text-center text-foreground">
        By signing in, you agree to our <a href="/" class="text-muted-foreground">Terms</a> and
        <a href="/" class="text-muted-foreground">Privacy Policy</a>.
      </p>
    </form>
  </section>

  <footer class="w-full border-t">
    <ul class="mx-auto mt-8 flex justify-center gap-8">
      <li class="typography-subtitle2">Support</li>
      <li class="typography-subtitle2">System Status</li>
    </ul>
  </footer>
</main>
