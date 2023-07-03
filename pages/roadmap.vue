<template>
  <section class="roadmap-wrapper">
    <WelcomeSection />

    <section
      v-for="(section, index) in roadmapSections"
      :key="index"
      class="content-wrapper"
    >
      <h2>{{ section.title }}</h2>

      <component
        :is="section.component"
        v-for="(content, contentIndex) in section.content"
        :key="contentIndex"
        :content="content"
      />
    </section>

    <button style="margin-top: 10rem" @click="logout">logout</button>
  </section>
</template>

<script setup lang="ts">
redirectIfNotLoggedIn();

const [terminalAndGitContent, htmlAndCssContent, javascriptContent] =
  await fetchSectionsContent(["terminalAndGit", "htmlAndCss", "javascript"]);

const roadmapSections = [
  {
    title: "Terminal e Git",
    content: terminalAndGitContent,
    component: defineAsyncComponent(
      () => import(`@/components/TerminalAndGitContent.vue`)
    ),
  },
  {
    title: "Html e Css",
    content: htmlAndCssContent,
    component: defineAsyncComponent(
      () => import(`@/components/HtmlAndCssContent.vue`)
    ),
  },
  {
    title: "JavaScript",
    content: javascriptContent,
    component: defineAsyncComponent(
      () => import(`@/components/JavascriptContent.vue`)
    ),
  },
];

const logout = async () => {
  try {
    await $fetch("http://localhost:3000/api/user", {
      method: "POST",
      params: {
        isLogout: true,
      },
    });

    useRouter().push("/");
  } catch (error) {
    exceptionsLogger(error, "pages/roadmap/logout");
  }
};
</script>

<style scoped lang="scss">
.roadmap-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (max-width: 620px) {
  .roadmap-wrapper {
    gap: 1rem;
  }
}
</style>
