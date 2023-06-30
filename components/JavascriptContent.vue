<template>
  <section v-if="content">
    <ContentToggle>
      <template #title>{{ content.title }}</template>

      <ul>
        <template v-for="(step, stepIndex) in content.steps" :key="stepIndex">
          <div
            v-if="step.toString().includes('tip-box')"
            v-safe-html="step"
          ></div>

          <li v-else v-safe-html="step"></li>

          <!-- <ContentToggle v-else>
            <template #title>Resumo</template>

            <p v-safe-html="step"></p>
          </ContentToggle> -->
        </template>
      </ul>
    </ContentToggle>
  </section>
</template>

<script setup lang="ts">
// import { LessonContent } from "@/types/index";

defineProps<{
  content?: any;
}>();

// const sectionsWithoutResume = ["Projetos de Fixação", "Materiais extras"];
</script>

<style lang="scss" scoped>
.tip-box {
  margin-bottom: 2rem !important;
}
</style>
