<template>
  <section>
    <WelcomeSection />

    <button @click="logout">logout</button>
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
