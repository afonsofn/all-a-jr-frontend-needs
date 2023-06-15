'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import { onAuthStateChanged, getAuth, User } from 'firebase/auth'
import firebaseApp from '@/firebase/config'

interface AuthContextType {
  user: User | null
}

interface AuthContextProviderProps {
  children: ReactNode
}

const auth = getAuth(firebaseApp)

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
        }
        setLoading(false)
      })

      return () => unsubscribe()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
