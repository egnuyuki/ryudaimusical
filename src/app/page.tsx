"use client"
import Header from '@/components/Header'
import TwitterTimeline from '@/components/TwitterTimeline'
import Slider from '@/components/Slider'
import FirstView from '@/components/FirstView'
import Introduction from '@/components/Introduction'
import Welcome from '@/components/Welcome'
import Head from 'next/head'

export default function Home() {
  return (
    <div className=''>
      <main className="flex min-h-screen flex-col items-center justify-between py-20 md:py-10 lg:px-24">
        <Header/>
        <Slider/>
        <Welcome/>
        <Introduction/>
      </main>
      {/* <div className='px-2 lg:w-8/12 mx-auto'>
        <TwitterTimeline />
      </div> */}
    </div>
  )
}
