<script>
  import collections from "../assets/icons.js";
  export let icon;
  export let width;
  // export let fill;
</script>

<style>
  div {
    display: inline-flex;
    width: 1.3rem;
    margin-right: 0.3rem;
  }
</style>

<div style="width: {width}">
  {@html collections[icon]}
</div>
