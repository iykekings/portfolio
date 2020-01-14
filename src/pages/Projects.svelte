<script>
  import { onMount } from "svelte";
  import projects from "../assets/projects.js";
  import Button from "../components/Button.svelte";
  import Icon from "../components/Icon.svelte";
</script>

<style lang="scss">
  h1 {
    text-align: center;
    font-weight: 400;
  }
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    padding: 2.5rem 8vw;
    border-top: 1px solid #8080805c;

    article {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 3px 3px 11px #0000001f;

      .image {
        width: 100%;
        border-bottom: 1px solid #80808024;
        height: 200px;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      h3 {
        padding: 0 1rem;
        text-transform: capitalize;
        margin: 0.5rem 0;
      }
      p {
        padding: 0 1rem;
        font-weight: 300;
        margin: 1rem 0;
      }
      .btn-con {
        display: flex;
        flex-wrap: wrap;
        margin: 1rem;
        justify-content: center;
        a {
          padding: 0.3rem 1rem;
          text-decoration: none;
          cursor: pointer;
          &.github {
            background-color: #2a2a2a;
            color: white;
          }
          &.source {
            color: #2a2a2a;
            background-color: #f7f7f7;
          }
        }
      }
    }
  }
</style>

<h1>Recent Projects</h1>
<section class="projects">
  {#each projects as pro (pro.link)}
    <article>
      <div class="image">
        <img src={pro.pictureUrl} alt={pro.name} />
      </div>
      <h3>{pro.name}</h3>
      <p>{pro.description}</p>
      <div class="btn-con">
        {#if pro.link}
          <a href={pro.link} target="blank" class="source">
            <Icon icon="link" width="1rem" />
            Link
          </a>
        {/if}
        {#if pro.source}
          <a href={pro.link} target="blank" class="github">
            <Icon icon="github" width="1rem" />
            GitHub
          </a>
        {/if}
      </div>
    </article>
  {/each}
</section>
