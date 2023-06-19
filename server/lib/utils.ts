export const generateUniqueId = (noDate = false): string => {
  const currentDate = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  const formattedDate = currentDate.split(" ")[0].replaceAll("/", "-");

  const randomId = Array(3)
    .fill("")
    .map(() => Math.floor(Date.now() * Math.random()).toString(36))
    .join("");

  return noDate ? randomId : `${formattedDate}-${randomId}`;
};
