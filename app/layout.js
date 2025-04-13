
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import './ui/globals.css'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MapaZZZ - Sistema de Gestão de Zonas de Risco',
  description: 'Sistema de Gestão de Zonas de Risco',
  icons: {
    icon: '/logoTrans.png',
  },
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
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
