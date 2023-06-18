import { getCollection } from "../lib/firestore";

export default defineEventHandler(async (_event) => {
  try {
    const docs = await getCollection("content");

    return docs;
  } catch (error: any) {
    return error.message;
  }
});
