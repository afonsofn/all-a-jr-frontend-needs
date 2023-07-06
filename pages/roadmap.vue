<template>
  <section class="roadmap-wrapper">
    <WelcomeSection />
    <ContentSection />
    <NextStepsSection />
  </section>
</template>

<script setup lang="ts">
redirectIfNotLoggedIn();
</script>

<style scoped lang="scss">
.roadmap-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (max-width: 620px) {
  .roadmap-wrapper {
    gap: 1rem;
  }
}
</style>
