import { getDocument } from "../lib/firestore";

export default defineEventHandler(async (event) => {
  try {
    const { document } = getQuery(event);

    const docs = await getDocument("content", document as string);

    return docs;
  } catch (error: any) {
    return error.message;
  }
});
