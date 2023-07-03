<template>
  <section>
    <ContentToggle>
      <template #title>{{ content.title }}</template>

      <ul>
        <JavascriptStep
          v-for="(step, stepIndex) in content.steps"
          :key="stepIndex"
          :step="step"
        />
      </ul>
    </ContentToggle>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  content: LessonContent;
}>();
</script>
