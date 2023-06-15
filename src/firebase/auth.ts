import {
  signOut,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import firebaseApp from '@/firebase/config'
import { fetchUserInfo, postUserInfo } from '@/firebase/database'

const auth = getAuth(firebaseApp)

export async function login(email: string, password: string): Promise<any> {
  try {
    await signInWithEmailAndPassword(auth, email, password)

    const user = await fetchUserInfo(auth.currentUser?.uid as string)

    return user
  } catch (error) {
    console.log(error)
  }
}

export async function logon(email: string, password: string): Promise<any> {
  try {
    await createUserWithEmailAndPassword(auth, email, password)

    const user = await postUserInfo(auth.currentUser?.uid as string, {
      email,
    })

    return user
  } catch (error) {
    console.log(error)
  }
}

export async function logout(): Promise<void> {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}
