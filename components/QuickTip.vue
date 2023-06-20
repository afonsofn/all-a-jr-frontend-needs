<template>
  <section>
    <p @click="open = !open">💡 Quick Tip</p>

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
    margin-bottom: 0.5rem;
  }

  div {
    background-color: var(--background-color-secondary);
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    animation: fade-in 0.4s ease-in-out forwards;
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
