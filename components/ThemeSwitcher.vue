<template>
  <div :class="['toggle-wrapper', theme]">
    <div class="load-flash"></div>

    <div class="mode-toggle noselect">
      <div class="toggle-switch" @click="toggleTheme"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const theme = ref<"light" | "dark">("dark");

const toggleTheme = () => {
  if (theme.value === "dark") {
    theme.value = "light";
    return document.documentElement.setAttribute("data-theme", "light");
  }

  theme.value = "dark";
  document.documentElement.setAttribute("data-theme", "dark");
};
</script>

<style>
:root {
  --gray-25: #141516;
  --gray-35: #232135;
  --gray-40: #404346;
  --gray-65: #cdd1d5;
  --gray-70: #c6c4d9;
  --gray-95: #dddce3;
  --withe: #fff;
  --animate: 200ms;
}
.load-flash {
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  background: var(--gray-35);
  display: none;
  visibility: hidden;
}
.mode-toggle {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}
.toggle-switch {
  margin: 0;
  padding: 0;
  width: 48px;
  height: 28px;
  border: none;
  outline: none;
  overflow: hidden;
  position: relative;
  border-radius: 14px;
  display: inline-block;
  background: var(--gray-40);
}
.toggle-wrapper.dark .toggle-switch {
  width: 48px;
}
.toggle-switch,
.toggle-switch:before,
.toggle-switch:after {
  transition: all var(--animate) ease-in-out;
}
.toggle-wrapper.dark .toggle-switch {
  background: var(--gray-70);
}
.toggle-switch:before {
  top: 4px;
  left: 24px;
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  position: absolute;
  border-radius: 12px;
  background: var(--withe);
}
.toggle-wrapper.dark .toggle-switch:before {
  left: 4px;
  background: var(--gray-35);
}
.toggle-switch:after {
  content: "";
  top: 14px;
  right: 2px;
  width: 1px;
  height: 1px;
  display: block;
  position: absolute;
  border-radius: 0.5px;
  background: var(--gray-40);
}
.toggle-wrapper.dark .toggle-switch:after {
  top: -2px;
  right: 2px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: var(--gray-70);
}
.toggle-switch:hover,
.toggle-switch:hover:after {
  background: var(--gray-35);
}
.toggle-switch:focus,
.toggle-switch:active,
.toggle-switch:active:after {
  background: var(--gray-25);
}
.toggle-wrapper.dark .toggle-switch:hover,
.toggle-wrapper.dark .toggle-switch:hover:after {
  background: var(--gray-95);
}
.toggle-wrapper.dark .toggle-switch:focus,
.toggle-wrapper.dark .toggle-switch:active,
.toggle-wrapper.dark .toggle-switch:active:after {
  background: var(--gray-65);
}
.noselect {
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}

@media (max-width: 620px) {
  .toggle-switch {
    width: 38.4px;
    height: 22.4px;
    border-radius: 11.2px;
  }
  .toggle-wrapper.dark .toggle-switch {
    width: 38.4px;
  }
  .toggle-switch:before {
    top: 3.2px;
    left: 19.2px;
    width: 16px;
    height: 16px;
    border-radius: 9.6px;
  }
  .toggle-wrapper.dark .toggle-switch:before {
    left: 3.2px;
  }
  .toggle-switch:after {
    top: 11.2px;
    right: 1.6px;
    width: 0.8px;
    height: 0.8px;
    border-radius: 0.5px;
  }
  .toggle-wrapper.dark .toggle-switch:after {
    top: -1.6px;
    right: 1.6px;
    width: 25.6px;
    height: 25.6px;
    border-radius: 12.8px;
  }
}
</style>
