<script>
  import Logo from "./Logo.svelte";
  let currentYear = new Date().getFullYear();
</script>

<style>
  footer {
    display: flex;
    padding: 2rem 5vw;
    justify-content: space-around;
    border-top: 1px #80808026 solid;
    align-items: center;
  }
</style>

<footer>
  <Logo iw="1rem" fs="1rem" />
  <article>
    <p>&copy;{currentYear} Ikeze.dev</p>
  </article>
</footer>
