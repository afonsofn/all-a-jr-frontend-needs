import { getDocument } from "../lib/firestore";
import { handleError } from "../lib/utils";

export default defineEventHandler(async (event) => {
  try {
    const { document, lang } = getQuery(event);

    const collection = ["pt-BR", "pt-PT"].includes(lang as string)
      ? "content"
      : "contentEnglish";

    return (await getDocument(
      collection,
      document as string
    )) as LessonContent[];
  } catch (error) {
    handleError(error);
  }
});
