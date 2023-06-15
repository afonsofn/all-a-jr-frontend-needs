import '@/styles/globals.scss'
import styles from '@/styles/header.module.scss'
// eslint-disable-next-line camelcase
import { Work_Sans } from 'next/font/google'
import { AuthContextProvider } from '@/context/AuthContext'
import { ReactNode } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Tudo que você precisa para se tornar um Dev FrontEnd Jr',
  description: 'Tudo que você precisa para se tornar um Dev FrontEnd Jr',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={workSans.className} suppressHydrationWarning={true}>
        <header className={styles.header}>
          <ThemeToggle />
        </header>

        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}
