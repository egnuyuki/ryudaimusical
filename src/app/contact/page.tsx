import Image from 'next/image'
import Performance from '@/components/Performance'
import FirstView from '@/components/FirstView'
import Header from '@/components/Header'
import Record from '@/components/Record '


export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between py-20 md:py-0 lg:px-24">
        <Header/>
        <div className="text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
          <p>
            琉大ミュージカル広報
          </p>
          お問い合わせは
          <a className='text-blue-200' href="mailto:ryudaimyusical1999@gmail.com">コチラ</a>
        </div>
        <div>
          
        </div>
      </main>
    </div>
  )
}
