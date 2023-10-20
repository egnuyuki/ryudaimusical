"use client"
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import FirstView from '@/components/FirstView'
import Introduction from '@/components/Introduction'
import Welcome from '@/components/Welcome'
import ScrollApeal from '@/components/ScrollApeal'
// import ScrollToButton from '@/components/ScrollToButton'

export default function Home() {
  return (
    <div className=''>
      <Header/>
      <FirstView src='/fv_1.jpg' alt='top画像'/>
      <main className="flex min-h-screen flex-col items-center justify-between py-0 lg:px-24">
        <Welcome/>
        <Introduction/>
        <ScrollApeal/>
      </main>
    </div>
  )
}
