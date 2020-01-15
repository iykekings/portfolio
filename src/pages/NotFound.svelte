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

<div id="not-found">
  <Icon icon="warning" width="7rem" />
  <p>The page you're looking for doesn't exist</p>
  <Link to="/">Return to main page</Link>
</div>
