<template>
  <MenuIcon class="mobile-menu" @click="openNav = true" />

  <transition name="slide">
    <nav v-if="openNav">
      <div class="nav-links-wrapper">
        <div
          v-for="{ name, icon, id } in sections"
          :key="name"
          :class="{ selected: selectedSection === name }"
          @click="selectSection(name, id)"
        >
          <component :is="icon" />
          <p>{{ name }}</p>
        </div>
      </div>

      <div class="other-links-wrapper">
        <DoubleChevronLeft class="logout" @click="showLogoutModal = true" />
        <DoubleChevronLeft class="close-mobile-menu" @click="openNav = false" />
      </div>
    </nav>
  </transition>

  <LogoutModal v-model="showLogoutModal" />
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
const showLogoutModal = ref(false);
const selectedSection = ref("Bem Vindo");

const sections = [
  { name: "Bem Vindo", id: "welcome", icon: WelcomeIcon },
  { name: "Terminal e Git", id: "terminal", icon: TerminalIcon },
  { name: "Html e Css", id: "html", icon: HtmlIcon },
  { name: "JavaScript", id: "javascript", icon: JavascriptIcon },
  { name: "Css avançado", id: "css", icon: CssIcon },
  { name: "React e TypeScript", id: "react", icon: ReactIcon },
  { name: "Próximos Passos...", id: "next", icon: NextStepsIcon },
];

const shouldOpenSidebar = () => {
  const mediaQueryWatcher = window.matchMedia("(min-width: 1050px)");

  function handleWindowResize(event: MediaQueryListEvent) {
    openNav.value = event.matches;
  }

  mediaQueryWatcher.addEventListener("change", handleWindowResize);

  handleWindowResize(mediaQueryWatcher as unknown as MediaQueryListEvent);

  onUnmounted(() =>
    mediaQueryWatcher.removeEventListener("change", handleWindowResize)
  );
};

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

  window.scrollTo({
    top: targetElement.offsetTop - headerHeight,
  });

  setTimeout(turnOnScrollListener, 500);
};

const turnOnScrollListener = () =>
  window.addEventListener("scroll", srollListener);

const turnOffScrollListener = () =>
  window.removeEventListener("scroll", srollListener);

const srollListener = () => {
  sections.forEach((section) => {
    const targetElement = document.getElementById(section.id);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect();

      if (elementPosition.top <= 200) {
        selectedSection.value = section.name;
      }
    }
  });
};

onMounted(() => {
  shouldOpenSidebar();
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .nav-links-wrapper {
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

  .other-links-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    .logout,
    .close-mobile-menu {
      width: 1.3rem;
      height: 1.3rem;
      cursor: pointer;
    }
    .close-mobile-menu {
      display: none;
    }
  }
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
