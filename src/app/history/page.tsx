import Image from 'next/image'
import Performance from '@/components/Performance'
import FirstView from '@/components/FirstView'
import Header from '@/components/Header'
import Record from '@/components/Record '


export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center py-20 md:py-10 lg:px-24">
        <Header />
        <FirstView/>
        <Performance />
        <Record/>
      </main>
    </div>
  )
}
