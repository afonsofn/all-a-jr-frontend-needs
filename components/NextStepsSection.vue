<template>
  <section v-if="nextStepsContent" id="next">
    <h2 v-html="nextStepsContent.title"></h2>

    <div v-html="nextStepsContent.description"></div>
  </section>
</template>

<script setup lang="ts">
import { NextStepsContent } from "@/types/index";

const {
  public: { apiDomain },
} = useRuntimeConfig();

const nextStepsContent = ref<NextStepsContent>();

try {
  nextStepsContent.value = await $fetch(`${apiDomain}/api/content`, {
    params: { document: "nextSteps" },
  });
} catch (error) {
  exceptionsLogger(error, "components/NextStepsSection");
}
</script>

<style scoped lang="scss">
section > h2 {
  margin-bottom: 0.5rem;
}
</style>
