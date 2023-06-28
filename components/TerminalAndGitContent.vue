<template>
  <section v-if="content">
    <ContentToggle>
      <template #title>{{ content.title }}</template>

      <ContentToggle
        v-for="(step, stepIndex) in content.steps"
        :key="stepIndex"
      >
        <template #title>{{ step.title }}</template>

        <ul>
          <template
            v-for="(subStep, subStepIndex) in step.steps"
            :key="subStepIndex"
          >
            <p
              v-if="sectionsWithoutResume.includes(step.title)"
              v-safe-html="subStep"
            ></p>

            <li
              v-else-if="subStepIndex !== step.steps.length - 1"
              v-safe-html="subStep"
            ></li>

            <ContentToggle v-else>
              <template #title>Resumo</template>

              <p v-safe-html="subStep"></p>
            </ContentToggle>
          </template>
        </ul>

        <template
          v-for="(exercise, exerciseIndex) in step.exercises"
          :key="exerciseIndex"
        >
          <ContentToggle>
            <template #title>Exercício {{ exerciseIndex + 1 }}</template>

            <p v-safe-html="exercise.question"></p>
            <ContentToggle>
              <template #title>Gabarito</template>

              <p v-safe-html="exercise.answer"></p>
            </ContentToggle>
          </ContentToggle>
        </template>
      </ContentToggle>
    </ContentToggle>
  </section>
</template>

<script setup lang="ts">
import { LessonContent } from "@/types/index";

defineProps<{
  content?: LessonContent;
}>();

const sectionsWithoutResume = [
  "Principais Comandos Git",
  "Recapitulando na prática",
];
</script>
