export const redirectIfNotLoggedIn = async () => {
  const user: any = await $fetch("http://localhost:3000/api/user?check=true");

  if (!user?.uid) useRouter().push("/");
};

export const fetchSectionsContent = async (contentNames: string[]) => {
  try {
    const promises = contentNames.map((name) =>
      $fetch(`http://localhost:3000/api/content`, {
        params: {
          document: name,
        },
      })
    );

    const responses = await Promise.all(promises);

    return responses;
  } catch (error) {
    exceptionsLogger(error, "composables/useFetchContent");
    throw error;
  }
};

export const exceptionsLogger = async (error: any, path: string) => {
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
