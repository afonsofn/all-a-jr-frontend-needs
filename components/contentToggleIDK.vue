<template>
  <div>
    <p @click="open = !open">
      ＜<slot name="title"></slot>＞...<template v-if="!open"
        >＜/<slot name="title"></slot>＞</template
      >
    </p>

    <div v-if="open">
      <slot />
    </div>
    <p v-if="open">＜/<slot name="title"></slot>＞</p>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
</script>

<style lang="scss" scoped>
p {
  cursor: pointer;
}
</style>
