<script lang="ts">
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

<button {onclick} class="rounded-sm bg-primary-500 p-2">login with google </button>
<button onclick={check_auth} class="mt-2">auth request</button>
