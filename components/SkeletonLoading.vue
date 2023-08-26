<template>
  <div class="skeleton-title"></div>
  <div class="skeleton-description"></div>
  <div class="skeleton-tips"></div>
  <div class="skeleton-box"></div>
  <div class="skeleton-box"></div>
  <div class="skeleton-box"></div>
  <div class="skeleton-box"></div>
  <div class="skeleton-box"></div>
</template>

<style scoped lang="scss">
.skeleton-title {
  width: 100%;
  height: 4.75rem;
  max-width: 65%;
  margin-bottom: 1rem;

  @media (max-width: 620px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 826px) {
    max-width: 100%;
  }
}

.skeleton-description {
  width: 100%;
  height: 10rem;
}

.skeleton-tips {
  width: 11.25rem;
  height: 1.75rem;
}
.skeleton-box {
  width: 20rem;
  height: 8rem;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton-title,
.skeleton-description,
.skeleton-tips,
.skeleton-box {
  background: linear-gradient(90deg, #312f4c, #2d2a44, #393556);
  animation: shimmer 2.5s infinite;
  background-size: 200% 100%;
  border-radius: 0.5rem;
}
</style>
