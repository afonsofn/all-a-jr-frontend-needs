<template>
  <section>
    <h2>Terminal e Git</h2>

    <ContentToggle>
      <template #title>Terminal</template>

      <ContentToggle v-for="(data, index) in content.terminal" :key="index">
        <template #title>{{ data.title }}</template>

        <template v-for="(item, itemIndex) in data.steps" :key="itemIndex">
          <li
            v-if="itemIndex !== data.steps.length - 1"
            v-safe-html="item"
          ></li>

          <ContentToggle v-else>
            <template #title>Resumo</template>

            <p v-safe-html="item"></p>
          </ContentToggle>
        </template>

        <template v-for="(item, itemIndex) in data.exercises" :key="itemIndex">
          <ContentToggle>
            <template #title>Exercício {{ itemIndex + 1 }}</template>

            <p v-safe-html="item.question"></p>
            <ContentToggle>
              <template #title>Gabarito</template>

              <p v-safe-html="item.answer"></p>
            </ContentToggle>
          </ContentToggle>
        </template>
      </ContentToggle>
    </ContentToggle>
  </section>
</template>

<script setup lang="ts">
const content = ref<any>(null);

try {
  const terminalAndGitContent = await $fetch(
    "http://localhost:3000/api/content?document=terminalAndGit"
  );

  content.value = terminalAndGitContent;
} catch (error) {
  exceptionsLogger(error, "components/terminalAndGitSection");
}
</script>

<style scoped>
h2 {
  margin-bottom: 0.5rem;
}
</style>
