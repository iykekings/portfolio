<script>
  import { Link } from "svelte-routing";
  import Icon from "./Icon.svelte";
  import { fly, fade } from "svelte/transition";

  let navs = ["Projects", "Contact"];
  // let navs = ["Projects", "Contact", "Blog", "Uses"];
  export let inactive;
  let width;
  let navState;
  $: if (width > 600) {
    navState = true;
  } else {
    navState = false;
  }
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
      z-index: 999;
      background: #fdfdfd;
      height: 100vh;
      width: 200px;
    }
    :global(a) {
      color: #2a2a2a;
      text-decoration: none;
      margin-right: 3.2rem;
      display: flex;
      font-size: 1rem;
      text-decoration: none;
      cursor: pointer;
      align-self: end;
      @media (max-width: 768px) {
        margin-right: 1.2rem;
        font-size: 14px;
      }
      @media (max-width: 600px) {
        padding: 0.7rem 0.5rem;
        width: 100%;
        font-size: 1rem;
        border-bottom: 1px solid #80808033;
        border-top: 0.5px solid #8080801c;
        &:hover {
          background-color: #eeeeee;
        }
      }
      &:hover {
        font-weight: bold;
      }
    }
  }
</style>

<svelte:window bind:innerWidth={width} />
{#if navState && inactive}
  <nav in:fly={{ x: 200, duration: 500 }} out:fly={{ x: 200, duration: 500 }}>
    {#each navs as nav}
      <Link to={nav.toLowerCase()}>
        <Icon icon={nav.toLowerCase()} width="1rem" />
        {nav}
      </Link>
    {/each}
    <a href="https://github.com/iykekings" target="blank">
      <Icon icon="github" width="1rem" />
      GitHub
    </a>
  </nav>
{/if}
{#if !inactive && !navState}
  <nav
    in:fly={{ x: 200, duration: 500 }}
    out:fly={{ x: 200, duration: 500 }}
    class:inactive>
    <div>
      <Icon icon="arrowRight" width="1.3rem" cls="close" on:click={toggleNav} />
    </div>
    {#each navs as nav}
      <Link to={nav.toLowerCase()} on:click={toggleNav}>
        <Icon icon={nav.toLowerCase()} width="1rem" />
        {nav}
      </Link>
    {/each}
    <a href="https://github.com/iykekings" on:click={toggleNav} target="blank">
      <Icon icon="github" width="1rem" />
      GitHub
    </a>
  </nav>
{/if}
