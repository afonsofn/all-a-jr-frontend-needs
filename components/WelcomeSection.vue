<template>
  <section>
    <h1>{{ content.title }}</h1>

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

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
