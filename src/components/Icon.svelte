<script>
  import collections from "../assets/icons.js";
  export let icon;
  export let width;
  export let cls = "icon";

  // export let fill;
</script>

<style>
  div {
    display: inline-block;
    width: 1.3rem;
    margin-right: 0.3rem;
  }
</style>

<div style="width: {width}" class={cls} on:click>
  {@html collections[icon]}
</div>
