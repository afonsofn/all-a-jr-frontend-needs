<template>
  <main>
    <TheSidebar />

    <div class="main-wrapper">
      <header>
        <ThemeSwitcher />
      </header>

      <section class="roadmap">
        <SkeletonLoading v-if="loading"></SkeletonLoading>
        <template v-else>
          <WelcomeSection />
          <ContentSection />
          <NextStepsSection />
        </template>
      </section>

      <footer>
        <p>
          Created and developed by
          <a href="https://www.linkedin.com/in/afonsofn/" target="_blank">
            <code>@raff</code>
          </a>
        </p>
        <p>
          Designed by
          <a href="https://www.linkedin.com/in/marianavida/" target="_blank">
            <code>@mari</code>
          </a>
        </p>
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { contentIcons } from "@/icons";

const loading = ref(true);

onBeforeMount(async () => {
  try {
    const {
      public: { apiDomain },
    } = useRuntimeConfig();

    const contentKeys: ContentKeys[] = [
      "welcome",
      "terminalAndGit",
      "htmlAndCss",
      "javascript",
      "advancedCss",
      "react",
      "nextSteps",
    ];

    const fetchedContents = await Promise.all(
      contentKeys.map((key) =>
        $fetch(`${apiDomain}/api/content`, {
          params: { document: key, lang: navigator.language },
        })
      )
    );

    const roadmapSections: RoadmapSections[] = contentKeys.map(
      (key: ContentKeys, index) => ({
        name: contentTitleTranslations.value[key],
        id: key,
        icon: markRaw(contentIcons[key]),
        content: fetchedContents[index],
      })
    );

    useState("roadmapSections", () => roadmapSections);

    loading.value = false;
  } catch (error) {
    exceptionsLogger(error, "pages/index/onBeforeMount");
  }
});
</script>

<style src="@/style.scss" />
