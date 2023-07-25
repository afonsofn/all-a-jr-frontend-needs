import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { firestoreDb } from "./firebase";
import { handleError } from "./utils";

export const getCollection = async (collectionName: string) => {
  try {
    const documents = await getDocs(collection(firestoreDb, collectionName));

    return Array.from(documents.docs).map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    return handleError(error);
  }
};

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
