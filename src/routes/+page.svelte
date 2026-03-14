<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  async function onclick() {
    const res = await fetch('http://localhost:8080/auth/google/login', {
      method: 'GET',
      credentials: 'include'
    });

    const parsed = await res.json();

    console.log('res', parsed);

    window.location = parsed.redirect_url;
  }

  async function check_auth() {
    await fetch('http://localhost:8080/api', {
      method: 'GET',
      headers: {},
      credentials: 'include'
    });
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button {onclick} class="bg-primary-500 rounded-sm p-2">login with google </button>
<button onclick={check_auth} class="mt-2">auth request</button>

<div class="flex flex-wrap items-center justify-start gap-4">
  <Button variant="default" onclick={console.log}>primary default</Button>
  <Button variant="secondary" onclick={console.log}>secondary default</Button>
  <Button variant="destructive" onclick={console.log}>destructive default</Button>
  <Button variant="outline" onclick={console.log}>outline default</Button>
  <Button variant="link" onclick={console.log}>link default</Button>
  <Button variant="ghost" onclick={console.log}>ghost default</Button>
</div>
