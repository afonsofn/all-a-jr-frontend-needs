<template>
  <main>
    <TheSidebar />

    <div class="main-wrapper">
      <header>
        <ThemeSwitcher />
      </header>

      <section class="roadmap">
        <WelcomeSection />
        <ContentSection />
        <NextStepsSection />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { User } from "firebase/auth";

const user: User = await $fetch("http://localhost:3000/api/user?check=true");

if (!user?.uid) useRouter().push("/");
</script>

<style scoped lang="scss">
main {
  display: flex;

  .main-wrapper {
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

    .roadmap {
      width: 100vw;
      max-width: 60rem;
      margin: 4rem auto;
      padding: 0 5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    @media (max-width: 1050px) {
      header {
        padding: 1rem 1.5rem;
      }

      .roadmap {
        padding: 4.1rem 5rem;
      }
    }

    @media (max-width: 620px) {
      .roadmap {
        padding: 1rem 1.5rem;
        gap: 1rem;
      }
    }
  }
}
</style>
