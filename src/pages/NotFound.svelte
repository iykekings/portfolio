<script>
  import Icon from "../components/Icon.svelte";
  import { Link } from "svelte-routing";
</script>

<style lang="scss">
  #not-found {
    flex: 1 1 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10vw;
    text-align: center;
  }
</style>

<svelte:head>
  <meta property="og:title" content="404 | Ikechukwu Eze" />
  <meta
    property="og:description"
    content="This resource may have been moved or doesn't exist" />
  <meta property="og:url" content="https://ikeze.dev/404" />
  <title>404 | Ikeze.dev</title>
</svelte:head>
<div id="not-found">
  <Icon icon="warning" width="7rem" />
  <p>The page you're looking for doesn't exist</p>
  <Link to="/">Return to main page</Link>
</div>
