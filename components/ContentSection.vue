<template>
  <section
    v-for="(section, index) in roadmapSections"
    :id="section.id"
    :key="index"
    class="content-wrapper"
  >
    <h2>{{ section.title }}</h2>

    <ContentToggle
      v-for="(content, contentIndex) in (section.content as LessonContent[])"
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
const [
  terminalAndGitContent,
  htmlAndCssContent,
  javascriptContent,
  advancedCssContent,
  reactContent,
] = await Promise.all(
  ["terminalAndGit", "htmlAndCss", "javascript", "advancedCss", "react"].map(
    (name) =>
      $fetch(`http://localhost:3000/api/content`, {
        params: { document: name },
      })
  )
);

const roadmapSections = [
  {
    title: "Terminal e Git",
    id: "terminal",
    content: terminalAndGitContent,
  },
  {
    title: "Html e Css",
    id: "html",
    content: htmlAndCssContent,
  },
  {
    title: "JavaScript",
    id: "javascript",
    content: javascriptContent,
  },
  {
    title: "Css avançado",
    id: "css",
    content: advancedCssContent,
  },
  {
    title: "React e TypeScript",
    id: "react",
    content: reactContent,
  },
];
</script>

<style scoped lang="scss">
.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
