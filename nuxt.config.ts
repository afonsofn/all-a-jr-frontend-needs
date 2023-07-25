export default defineNuxtConfig({
  app: {
    head: {
      title: "Tudo que você precisa para se tornar um Dev FrontEnd Jr",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: import.meta.env.API_KEY,
      authDomain: import.meta.env.AUTH_DOMAIN,
      projectId: import.meta.env.PROJECT_ID,
      storageBucket: import.meta.env.STORAGE_BUCKET,
      messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
      appId: import.meta.env.APP_ID,
      measurementId: import.meta.env.MEASUREMENT_ID,
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: {
            wght: [300, 400, 500, 600, 700],
            ital: [300],
          },
          download: true,
          inject: true,
        },
      },
    ],
  ],
});
