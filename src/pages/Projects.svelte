<script>
  import { onMount } from "svelte";
  onMount(async () => {
    const f = await fetch(`${window.location.origin}/api/mail`);
    const r = await f.json();
    console.log(r);
  });
</script>

<main>
  <h1>Projects</h1>
</main>
