"use client"
import Header from './components/Header'
import FirstView from './components/FirstView'
import Introduction from './components/Introduction'
import ScrollApeal from './components/ScrollApeal'
import BorderLine from './components/BorderLine'
import Story from './components/Story'
import Credit from './components/Credit'
import Ticket from './components/Ticket'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='bg-blue-950'>
      <Header/>
      <main className="flex min-h-screen flex-col items-center py-0 lg:px-24 bg-">
        <FirstView/>
        <BorderLine />
        <Introduction />
        <BorderLine/>
        <Story/>
        <BorderLine/>
        <Credit />
        <BorderLine/>
        <Ticket/>
        <BorderLine/>
        <Footer/>
        <ScrollApeal/>
      </main>
    </div>
  )
}