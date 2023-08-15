<template>
  <section v-if="welcomeContent" id="welcome">
    <h1 v-html="welcomeContent.title"></h1>

    <blockquote v-html="welcomeContent.description"></blockquote>

    <ImportantTips>
      <p v-html="welcomeContent.importantTips"></p>
    </ImportantTips>
  </section>
</template>

<script setup lang="ts">
import { WelcomeContent } from "@/types/index";

const {
  public: { apiDomain },
} = useRuntimeConfig();

const welcomeContent = ref<WelcomeContent>();

try {
  welcomeContent.value = await $fetch(`${apiDomain}/api/content`, {
    params: { document: "welcome" },
  });
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
