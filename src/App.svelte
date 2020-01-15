<script>
  import { Router, Link, Route } from "svelte-routing";
  import Blog from "./pages/Blog.svelte";
  import About from "./pages/About.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Contact from "./pages/Contact.svelte";
  import Home from "./pages/Home.svelte";
  import Projects from "./pages/Projects.svelte";
  import Uses from "./pages/Uses.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Icon from "./components/Icon.svelte";
  import Logo from "./components/Logo.svelte";
  import Footer from "./components/Footer.svelte";

  export let url;
  const toggleNav = () => {
    navState = !navState;
  };
  let navState = true;
</script>

<style type="text/scss">
  header {
    position: sticky;
    top: 0px;
    z-index: 900;
    background: white;
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
    display: flex;
    flex-direction: column;
  }
</style>

<svelte:head>
  <meta property="og:title" content="Ikechukwu Eze" />
  <meta
    property="og:description"
    content="This is my portfolio, including my projects, writings and a tiny
    bit of everything else" />
  <meta property="og:url" content="https://ikeze.dev" />
  <meta property="og:image" content="./image/site_thumbnail.jpeg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:site_name" content="Ikeze.dev" />
  <title>Ikeze.dev</title>
</svelte:head>
<Router {url}>
  <header>
    <Logo />
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
    <Route component={NotFound} />
  </main>
  <Footer />
</Router>
