import { User } from "firebase/auth";

export const redirectIfNotLoggedIn = async () => {
  const user: User = await $fetch("http://localhost:3000/api/user?check=true");

  if (!user?.uid) useRouter().push("/");
};

export const exceptionsLogger = async (
  error: any,
  path: string
): Promise<void> => {
  try {
    const errorMessage = `${path} \n ${JSON.stringify(
      {
        error: error.name,
        message: error.message,
        url: error.config ? error.config.url : "-",
        method: error.config ? error.config.method : "-",
        title: error.response ? error.response.data?.title : "-",
        status: error.response ? error.response.status : "-",
        detail: error.response ? error.response.data?.detail : "-",
      },
      null,
      2
    )}`;

    await $fetch("http://localhost:3000/api/logger", {
      method: "POST",
      body: { errorMessage },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("erro no exceptionsLogger kkkkk");
  }
};
