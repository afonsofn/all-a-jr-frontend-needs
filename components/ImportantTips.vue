<template>
  <section>
    <p @click="open = !open">💡 Dicas Importantes</p>

    <transition>
      <div v-if="open" class="tip-box">
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

  .tip-box {
    margin-top: 1.5rem;
  }
}
</style>
