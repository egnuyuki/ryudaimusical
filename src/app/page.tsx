"use client"
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import FirstView from '@/components/FirstView'
import Introduction from '@/components/Introduction'
import Welcome from '@/components/Welcome'
import ScrollApeal from '@/components/ScrollApeal'
import H2 from '@/components/H2'
import Image from 'next/image'
import NewPerformance from '@/components/NewPerformance'
import Waterdrops from '@/components/WaterDrop'
// import ScrollToButton from '@/components/ScrollToButton'

export default function Home() {
  return (
    <div className=''>
      {/* <Waterdrops/> */}
      <Header/>
      <FirstView src='/fv_1.jpg' srcM='/fv_1M.jpg' alt='top画像'/>
      <main className="flex min-h-screen flex-col items-center justify-between py-0 lg:px-24">
        <Welcome/>
        <NewPerformance/>
        <Introduction/>
        <ScrollApeal/>
      </main>
    </div>
  )
}
