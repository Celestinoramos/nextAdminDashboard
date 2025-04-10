import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ['latin']})

export const metadata = {
    title: 'Mapazzz Admin Dashboard',
    description: 'Next.js'
}

export default function RootLayaut({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}