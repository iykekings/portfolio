<script>
  import { Link } from "svelte-routing";
  import Icon from "./Icon.svelte";
  import { fly, fade } from "svelte/transition";

  let navs = ["Projects", "Contact", "Blog", "Uses"];
  export let inactive;
  export let toggleNav;
</script>

<style lang="scss">
  nav {
    display: flex;
    align-items: baseline;
    padding: 1rem 0;
    :global(div.close) {
      display: none;
      @media (max-width: 600px) {
        display: block;
        cursor: pointer;
      }
    }
    @media (max-width: 600px) {
      flex-direction: column;
      position: absolute;
      padding: 1rem;
      right: 0;
      top: 0;
      bottom: 0;
      background: #ffc600;
      height: 100vh;
      width: 200px;
    }
    :global(a) {
      color: #2a2a2a;
      text-decoration: none;
      margin-right: 3.2rem;
      display: flex;
      font-size: 1rem;
      align-self: end;
      @media (max-width: 768px) {
        margin-right: 1.2rem;
        font-size: 14px;
      }
      @media (max-width: 600px) {
        margin-top: 12px;
      }
      &:hover {
        font-weight: bold;
      }
    }
  }
</style>

{#if !inactive}
  <nav in:fly={{ x: 200, duration: 1500 }} out:fly={{ x: 200, duration: 500 }}>
    <Icon icon="arrowRight" width="1.3rem" cls="close" on:click={toggleNav} />
    {#each navs as nav}
      <Link to={nav.toLowerCase()} on:click={toggleNav}>
        <Icon icon={nav.toLowerCase()} width="1rem" />
        {nav}
      </Link>
    {/each}
    <a href="https://github.com/iykekings" on:click={toggleNav} target="blank">
      <Icon icon="github" width="1rem" />
      Github
    </a>
  </nav>
{/if}
