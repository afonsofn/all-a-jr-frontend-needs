import { getDocument } from "../lib/firestore";
import { checkUser } from "../lib/auth";

export default defineEventHandler(async (event) => {
  try {
    const { document, check } = getQuery(event);

    if (check) {
      const user = checkUser();

      return user;
    }

    const user = await getDocument("users", document as string);

    return user;
  } catch (error: any) {
    return error.message;
  }
});
