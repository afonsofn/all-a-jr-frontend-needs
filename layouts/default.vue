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
  --font-primary: #c6c4d9;
  --font-secondary: #76738e;
  --font-tertiary: #e7cb7f;
  --font-red: #bf4343;
  --font-green: #b5d750;
  --background-color: #232135;
  --background-color-secondary: #2d2a44;
  --background-color-tertiary: #393556;
  /* --font-primary: #D9D9D9; // notion theme */
  /* --background-color: #191919; // notion theme */
}

:root[data-theme="light"] {
  --font-primary: #37352f;
  --font-secondary: #76738e;
  --font-tertiary: #e5c468;
  --font-red: #eb5757;
  --font-green: #b5d750;
  --background-color: #ffffff;
  --background-color-secondary: #efefef;
  --background-color-tertiary: #eeeeec;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: "Work Sans";
  max-width: 100vw;
  overflow-x: hidden;
  font-size: 1rem;
  line-height: 1.4;
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
  max-width: 55rem;
  margin: 0 auto;
  padding: 0 5rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
}

h3 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2;
}

blockquote {
  border-left: 3px solid var(--font-primary);
  padding-left: 1rem;
}

strong {
  font-weight: 600;
}

code {
  color: var(--font-red);
  font-weight: 600;
  padding: 0 0.5rem;
  border-radius: 0.3rem;
  background-color: var(--background-color-tertiary);
}

ol,
ul {
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
    font-weight: 600;
  }
  .string {
    color: var(--font-green);
    font-weight: 600;
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
