'use client'

import { useEffect } from 'react'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { logout } from '@/firebase/auth'

export default function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user == null) router.push('/')
  }, [router, user])

  return (
    <div>
      <h1>Only logged in users can view this page</h1>
      <div>{JSON.stringify(user, undefined, 2)}</div>
      <button onClick={() => logout()}>LOGOUT</button>
    </div>
  )
}
