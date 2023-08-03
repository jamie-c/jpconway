import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jamie Conway!',
  description: 'Written pieces, talks, and other bits by Jamie Conway.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='scroll-smooth'>
            <body className={`${inter.className} bg-pureWhite-100 text-tricornBlack-500 dark:bg-tricornBlack-700 dark:text-pureWhite-200`}>
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    )
}
