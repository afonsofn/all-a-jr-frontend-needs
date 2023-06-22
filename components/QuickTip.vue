<template>
  <section>
    <p @click="open = !open">💡 Dica Importante</p>

    <div v-if="open" :class="{ 'fade-in': !open }">
      <i><slot /></i>
    </div>
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
    animation: fade-in 0.4s ease-in-out forwards;
    box-shadow: var(--quick-tip-shadow);
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
