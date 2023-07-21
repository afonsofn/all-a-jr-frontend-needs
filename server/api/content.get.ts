import { getDocument } from "../lib/firestore";
import { handleError } from "../lib/utils";

export default defineEventHandler(async (event) => {
  try {
    const { document } = getQuery(event);

    return await getDocument("content", document as string);
  } catch (error) {
    return handleError(error);
  }
});
