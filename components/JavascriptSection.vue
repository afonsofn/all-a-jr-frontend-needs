<template>
  <section class="html-and-css-wrapper">
    <h2>JavaScript</h2>

    <JavascriptContent
      v-for="(content, index) in javascriptContent"
      :key="index"
      :content="content"
    />
  </section>
</template>

<script setup lang="ts">
// import { HtmlAndCssLessons } from "@/types/index";

// const javascriptContent = ref<HtmlAndCssLessons>();
const javascriptContent = ref();

try {
  const response = await $fetch("http://localhost:3000/api/content", {
    params: {
      document: "javascript",
    },
  });

  console.log(response);

  //   javascriptContent.value = response as HtmlAndCssLessons;
  javascriptContent.value = response;
} catch (error) {
  exceptionsLogger(error, "components/terminalAndGitSection");
}
</script>

<style scoped>
.html-and-css-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
