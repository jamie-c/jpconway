import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LandingPage from '@/components/LandingPage'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <header></header>
            <main className='min-h-100 w-100 flex flex-col items-center pb-10'
            >
                <LandingPage />
            </main>
        </>
    )
}
