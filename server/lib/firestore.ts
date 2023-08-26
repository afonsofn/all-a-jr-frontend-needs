import { getDoc, doc, setDoc } from "firebase/firestore";
import { firestoreDb } from "./firebase";
import { handleError } from "./utils";

export const getDocument = async (
  collectionName: string,
  documentId: string
) => {
  try {
    const document = await getDoc(doc(firestoreDb, collectionName, documentId));

    return document.data();
  } catch (error) {
    return handleError(error);
  }
};

export const postDocument = async (
  collectionName: string,
  documentId: string,
  data: Object
) => {
  await setDoc(doc(firestoreDb, collectionName, documentId), data, {
    merge: true,
  });
};
