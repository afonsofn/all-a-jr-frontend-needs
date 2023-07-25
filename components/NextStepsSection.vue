<template>
  <section v-if="nextStepsContent" id="next">
    <h2 v-html="nextStepsContent.title"></h2>

    <div v-html="nextStepsContent.description"></div>
  </section>
</template>

<script setup lang="ts">
import { NextStepsContent } from "@/types/index";

const nextStepsContent = ref<NextStepsContent>();

try {
  const response = await $fetch("http://localhost:3000/api/content", {
    params: {
      document: "nextSteps",
    },
  });

  nextStepsContent.value = response as NextStepsContent;
} catch (error) {
  exceptionsLogger(error, "components/NextStepsSection");
}
</script>

<style scoped lang="scss">
section > h2 {
  margin-bottom: 0.5rem;
}
</style>
