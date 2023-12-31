"use client"
import Header from '@/components/Header'
import FirstView from '@/components/FirstView'
import Introduction from '@/components/Introduction'
import Welcome from '@/components/Welcome'
import ScrollApeal from '@/components/ScrollApeal'
import React from 'react';
import NewPerformance from '@/components/NewPerformance'

const Home: React.FC = () => {
  return (
    // <Waterdrops>
    <div className=''>
      <Header/>
      <FirstView src='/fv_1.jpg' srcM='/fv_1M.jpg' alt='top画像'/>
      <main className="flex min-h-screen flex-col items-center justify-between py-0 lg:px-24">
        <Welcome/>
        <NewPerformance/>
        <Introduction/>
        <ScrollApeal/>
      </main>
    </div>
    // </Waterdrops>
  )
}

export default Home