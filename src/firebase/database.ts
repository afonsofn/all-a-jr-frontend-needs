import {
  getFirestore,
  DocumentReference,
  DocumentSnapshot,
  setDoc,
  updateDoc,
  serverTimestamp,
  doc,
  getDoc,
} from 'firebase/firestore'

import firebaseApp from '@/firebase/config'

const db = getFirestore(firebaseApp)

export async function fetchUserInfo(id: string): Promise<any> {
  try {
    if (!id) return

    const userRef: DocumentReference = doc(db, 'users', id)
    const userInfoRaw: DocumentSnapshot = await getDoc(userRef)
    const user = userInfoRaw.data()

    if (!user) {
      return alert('userNotFound')
    }

    return user
  } catch (error) {
    console.log(error)
  }
}

export async function postUserInfo(id: string, data: any): Promise<void> {
  try {
    await setDoc(
      doc(db, 'users', id),
      { ...data, createdAt: serverTimestamp() },
      { merge: true },
    )
  } catch (error) {
    console.log(error)
  }
}

export async function updateUserInfo(id: string, data: any): Promise<void> {
  try {
    await updateDoc(
      doc(db, 'users', id),
      { ...data, lastUpdate: serverTimestamp() },
      { merge: true },
    )
  } catch (error) {
    console.log(error)
  }
}
