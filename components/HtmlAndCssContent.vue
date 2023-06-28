<template>
  <section v-if="content">
    <ContentToggle>
      <template #title>{{ content.title }}</template>

      <ul>
        <template v-for="(step, stepIndex) in content.steps" :key="stepIndex">
          <li
            v-if="
              sectionsWithoutResume.includes(content.title) ||
              stepIndex !== content.steps.length - 1
            "
            v-safe-html="step"
          ></li>

          <ContentToggle v-else>
            <template #title>Resumo</template>

            <p v-safe-html="step"></p>
          </ContentToggle>
        </template>
      </ul>
    </ContentToggle>
  </section>
</template>

<script setup lang="ts">
import { LessonContent } from "@/types/index";

defineProps<{
  content?: LessonContent;
}>();

const sectionsWithoutResume = ["Projetos de Fixação", "Materiais extras"];
</script>
