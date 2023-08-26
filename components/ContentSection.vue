<template>
  <section
    v-for="(section, index) in roadmapSections"
    :id="section.id"
    :key="index"
    class="content-wrapper"
  >
    <h2>{{ section.name }}</h2>

    <ContentToggle
      v-for="(content, contentIndex) in section.content"
      :key="contentIndex"
    >
      <template #title>{{ content.title }}</template>

      <ul>
        <ContentStep
          v-for="(step, stepIndex) in content.steps"
          :key="stepIndex"
          :step="step"
        />
      </ul>
    </ContentToggle>
  </section>
</template>

<script setup lang="ts">
const notContentSections = ["welcome", "nextSteps"];

const roadmapSections = computed(() => {
  return useState<RoadmapSections[]>("roadmapSections").value?.filter(
    (section) => !notContentSections.includes(section.id)
  );
});
</script>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
