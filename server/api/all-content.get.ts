import { getCollection } from "../lib/firestore";
import { handleError } from "../lib/utils";

export default defineEventHandler(async () => {
  try {
    return await getCollection("content");
  } catch (error) {
    return handleError(error);
  }
});
