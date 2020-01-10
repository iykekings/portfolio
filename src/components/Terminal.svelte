<script>
  export let stdArray;
</script>

<style lang="scss">
  .terminal {
    @media (max-width: 600px) {
      width: 100%;
    }
    width: 90%;
    min-height: 320px;
    background-color: #193549;
    color: #33cc33;
    position: relative;
    border-radius: 7px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    .circles {
      position: absolute;
      left: 0;
      display: flex;
      padding: 10px 5px;
      margin-left: 5px;
      .circle {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        margin-right: 3px;
      }
    }
    .contents {
      width: 100%;
      margin-top: 2rem;
    }
    .content {
      width: 100%;
      padding: 1rem 2rem;
      text-align: left;
      font-family: monospace;
      font-size: 1rem;
      p {
        margin: 0;
        padding: 0;
      }
      .command {
        color: white;
        margin-bottom: 5px;
      }
      .output {
        color: #33cc33;
      }
    }
  }
</style>

<div class="terminal">
  <div class="circles">
    <div class="circle" style="background: #FE7D7D" />
    <div class="circle" style="background: #FFCB65" />
    <div class="circle" style="background: #6EFD96" />
  </div>
  <div class="contents">
    {#each stdArray as std}
      <div class="content">
        <p class="command">$ {std.command}</p>
        <p class="output">{std.output}</p>
      </div>
    {/each}
  </div>
</div>
