<script lang="ts">
  import { PUBLIC_API_URL } from '$env/static/public';
  import { Button } from '$lib/components/ui/button';

  async function check_auth() {
    await fetch(`${PUBLIC_API_URL}/api/status`, {
      method: 'GET',
      headers: {},
      credentials: 'include'
    });
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={check_auth} class="mt-2">auth request</button>

<div class="flex flex-wrap items-center justify-start gap-4">
  <Button variant="default" onclick={console.log}>primary default</Button>
  <Button variant="secondary" onclick={console.log}>secondary default</Button>
  <Button variant="destructive" onclick={console.log}>destructive default</Button>
  <Button variant="outline" onclick={console.log}>outline default</Button>
  <Button variant="link" onclick={console.log}>link default</Button>
  <Button variant="ghost" onclick={console.log}>ghost default</Button>
</div>
