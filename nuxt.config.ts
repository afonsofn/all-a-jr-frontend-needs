export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiKey: "AIzaSyA9csunqsbZ2NmXLT51IGfjW0S4qvfk5aQ",
      authDomain: "all-a-jr-frontend-needs.firebaseapp.com",
      projectId: "all-a-jr-frontend-needs",
      storageBucket: "all-a-jr-frontend-needs.appspot.com",
      messagingSenderId: "833309274820",
      appId: "1:833309274820:web:1fc512eb4642282cbb4f91",
      measurementId: "G-1MXT4BXNW0",
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
