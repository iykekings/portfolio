<script>
  import { Link } from "svelte-routing";
  import Icon from "./Icon.svelte";
</script>

<style lang="scss">
  nav {
    display: flex;
    align-items: baseline;
    width: 100%;
    padding: 1rem 2rem;
    :global(& > :nth-child(1)) {
      align-items: center;
      font-size: 1.3rem;
    }
    :global(a) {
      color: #2a2a2a;
      text-decoration: none;
      margin-right: 3.2rem;
      display: flex;
      align-self: end;
      @media (max-width: 768px) {
        margin-right: 1rem;
      }
    }
    .spacer {
      flex: 1 1 0;
    }
  }
</style>

<nav>
  <Link to="/">
    <Icon icon="logo" width="2rem" />
    Ikeze.dev
  </Link>
  <div class="spacer" />
  <Link to="projects">
    <Icon icon="projects" width="1rem" />
    Projects
  </Link>
  <Link to="contact">
    <Icon icon="contact" width="1rem" />
    Contact
  </Link>
  <a href="https://github.com/iykekings">
    <Icon icon="github" width="1rem" />
    Github
  </a>
  <Link to="blog">
    <Icon icon="blog" width="1rem" />
    Blog
  </Link>
  <Link to="uses">
    <Icon icon="uses" width="1rem" />
    Uses
  </Link>
</nav>
