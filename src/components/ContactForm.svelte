<script>
  import { fade } from "svelte/transition";
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let name = "",
    email = "",
    message = "",
    error = "",
    success = false;
  let inputState = true;
  function check(n, m, e) {
    if (n.length && m.length && re.test(e)) return false;
    return true;
  }
  $: inputState = check(name, message, email);
  async function sendEmail() {
    try {
      const req = await fetch(`${window.location.origin}/api/mail`, {
        method: "POST",
        mode: "same-origin",
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim()
        })
      });
      name = message = email = "";
      success = true;
      error = "";
    } catch (err) {
      error = err;
      success = false;
      console.log(err);
    }
  }
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
    button {
      border-radius: 5px;
      padding: 0.5rem 2rem;
      margin: 0 1rem;
      background: #2a2a2a;
      color: white;
    }
  }
</style>

<form>
  <input type="text" placeholder="Name" bind:value={name} />
  <input type="text" placeholder="Email" bind:value={email} />
  <input type="text" placeholder="Message" bind:value={message} />
  <button
    type="submit"
    disabled={inputState}
    on:click|preventDefault={sendEmail}>
    <Icon icon="send" width="1rem" />
    Send
    {#if success}
      <Icon icon="success" width="1rem" />
    {/if}
    {#if error.length}
      <Icon icon="error" width="1rem" />
    {/if}
  </button>
  {#if error.length}
    <p>{error}</p>
  {/if}
</form>
