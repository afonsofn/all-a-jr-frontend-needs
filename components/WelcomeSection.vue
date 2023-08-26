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

const welcomeContent = computed(() => {
  return (useState<RoadmapSections[]>("roadmapSections").value?.find(
    (section) => section.id === "welcome"
  )?.content || {}) as WelcomeContent;
});
</script>

<style scoped lang="scss">
section > blockquote {
  margin-bottom: 1.5rem;
  line-height: 1.3rem;
}
</style>
