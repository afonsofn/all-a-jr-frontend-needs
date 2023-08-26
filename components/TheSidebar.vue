<template>
  <div ref="selectRef">
    <MenuIcon class="mobile-menu" @click="openNav = true" />

    <transition name="slide">
      <nav v-if="openNav && sections?.length">
        <div
          v-for="section in sections"
          :key="section.name"
          :class="{ selected: selectedSection === section.name }"
          @click="selectSection(section.name, section.id)"
        >
          <component :is="section.icon" />
          <p>{{ section.name }}</p>
        </div>
      </nav>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { MenuIcon } from "@/icons";

const sections = useState<RoadmapSections[]>("roadmapSections");

const openNav = ref(false);
const scrollTimer = ref<ReturnType<typeof setTimeout>>();
const selectRef = ref<HTMLElement>();
const selectedSection = ref("");

const selectSection = (section: string, id: string): void => {
  turnOffScrollListener();

  selectedSection.value = section;
  scrollToSection(id);

  if (window.innerWidth > 1050) return;

  setTimeout(() => (openNav.value = false), 100);
};

const scrollToSection = (id: string): void => {
  const targetElement = document.querySelector(`#${id}`) as HTMLElement;
  const headerHeight = document.querySelector("header")?.offsetHeight || 0;

  window.scrollTo({ top: targetElement.offsetTop - headerHeight });

  clearTimeout(scrollTimer.value);
  scrollTimer.value = setTimeout(turnOnScrollListener, 1000);
};

const turnOnScrollListener = () =>
  window.addEventListener("scroll", srollListener);

const turnOffScrollListener = () =>
  window.removeEventListener("scroll", srollListener);

const srollListener = () => {
  sections.value.forEach((section) => {
    const targetElement = document.getElementById(section.id);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect();

      if (elementPosition.top <= 200) {
        selectedSection.value = section.name;
      }
    }
  });
};

const manageSidebarBehavior = () => {
  const mediaQueryWatcher = window.matchMedia("(min-width: 1050px)");

  function handleWindowResize(event: MediaQueryListEvent) {
    openNav.value = event.matches;
  }

  function checkOutsideClick(event: Event) {
    if (
      !selectRef.value?.contains(event.target as Node) &&
      openNav.value &&
      window.innerWidth < 1050
    ) {
      openNav.value = false;
    }
  }

  document.addEventListener("click", checkOutsideClick);
  mediaQueryWatcher.addEventListener("change", handleWindowResize);

  handleWindowResize(mediaQueryWatcher as unknown as MediaQueryListEvent);

  onUnmounted(() => {
    document.removeEventListener("click", checkOutsideClick);
    mediaQueryWatcher.removeEventListener("change", handleWindowResize);
  });
};

watch(
  () => sections.value,
  () => {
    if (sections.value) selectedSection.value = sections.value[0]?.name;
  }
);

onMounted(() => {
  manageSidebarBehavior();
  turnOnScrollListener();
});

onBeforeUnmount(() => turnOffScrollListener());
</script>

<style lang="scss" scoped>
.mobile-menu {
  display: none;
  z-index: 999;
  position: fixed;
  width: 1.3rem;
  height: 1.3rem;
  margin: 1rem 1.5rem;
  cursor: pointer;
}

nav {
  position: fixed;
  z-index: 1000;
  background-color: var(--background-color-secondary);
  height: 100vh;
  width: 6rem;
  padding: 3rem 0;
  padding-left: 1rem;

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }

  div {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0.6rem 1rem;
    margin-bottom: 0.3rem;
    cursor: pointer;

    p {
      display: none;
      position: absolute;
      white-space: nowrap;
      padding: 0.2rem 0.5rem;
      border-radius: 1rem;
      left: 120%;
      font-size: 0.8rem;
      background-color: var(--background-color-secondary);
      color: var(--font-secondary);
    }

    &:hover {
      p {
        display: block;
      }
    }

    &.selected {
      background-color: var(--background-color);
      border-top-left-radius: 0.4rem;
      border-bottom-left-radius: 0.4rem;

      &::after {
        content: "";
        position: absolute;
        top: -1rem;
        right: 0;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: var(--background-color-secondary);
        box-shadow: 0.5rem 0.5rem 0 var(--background-color);
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -1rem;
        right: 0;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background-color: var(--background-color-secondary);
        box-shadow: 0.5rem -0.5rem 0 var(--background-color);
      }
    }
  }
}

@media (max-width: 1050px) {
  .mobile-menu {
    display: block;
  }
}
</style>
