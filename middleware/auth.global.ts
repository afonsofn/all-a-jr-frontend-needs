import { User } from "firebase/auth";

export default defineNuxtRouteMiddleware(async (_to, from) => {
  const user: User = await $fetch("http://localhost:3000/api/user?check=true");

  if (user.uid) return;

  if (from.path !== "/") navigateTo("/");
});
