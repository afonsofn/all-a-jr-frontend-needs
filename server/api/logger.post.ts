import { serverTimestamp } from "firebase/firestore";
import { postDocument } from "../lib/firestore";
import { getUserInfo } from "../lib/auth";
import { generateUniqueId } from "../lib/utils";

export default defineEventHandler(async (event) => {
  try {
    const { errorMessage } = await readBody(event);
    const user: any = getUserInfo();

    await postDocument("errors", generateUniqueId(), {
      error: errorMessage,
      user: user
        ? {
            displayName: user.displayName,
            uid: user.uid,
            email: user.email,
          }
        : null,
      createdAt: serverTimestamp(),
    });

    return true;
  } catch (error: any) {
    return error.message;
  }
});
