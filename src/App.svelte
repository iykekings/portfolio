<script>
  import { Router, Link, Route } from "svelte-routing";
  import Blog from "./pages/Blog.svelte";
  import About from "./pages/About.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Contact from "./pages/Contact.svelte";
  import Home from "./pages/Home.svelte";
  import Projects from "./pages/Projects.svelte";
  import Uses from "./pages/Uses.svelte";
  import Icon from "./components/Icon.svelte";

  export let url;
  const toggleNav = () => {
    navState = !navState;
  };
  let navState = true;
</script>

<style type="text/scss">
  header {
    display: flex;
    padding: 0.3rem 1rem;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 2px 2px;
    @media (max-width: 768px) {
      position: relative;
      padding: 0.3rem 0.5rem;
    }
    @media (max-width: 600px) {
      align-items: center;
      padding: 0.5rem 16px;
    }
    :global(& > :nth-child(1)) {
      display: flex;
      align-items: center;
      font-size: 1.3rem;
      color: #2a2a2a;
      font-weight: 600;
    }
    :global(div.menu) {
      display: none;
      @media (max-width: 600px) {
        display: inline-block;
        cursor: pointer;
      }
    }
    .spacer {
      flex: 1 1 0;
    }
  }
  main {
    padding: 0 5rem;
    @media (max-width: 600px) {
      padding: 0 1rem;
    }
  }
</style>

<Router {url}>
  <header>
    <Link to="/">
      <Icon icon="logo" width="2rem" />
      Ikeze.dev
    </Link>
    <div class="spacer" />
    <Navbar inactive={navState} {toggleNav} />
    <Icon icon="menu" width="1.3rem" cls="menu" on:click={toggleNav} />
  </header>
  <main>
    <Route path="blog" component={Blog} />
    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />
    <Route path="projects" component={Projects} />
    <Route path="uses" component={Uses} />
    <Route path="/" component={Home} />
  </main>
</Router>
