'use client'

import { useState, FormEvent } from 'react'
import { login, logon } from '@/firebase/auth'
import { useRouter } from 'next/navigation'
import styles from '@/styles/page.module.scss'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const loginForm = async (event: FormEvent) => {
    try {
      event.preventDefault()

      const user = await login(email, password)

      console.log(user)

      return router.push('/roadmap')
    } catch (error) {
      console.log(error)
    }
  }

  const logonForm = async (event: FormEvent) => {
    try {
      event.preventDefault()

      await logon(email, password)

      return router.push('/roadmap')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.formsWrapper}>
      <div className={styles.formWrapper}>
        <h1>Logon</h1>

        <form onSubmit={logonForm} className={styles.form}>
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="logonemail"
              id="logonemail"
              placeholder="example@mail.com"
            />
          </label>

          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="logonpassword"
              id="logonpassword"
              placeholder="password"
            />
          </label>

          <button type="submit">Sign up</button>
        </form>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.formWrapper}>
        <h1>Login</h1>

        <form onSubmit={loginForm} className={styles.form}>
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="loginemail"
              id="loginemail"
              placeholder="example@mail.com"
            />
          </label>

          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="loginpassword"
              id="loginpassword"
              placeholder="password"
            />
          </label>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  )
}
