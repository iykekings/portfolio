<script>
  import { onMount } from "svelte";
  onMount(async () => {
    const f = await fetch(`${window.location.origin}/api/mail`);
    const r = await f.json();
    console.log(r);
  });
</script>

<style>
  h1 {
    text-align: center;
    font-weight: 400;
  }
</style>

<h1>Recent Projects</h1>
