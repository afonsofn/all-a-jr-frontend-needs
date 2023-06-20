<template>
  <section>
    <ContentToggle>
      <template #title>Terminal</template>

      <ContentToggle v-for="(data, index) in content" :key="index">
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
defineProps<{
  content: any[];
}>();
</script>
