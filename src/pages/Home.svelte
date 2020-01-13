<script>
  import { Link } from "svelte-routing";
  import Terminal from "../components/Terminal.svelte";
  import Container from "../components/Container.svelte";
  import Button from "../components/Button.svelte";
  import Icon from "../components/Icon.svelte";
  let stdArray = [
    { command: "whoami", output: "Ikechukwu Eze" },
    {
      command: "man 'Ikechukwu Eze'",
      output:
        "A passionate fullstack software engineer who takes delight in building softwares that make people very efficient in their daily lives."
    },
    { command: "echo $HOME", output: "Currently lives in Enugu, Nigeria" }
  ];
</script>

<style lang="scss">
  .btn-containers {
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    :global(a) {
      margin-top: 1rem;
    }
  }
</style>

<Container>
  <Terminal {stdArray} />
  <div class="btn-containers" style="z-index: 2;">
    <a href="https://github.com/iykekings" target="blank">
      <Button color="#2a2a2a" bg="#ffffff" value="Github">
        <Icon icon="github" width="1rem" />
        Github
      </Button>
    </a>
    <Link to="projects">
      <Button bg="#2a2a2a" color="#ffffff" value="Projects" />
    </Link>
  </div>
</Container>
