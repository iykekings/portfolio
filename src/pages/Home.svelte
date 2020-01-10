<script>
  import Terminal from "../components/Terminal.svelte";
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

<div>
  <Terminal {stdArray} />
</div>
