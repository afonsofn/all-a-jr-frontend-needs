<template>
  <div v-if="isTipBox(step)" v-html="step"></div>

  <ContentToggle v-else-if="step.title" :has-margin-bottom="true">
    <template #title>
      <strong>{{ step.title }}</strong>
    </template>

    <ul v-if="isObject(step.steps)">
      <ContentStep
        v-for="(subStep, subStepIndex) in step.steps"
        :key="subStepIndex"
        :step="subStep"
      />
    </ul>

    <p v-else v-html="step.steps"></p>
  </ContentToggle>

  <li v-else v-html="step"></li>
</template>

<script setup lang="ts">
defineProps<{
  step: LessonContent;
}>();

const isTipBox = (step: LessonContent | string) =>
  typeof step === "string" && step.includes("tip-box");
const isObject = (steps: (LessonContent | string)[]) =>
  typeof steps === "object";
</script>
