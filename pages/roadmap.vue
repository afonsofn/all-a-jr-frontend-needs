<template>
  <section class="roadmap-wrapper">
    <WelcomeSection />
    <TerminalAndGitSection />

    <button style="margin-top: 10rem" @click="logout">logout</button>
  </section>
</template>

<script setup lang="ts">
redirectIfNotLoggedIn();

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

@media (max-width: 620px) {
  .roadmap-wrapper {
    gap: 1rem;
  }
}
</style>
