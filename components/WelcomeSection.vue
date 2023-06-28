<template>
  <section v-if="welcomeContent">
    <h1 v-safe-html="welcomeContent.title"></h1>

    <blockquote>{{ welcomeContent.description }}</blockquote>

    <ImportantTips>
      <p v-safe-html="welcomeContent.importantTips"></p>
    </ImportantTips>
  </section>
</template>

<script setup lang="ts">
import { WelcomeContent } from "@/types/index";

const welcomeContent = ref<WelcomeContent>();

try {
  const response = await $fetch("http://localhost:3000/api/content", {
    params: {
      document: "welcome",
    },
  });

  welcomeContent.value = response as WelcomeContent;
} catch (error) {
  exceptionsLogger(error, "components/WelcomeSection");
}
</script>

<style scoped lang="scss">
section > blockquote {
  margin-bottom: 1.5rem;
  line-height: 1.3rem;
}
</style>
