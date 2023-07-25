import { serverTimestamp } from "firebase/firestore";
import { postDocument } from "../lib/firestore";
import { generateUniqueId, handleError } from "../lib/utils";

export default defineEventHandler(async (event) => {
  try {
    const { errorMessage } = await readBody(event);

    await postDocument("errors", generateUniqueId(), {
      error: errorMessage,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    return handleError(error);
  }
});
