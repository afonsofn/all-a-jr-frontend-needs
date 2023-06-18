import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { firebaseAuth } from "./firebase";

export const createUser = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const checkUser = () => {
  return firebaseAuth.currentUser;
};

export const login = async (email: string, password: string) => {
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

export const logout = async () => {
  await signOut(firebaseAuth);
};
