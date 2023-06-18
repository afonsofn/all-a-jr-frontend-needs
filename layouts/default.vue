<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <header>
    <ThemeToggle />
  </header>

  <main>
    <slot />
  </main>
</template>

<style>
:root {
  --font-primary: #c6c4d9;
  --font-secondary: #76738e;
  --font-tertiary: #e7cb7f;
  --background-color: #232135;
  --background-color-secondary: #2d2a44;
  /* --font-primary: #D9D9D9; // notion theme */
  /* --background-color: #191919; // notion theme */
}

:root[data-theme="light"] {
  --font-primary: #37352f;
  --font-secondary: #76738e;
  --font-tertiary: #e5c468;
  --background-color: #ffffff;
  --background-color-secondary: #efefef;
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

blockquote {
  border-left: 3px solid var(--font-primary);
  padding-left: 1rem;
}
</style>
