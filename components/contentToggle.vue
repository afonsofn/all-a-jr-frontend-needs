<template>
  <div>
    <p @click="openToggle()">
      <IconsChevronRight :class="turnIcon" />
      <slot name="title"></slot>
    </p>

    <div v-if="open" class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false);
const turnIcon = ref("");

const openToggle = () => {
  open.value = !open.value;
  open.value ? (turnIcon.value = "open") : (turnIcon.value = "close");
};
</script>

<style lang="scss" scoped>
p {
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    width: 0.85rem;
    height: 0.85rem;
    margin: 0 0.8rem 0 0.1rem;
    fill: var(--font-primary);

    &.open {
      animation: open-toggle 0.15s linear forwards;
    }
    &.close {
      animation: close-toggle 0.15s linear forwards;
    }
  }
}

.content {
  margin-left: 1.5rem;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@keyframes open-toggle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}

@keyframes close-toggle {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
