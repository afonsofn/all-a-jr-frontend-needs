<template>
  <section>
    <h1 v-safe-html="content.title"></h1>

    <blockquote>{{ content.description }}</blockquote>

    <QuickTip>
      {{ content.quickTip }}
    </QuickTip>
  </section>
</template>

<script setup lang="ts">
const content = ref<any>(null);

try {
  const welcomeContent = await $fetch(
    "http://localhost:3000/api/content?document=header"
  );

  content.value = welcomeContent;
} catch (error) {
  exceptionsLogger(error, "components/WelcomeSection");
}
</script>

<style scoped lang="scss">
section {
  h1 {
    margin-bottom: 2.5rem;
  }

  blockquote {
    margin-bottom: 1.5rem;
    line-height: 1.3rem;
  }
}
</style>
