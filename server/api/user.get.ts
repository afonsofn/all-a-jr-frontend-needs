import { getDocument } from "../lib/firestore";
import { getUserInfo } from "../lib/auth";

export default defineEventHandler(async (event) => {
  try {
    const { document, check } = getQuery(event);

    if (check) return getUserInfo();

    const user = await getDocument("users", document as string);

    return user;
  } catch (error) {
    if (error instanceof Error) return error.message;
    return String(error);
  }
});
