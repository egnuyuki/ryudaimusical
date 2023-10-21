import Performance from '@/components/Performance'
import Header from '@/components/Header'
import Record from '@/components/Record '
import ScrollApeal from '@/components/ScrollApeal'
import FirstView from '@/components/FirstView'


export default function Home() {
  return (
    <div>
      <Header />
      <FirstView src='/fv_5.jpg' srcM='/fv_5M.jpg' alt='fv_5'/>
      <main className="flex flex-col items-center pt-0 pb-20 lg:px-24">
        <Performance />
        <Record/>
        <ScrollApeal/>
      </main>
    </div>
  )
}
