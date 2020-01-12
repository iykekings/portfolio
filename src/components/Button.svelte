<script>
  export let value;
  export let color;
  export let bg;
</script>

<style>
  button {
    border-radius: 5px;
    padding: 0.5rem 2rem;
    margin: 0 1rem;
  }
</style>

<button type="button" style="background-color: {bg}; color: {color}" on:click>
  <slot>{value}</slot>
</button>
