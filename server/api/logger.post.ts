import { serverTimestamp } from "firebase/firestore";
import { postDocument } from "../lib/firestore";
import { getUserInfo } from "../lib/auth";
import { generateUniqueId, handleError } from "../lib/utils";

export default defineEventHandler(async (event) => {
  try {
    const { errorMessage } = await readBody(event);
    const user = getUserInfo();

    await postDocument("errors", generateUniqueId(), {
      error: errorMessage,
      user: {
        displayName: user?.displayName,
        uid: user?.uid,
        email: user?.email,
      },
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    return handleError(error);
  }
});
