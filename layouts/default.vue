<template>
  <main>
    <TheSidebar />

    <div class="content-wrapper">
      <header>
        <ThemeSwitcher />
      </header>

      <div class="main-content">
        <slot />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
:root {
  --font-primary: #c0bed4;
  --font-secondary: #76738e;
  --font-tertiary: #b98501;

  --font-red: #bf4343;
  --font-green: #b5d750;

  --background-color: #232135;
  --background-color-secondary: #2d2a44;
  --background-color-tertiary: #393556;

  --main-font-weight: 300;
  --important-tips-shadow: 0 0 0 0 rgba(92, 92, 92, 0);
}

:root[data-theme="light"] {
  --font-primary: #424242;
  --font-secondary: #76738e;
  --font-tertiary: #ffb800;

  --font-red: #eb5757;
  --font-green: #b5d750;

  --background-color: #fff;
  --background-color-secondary: #f5f5f5;
  --background-color-tertiary: #eeeeec;

  --main-font-weight: 400;
  --important-tips-shadow: 3px 3px 15px 0 rgba(92, 92, 92, 0.143);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: "Inter";
  max-width: 100vw;
  overflow-x: hidden;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: var(--main-font-weight);
  scroll-behavior: smooth;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  color: var(--font-primary);
  background-color: var(--background-color);
}

a {
  color: inherit;
  text-decoration: none;
}

main {
  display: flex;

  .content-wrapper {
    flex: 1;

    header {
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 1rem;
      z-index: 998;
      background-image: linear-gradient(
        to bottom,
        var(--background-color),
        rgba(0, 0, 0, 0)
      );
      backdrop-filter: blur(1px);
      position: fixed;
    }

    .main-content {
      width: 100vw;
      max-width: 60rem;
      margin: 4rem auto;
      padding: 0 5rem;
    }

    @media (max-width: 1050px) {
      header {
        padding: 1rem 1.5rem;
      }

      .main-content {
        padding: 4.1rem 5rem;
      }
    }
  }
}

h1 {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
  max-width: 70%;
  margin-bottom: 2.5rem;

  strong {
    font-weight: 700;
  }

  @media (max-width: 826px) {
    max-width: 100%;
  }
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
}

blockquote {
  border-left: 0.125rem solid var(--font-primary);
  padding-left: 1rem;
}

strong {
  font-weight: 600;
}

code {
  color: var(--font-red);
  font-weight: 500;
  padding: 0.1rem 0.5rem;
  border-radius: 0.3rem;
  background-color: var(--background-color-tertiary);
}

ul > li {
  position: relative;
  padding-left: 1.4rem;
  margin-left: 0.4rem;
  margin-bottom: 0.3rem;
  list-style: none;

  &:before {
    content: "⏺";
    position: absolute;
    top: 4px;
    left: 0;
    font-size: 0.7rem;
    color: #5c80ff;
  }
}

ol {
  padding-left: 1.5rem;
  li {
    margin-bottom: 0.3rem;
  }
}

.block-code {
  border-radius: 0.3rem;
  padding: 1rem 1.5rem;
  background-color: var(--background-color-tertiary);
  white-space: nowrap;
  overflow-x: auto;
  margin-bottom: 0.5rem;

  p {
    display: inline-block;
  }

  .command {
    color: var(--font-red);
    font-weight: 500;
  }
  .string {
    color: var(--font-green);
    display: inline;
    font-weight: 400;
  }
  .comment {
    color: var(--font-tertiary);
    font-weight: 400;
  }
}

.tip-box {
  line-height: 1.3rem;
  background-color: var(--background-color-secondary);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.3rem;
  box-shadow: var(--important-tips-shadow);
}

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

div.line-space {
  margin: 0.5rem 0;
}

@media (max-width: 620px) {
  main > .content-wrapper > .main-content {
    padding: 1rem 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

// Animations
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

// Scrollbar Style
::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.3rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--font-primary);
  border-radius: 1rem;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--font-secondary);
}
</style>
