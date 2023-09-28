import Image from 'next/image'
import Performance from '@/components/Performance'
import FirstView from '@/components/FirstView'
import Header from '@/components/Header'
import Record from '@/components/Record '


export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between py-20 md:py-10 lg:px-24">
        <Header/>
        <div className="my-5 text-2xl">
          <p>
            琉大ミュージカル広報
          </p>
          <a href="mailto:ryudaimyusical1999@gmail.com">Mail：ryudaimyusical1999@gmail.com</a>
        </div>
        <div>
          
        </div>
      </main>
    </div>
  )
}
