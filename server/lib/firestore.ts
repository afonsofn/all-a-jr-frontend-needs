import {
  collection,
  DocumentReference,
  DocumentSnapshot,
  updateDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { firestoreDb } from "./firebase";

export const getCollection = async (collectionName: string) => {
  const contentRef = collection(firestoreDb, collectionName);
  const contentRaw = await getDocs(contentRef);

  const contentData = Array.from(contentRaw.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return contentData;
};

export const getDocument = async (
  collectionName: string,
  documentId: string
) => {
  const contentRef: DocumentReference = doc(
    firestoreDb,
    collectionName,
    documentId
  );
  const contentRaw: DocumentSnapshot = await getDoc(contentRef);
  const content = contentRaw.data();

  return content;
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

export const patchDocument = async (
  collectionName: string,
  documentId: string,
  data: any
) => {
  await updateDoc(doc(firestoreDb, collectionName, documentId), data, {
    merge: true,
  });
};

export const deleteDocument = async (
  collectionName: string,
  documentId: string
) => {
  return await deleteDoc(doc(firestoreDb, collectionName, documentId));
};
