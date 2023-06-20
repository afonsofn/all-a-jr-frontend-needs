<template>
  <div>
    <h3 @click="open = !open">〉<slot name="title"></slot></h3>

    <div v-if="open" class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
</script>

<style lang="scss" scoped>
h3 {
  cursor: pointer;
}

.content {
  margin-left: 1.5rem;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
