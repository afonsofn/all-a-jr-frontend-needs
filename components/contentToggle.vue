<template>
  <div :class="{ 'margin-bottom': hasMarginBottom }">
    <p @click="openToggle()">
      <ChevronRight :class="turnIcon" />
      <slot name="title"></slot>
    </p>

    <div v-if="open" class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRight } from "@/icons";

withDefaults(
  defineProps<{
    hasMarginBottom?: boolean;
  }>(),
  {
    hasMarginBottom: false,
  }
);

const open = ref(false);
const turnIcon = ref("");

const openToggle = () => {
  open.value = !open.value;
  open.value ? (turnIcon.value = "open") : (turnIcon.value = "close");
};
</script>

<style lang="scss" scoped>
.margin-bottom {
  margin-bottom: 0.3rem;
}

p {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.content {
  margin-left: 1.5rem;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 620px) {
  .content {
    margin-left: 1rem;
  }
}
</style>
