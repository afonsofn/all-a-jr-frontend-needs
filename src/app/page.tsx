import AuthForm from '@/components/AuthForm'
import styles from '@/styles/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Tudo que você precisa para se tornar um Dev FrontEnd Jr</h1>

      <AuthForm />
    </main>
  )
}
