<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <header>
    <ThemeSwitcher />
  </header>

  <main>
    <slot />
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
  --quick-tip-shadow: 0 0 0 0 rgba(92, 92, 92, 0);
}

:root[data-theme="light"] {
  --font-primary: #424242;
  --font-secondary: #76738e;
  --font-tertiary: #ffb800;

  --font-red: #eb5757;
  --font-green: #b5d750;

  --background-color: #fff;
  --background-color-secondary: #fff9ea;
  --background-color-tertiary: #eeeeec;

  --main-font-weight: 400;
  --quick-tip-shadow: 3px 3px 15px 0 rgba(92, 92, 92, 0.1);
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
}

body {
  color: var(--font-primary);
  background-color: var(--background-color);
}

a {
  color: inherit;
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 1rem;
}

main {
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 5rem;
}

h1 {
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
  max-width: 70%;

  strong {
    font-weight: 700;
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
  padding: 0 0.5rem;
  border-radius: 0.3rem;
  background-color: var(--background-color-tertiary);
}

ul {
  padding-left: 0.4rem;
  li {
    position: relative;
    padding-left: 1.4rem;
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
    font-weight: 400;
  }
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
