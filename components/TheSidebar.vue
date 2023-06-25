<template>
  <MenuIcon class="mobile-menu" @click="openNav = true" />

  <nav :class="{ open: openNav }">
    <div class="links-wrapper">
      <div
        v-for="{ name, icon } in sections"
        :key="name"
        :class="{ selected: selectedSection === name }"
        @click="selectSection(name)"
      >
        <component :is="icon" />
      </div>
    </div>

    <DoubleChevronLeft class="close-mobile-menu" @click="openNav = false" />
  </nav>
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
const selectedSection = ref("welcome");
const sections = [
  { name: "welcome", icon: WelcomeIcon },
  { name: "terminal", icon: TerminalIcon },
  { name: "html", icon: HtmlIcon },
  { name: "javascript", icon: JavascriptIcon },
  { name: "css", icon: CssIcon },
  { name: "react", icon: ReactIcon },
  { name: "next", icon: NextStepsIcon },
];

const selectSection = (section: string) => (selectedSection.value = section);
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

@media (max-width: 1050px) {
  .mobile-menu {
    display: block;

    &.open {
      display: block;
    }
  }

  nav {
    display: none;
    width: 6rem;

    .links-wrapper > div {
      padding: 0.7rem 1rem;
    }

    &.open {
      display: flex;
    }
  }

  .close-mobile-menu {
    display: block !important;
  }
}
</style>
