"use client"
import FirstView from '@/components/FirstView'
import H1 from '@/components/H1'
import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Welcome from '@/components/Welcome'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <main className="flex flex-col items-center py-20 md:py-10 lg:px-24">
        <Header/>
        <FirstView/>
        <Welcome/>
        <Introduction/>
      </main>
    </div>
  )
}
