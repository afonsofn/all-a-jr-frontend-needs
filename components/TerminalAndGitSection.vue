<template>
  <section class="terminal-and-git-wrapper">
    <h2>Terminal e Git</h2>

    <TerminalSection :content="content.terminal" />
    <GitSection :content="content.terminal" />
  </section>
</template>

<script setup lang="ts">
const content = ref<any>(null);

try {
  const terminalAndGitContent = await $fetch(
    "http://localhost:3000/api/content?document=terminalAndGit"
  );

  content.value = terminalAndGitContent;
} catch (error) {
  exceptionsLogger(error, "components/terminalAndGitSection");
}
</script>

<style scoped>
.terminal-and-git-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
