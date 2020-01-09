<script>
  import { Router, Link, Route } from "svelte-routing";
  import Blog from "./pages/Blog.svelte";
  import About from "./pages/About.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Contact from "./pages/Contact.svelte";
  import Home from "./pages/Home.svelte";
  import Projects from "./pages/Projects.svelte";
  import Uses from "./pages/Uses.svelte";

  export let url;
</script>

<style type="text/scss">
  header {
    display: flex;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 2px 2px;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Router {url}>
  <header>
    <Navbar />
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
