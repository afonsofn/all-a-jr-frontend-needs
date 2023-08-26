export const exceptionsLogger = async (
  error: any,
  path: string
): Promise<void> => {
  try {
    const {
      public: { apiDomain },
    } = useRuntimeConfig();

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

    await $fetch(`${apiDomain}/api/logger`, {
      method: "POST",
      body: { errorMessage },
    });
  } catch (error) {}
};

export const contentTitleTranslations = computed<ContentTitles>(() =>
  ["pt-BR", "pt-PT"].includes(navigator.language)
    ? {
        welcome: "Bem Vindo",
        importantTips: "Dicas Importantes",
        terminalAndGit: "Terminal e Git",
        htmlAndCss: "Html e Css",
        javascript: "Javascript",
        advancedCss: "Css avançado",
        react: "React e TypeScript",
        nextSteps: "Próximos Passos...",
      }
    : {
        welcome: "Welcome",
        importantTips: "Important Tips",
        terminalAndGit: "Terminal and Git",
        htmlAndCss: "Html and Css",
        javascript: "Javascript",
        advancedCss: "Advanced Css",
        react: "React and TypeScript",
        nextSteps: "Next Steps...",
      }
);
