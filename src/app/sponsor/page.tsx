import Image from 'next/image'
import Performance from '@/components/Performance'
import FirstView from '@/components/FirstView'
import Header from '@/components/Header'
import Record from '@/components/Record '
import H2 from '@/components/H2'
import ScrollApeal from '@/components/ScrollApeal'

const Date = [
  {
      No:1,
      src:"/images/sponsors/sponsor1.jpg",
      alt:"sponsor1"
  },
  {
      No:2,
      src:"/images/sponsors/sponsor2.jpg",
      alt:"sponsor2"
  },
  {
      No:3,
      src:"/images/sponsors/sponsor3.jpg",
      alt:"sponsor3"
  },
  {
      No:4,
      src:"/images/sponsors/sponsor4.jpg",
      alt:"sponsor4"
  },
  {
      No:5,
      src:"/images/sponsors/sponsor5.jpg",
      alt:"sponsor5"
  },
  {
      No:6,
      src:"/images/sponsors/sponsor6.jpg",
      alt:"sponsor6"
  },
  {
      No:7,
      src:"/images/sponsors/sponsor7.jpg",
      alt:"sponsor7"
  },
  {
      No:8,
      src:"/images/sponsors/sponsor8.jpg",
      alt:"sponsor8"
  },
  {
      No:9,
      src:"/images/sponsors/sponsor9.jpg",
      alt:"sponsor9"
  },
  {
      No:10,
      src:"/images/sponsors/sponsor10.jpg",
      alt:"sponsor10"
  },
  {
      No:11,
      src:"/images/sponsors/sponsor11.jpg",
      alt:"sponsor11"
  },
  {
      No:12,
      src:"/images/sponsors/sponsor12.jpg",
      alt:"sponsor12"
  },
  {
      No:13,
      src:"/images/sponsors/sponsor13.jpg",
      alt:"sponsor13"
  },
  {
      No:14,
      src:"/images/sponsors/sponsor14.jpg",
      alt:"sponsor14"
  },
  {
      No:15,
      src:"/images/sponsors/sponsor15.jpg",
      alt:"sponsor15"
  },
  {
      No:16,
      src:"/images/sponsors/sponsor16.jpg",
      alt:"sponsor16"
  },
  {
      No:17,
      src:"/images/sponsors/sponsor17.jpg",
      alt:"sponsor17"
  },
]


export default function Home() {
  return (
    <div>
        <Header/>
        <FirstView src='/fv_4.jpg' alt="fv_4"/>
        <main className="flex min-h-screen flex-col items-center justify-between py-20 md:py-0 lg:px-24">
            <div className="w-full md:w-10/12 mx-auto my-10 px-4 py-8 flex justify-center flex-col  max-w-screen-xl" id="sponsors">
                <H2 h2J='協賛企業' h2E='Sponsors'/>
                {Date.map(date => {
                    return (
                    <div key = {date.No} className="w-full mt-10 flex justify-center">
                        <Image
                        src={date.src}
                        alt={date.alt}
                        className="rouded-full"
                        width={800}
                        height={650}
                        priority
                        />
                    </div>
                    )
                })}
            </div>
            <ScrollApeal/>
        </main>
    </div>
  )
}
