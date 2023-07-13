import Footer from '../../components/Footer'
import Header from '../../components/Header'
import '../globals.css'
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
            <>
                <Header />
                <main className='min-h-[calc(100vh-4rem)] w-100 flex flex-col items-center pb-10'
                >
                    {children}
                </main>
            </>
    )
}
