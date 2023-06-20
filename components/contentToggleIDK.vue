<template>
  <div>
    <h3 @click="open = !open">
      ＜<slot name="title"></slot>＞...<template v-if="!open"
        >＜/<slot name="title"></slot>＞</template
      >
    </h3>

    <div v-if="open">
      <slot />
    </div>
    <h3 v-if="open">＜/<slot name="title"></slot>＞</h3>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
</script>

<style lang="scss" scoped>
h3 {
  cursor: pointer;
}
</style>
