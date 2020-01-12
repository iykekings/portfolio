<script>
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";
  let name = "",
    email = "",
    message = "";
</script>

<style lang="scss">
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > * {
      margin-bottom: 1.35rem;
    }
  }
</style>

<form>
  <input type="text" placeholder="Name" bind:value={name} />
  <input type="text" placeholder="Email" bind:value={email} />
  <input type="text" placeholder="Message" bind:value={message} />
  <Button
    color="white"
    bg="#2a2a2a"
    value="Send"
    on:click={() => console.log({ name, email, message })}>
    <Icon icon="send" width="1rem" />
    Send
  </Button>
</form>
