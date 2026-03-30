<script lang="ts">
  import { resolve } from '$app/paths';
  import { AuthIcon } from '$lib/components/(auth)/icon';
  import { Button } from '$lib/components/ui/button';

  const anchor = resolve('/');
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
      <p class="typography-h3 text-center">Welcome back</p>
      <p class="typography-subtitle mt-1 text-center text-foreground">
        Select a provider to continue
      </p>

      <ul class="mt-8 flex w-full flex-col gap-3">
        <li class="w-full">
          <Button variant="outline" class="w-full">
            <AuthIcon icon="google-color" />
            google</Button
          >
        </li>
        <li class="w-full">
          <Button variant="outline" class="w-full text-muted-foreground">
            <AuthIcon icon="github-outlined" />
            github</Button
          >
        </li>
      </ul>

      <p
        class="typography-subtitle mt-8 w-full border-t pt-8 text-center whitespace-nowrap uppercase"
      >
        Secure Access Provided by NeoSpend
      </p>

      <p class="typography-subtitle mt-8 text-center text-foreground">
        By signing in, you agree to our <a href={anchor} class="text-muted-foreground">Terms</a> and
        <a href={anchor} class="text-muted-foreground">Privacy Policy</a>.
      </p>
    </form>
  </section>

  <footer class="w-full border-t">
    <ul class="mx-auto mt-8 flex justify-center gap-8">
      <li class="typography-subtitle">Support</li>
      <li class="typography-subtitle">System Status</li>
    </ul>
  </footer>
</main>
