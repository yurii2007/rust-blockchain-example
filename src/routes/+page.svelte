<script lang="ts">
  async function onclick() {
    const res = await fetch('http://localhost:8080/auth/google/login', {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080'
      }
    });

    console.log('res', res);
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button {onclick}> login with google </button>
