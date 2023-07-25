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

      <footer>
        <p>
          Created and developed by
          <a href="https://www.linkedin.com/in/afonsofn/" target="_blank">
            <code>@raff</code>
          </a>
        </p>
      </footer>
    </div>
  </main>
</template>

<style src="@/style.scss" />
