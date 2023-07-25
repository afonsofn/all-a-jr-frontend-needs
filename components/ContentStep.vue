<template>
  <div v-if="isTipBox(step)" v-html="step"></div>

  <ContentToggle v-else-if="step.title" class="recap">
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

<style lang="scss">
.recap {
  margin-bottom: 0.3rem;

  li:not(ol > li) {
    position: relative;
    padding-left: 1.4rem;
    margin-left: 0.4rem;
    margin-bottom: 0.3rem;
    list-style: none;

    &:before {
      content: "⏺";
      position: absolute;
      top: 4px;
      left: 0;
      font-size: 0.7rem;
      color: #5c80ff;
    }
  }
}
</style>
