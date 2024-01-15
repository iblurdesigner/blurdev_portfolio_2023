import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blur Dev Portfolio',
  description: 'Frontend React Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='!scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
