
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import './ui/globals.css'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MapaZZZ Next.js Admin Dashboard',
  description: 'Next.js Application',
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
