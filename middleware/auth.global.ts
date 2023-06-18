export default defineNuxtRouteMiddleware(async (_to, from) => {
  const user: any = await $fetch("http://localhost:3000/api/user?check=true");

  if (user?.uid) return;

  if (from.path !== "/") navigateTo("/");
});
