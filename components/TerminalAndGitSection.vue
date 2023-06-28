<template>
  <section class="terminal-and-git-wrapper">
    <h2>Terminal e Git</h2>

    <TerminalAndGitContent
      v-for="(content, index) in terminalAndGitContent"
      :key="index"
      :content="content"
    />
  </section>
</template>

<script setup lang="ts">
import { TerminalAndGitLessons } from "@/types/index";

const terminalAndGitContent = ref<TerminalAndGitLessons>();

try {
  const response = await $fetch("http://localhost:3000/api/content", {
    params: {
      document: "terminalAndGit",
    },
  });

  terminalAndGitContent.value = response as TerminalAndGitLessons;
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
