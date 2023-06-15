import './globals.css'
import { Poppins } from 'next/font/google'
import { AuthContextProvider } from '@/context/AuthContext'
import { ReactNode } from 'react'

const poppins = Poppins({ weight: '200', subsets: ['latin'] })

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
      <body className={poppins.className} suppressHydrationWarning={true}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  )
}
