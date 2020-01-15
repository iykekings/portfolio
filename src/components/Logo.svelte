<script>
  import { Link } from "svelte-routing";
  import Icon from "./Icon.svelte";
  export let fs = "1.3rem",
    fw = 600,
    iw = "2rem";
</script>

<style lang="scss">
  div {
    display: contents;
    font-size: 1.3rem;
    font-weight: 600;
    :global(a) {
      display: flex;
      align-items: center;
      color: #2a2a2a;
    }
  }
</style>

<div style="font-size: {fs}; font-weight: {fw}">
  <Link to="/">
    <Icon icon="logo" width={iw} />
    Ikeze.dev
  </Link>
</div>
