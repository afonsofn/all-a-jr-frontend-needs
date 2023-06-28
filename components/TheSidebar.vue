<template>
  <MenuIcon class="mobile-menu" @click="openNav = true" />

  <transition>
    <nav v-if="openNav">
      <div class="links-wrapper">
        <div
          v-for="{ name, icon } in sections"
          :key="name"
          :class="{ selected: selectedSection === name }"
          @click="selectSection(name)"
        >
          <component :is="icon" />
          <p>{{ name }}</p>
        </div>
      </div>

      <DoubleChevronLeft class="close-mobile-menu" @click="openNav = false" />
    </nav>
  </transition>
</template>

<script setup lang="ts">
import {
  DoubleChevronLeft,
  MenuIcon,
  WelcomeIcon,
  TerminalIcon,
  HtmlIcon,
  JavascriptIcon,
  CssIcon,
  ReactIcon,
  NextStepsIcon,
} from "@/icons";

const openNav = ref(false);
const selectedSection = ref("Bem Vindo");
const sections = [
  { name: "Bem Vindo", icon: WelcomeIcon },
  { name: "Terminal e Git", icon: TerminalIcon },
  { name: "Html e Css", icon: HtmlIcon },
  { name: "Javascript", icon: JavascriptIcon },
  { name: "Css Avançado", icon: CssIcon },
  { name: "React e TypeScript", icon: ReactIcon },
  { name: "Próximos Passos...", icon: NextStepsIcon },
];

const selectSection = (section: string) => {
  selectedSection.value = section;

  if (window.innerWidth > 1050) return;

  setTimeout(() => (openNav.value = false), 100);
};

onMounted(() => {
  const mediaQueryWatcher = window.matchMedia("(min-width: 1050px)");

  function handleWindowResize(event: MediaQueryListEvent) {
    openNav.value = event.matches;
  }

  mediaQueryWatcher.addEventListener("change", handleWindowResize);

  handleWindowResize(mediaQueryWatcher as unknown as MediaQueryListEvent);

  onUnmounted(() =>
    mediaQueryWatcher.removeEventListener("change", handleWindowResize)
  );
});
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .links-wrapper {
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
        width: 200%;
        left: 120%;
        font-size: 0.8rem;
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

  .close-mobile-menu {
    display: none;
    align-self: center;
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}

@media (max-width: 1050px) {
  .mobile-menu {
    display: block;
  }

  .close-mobile-menu {
    display: block !important;
  }
}
</style>
