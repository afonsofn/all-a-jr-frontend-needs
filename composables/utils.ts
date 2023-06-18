export const redirectIfNotLoggedIn = async () => {
  const user: any = await $fetch("http://localhost:3000/api/user?check=true");

  if (!user?.uid) useRouter().push("/");
};
