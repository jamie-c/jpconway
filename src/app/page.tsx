import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-4rem)]'>
        <Link href="/" title="jpconway.com" />
      </div>
      <Footer />
    </div>
  )
}
