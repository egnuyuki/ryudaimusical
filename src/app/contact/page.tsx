import Header from '@/components/Header'
import ScrollApeal from '@/components/ScrollApeal'


export default function Home() {
  return (
    <div>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-between py-0 lg:px-24">
        <div className="text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
          <p>
            琉大ミュージカル広報
          </p>
          お問い合わせは
          <a className='text-blue-200' href="mailto:ryudaimyusical1999@gmail.com">コチラ</a>
        </div>
        <ScrollApeal/>
      </main>
    </div>
  )
}
