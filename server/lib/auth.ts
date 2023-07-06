import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserCredential,
  User,
} from "firebase/auth";

import { firebaseAuth } from "./firebase";

export const createUser = async (
  email: string,
  password: string
): Promise<void> => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const getUserInfo = (): User | null => {
  return firebaseAuth.currentUser;
};

export const login = async (
  email: string,
  password: string
): Promise<UserCredential | unknown> => {
  try {
    const user = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    return user;
  } catch (error) {
    return error;
  }
};

export const logout = async (): Promise<void> => {
  await signOut(firebaseAuth);
};
