<template>
  <section>
    <p @click="open = !open">💡 {{ importantTipsTitle }}</p>

    <transition>
      <div v-if="open" class="tip-box">
        <slot />
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
const open = ref(false);
const importantTipsTitle = ref("");

onMounted(
  () =>
    (importantTipsTitle.value = contentTitleTranslations.value.importantTips)
);
</script>

<style lang="scss" scoped>
section {
  p {
    font-weight: 600;
    color: var(--font-tertiary);
    cursor: pointer;
  }

  .tip-box {
    margin-top: 1.5rem;
  }
}
</style>
