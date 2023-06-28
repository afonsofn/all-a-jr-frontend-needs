<template>
  <section class="html-and-css-wrapper">
    <h2>Html e Css</h2>

    <HtmlAndCssContent
      v-for="(content, index) in htmlAndCssContent"
      :key="index"
      :content="content"
    />
  </section>
</template>

<script setup lang="ts">
import { HtmlAndCssLessons } from "@/types/index";

const htmlAndCssContent = ref<HtmlAndCssLessons>();

try {
  const response = await $fetch("http://localhost:3000/api/content", {
    params: {
      document: "htmlAndCss",
    },
  });

  htmlAndCssContent.value = response as HtmlAndCssLessons;
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
