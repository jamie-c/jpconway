import Footer from '../components/Footer'
import Header from '../components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

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
        <html lang="en">
            <body className={`${inter.className} bg-pureWhite-100 text-tricornBlack-500`}>
                {children}
                <Footer />
            </body>
        </html>
    )
}
