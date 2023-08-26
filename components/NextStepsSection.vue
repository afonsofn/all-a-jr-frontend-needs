<template>
  <section v-if="nextStepsContent" id="nextSteps">
    <h2 v-html="nextStepsContent.title"></h2>

    <div v-html="nextStepsContent.description"></div>
  </section>
</template>

<script setup lang="ts">
import { NextStepsContent } from "@/types/index";

const nextStepsContent = computed(() => {
  return (useState<RoadmapSections[]>("roadmapSections").value?.find(
    (section) => section.id === "nextSteps"
  )?.content || {}) as NextStepsContent;
});
</script>

<style scoped lang="scss">
section > h2 {
  margin-bottom: 0.5rem;
}
</style>
