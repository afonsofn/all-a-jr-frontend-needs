<template>
  <section>
    <p @click="open = !open">💡 Dicas Importantes</p>

    <transition>
      <div v-if="open">
        <i><slot /></i>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
const open = ref(false);
</script>

<style lang="scss" scoped>
section {
  p {
    font-weight: 600;
    color: var(--font-tertiary);
    cursor: pointer;
  }

  div {
    margin-top: 1.5rem;
    line-height: 1.3rem;
    background-color: var(--background-color-secondary);
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    box-shadow: var(--important-tips-shadow);
  }
}
</style>
