import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
  User,
} from "firebase/auth";

import { firebaseAuth } from "./firebase";
import { handleError } from "./utils";

export const createUser = async (
  email: string,
  password: string
): Promise<void | string> => {
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    return handleError(error);
  }
};

export const getUserInfo = (): User | null => firebaseAuth.currentUser;

export const login = async (
  email: string,
  password: string
): Promise<UserCredential | unknown> => {
  try {
    return await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    return handleError(error);
  }
};

export const logout = async (): Promise<void | string> => {
  try {
    await signOut(firebaseAuth);
  } catch (error) {
    return handleError(error);
  }
};
