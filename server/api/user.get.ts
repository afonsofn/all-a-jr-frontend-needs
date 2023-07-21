import { getDocument } from "../lib/firestore";
import { getUserInfo } from "../lib/auth";
import { handleError } from "../lib/utils";

export default defineEventHandler(async (event) => {
  try {
    const { document, check } = getQuery(event);

    if (check) return getUserInfo();

    return await getDocument("users", document as string);
  } catch (error) {
    return handleError(error);
  }
});
