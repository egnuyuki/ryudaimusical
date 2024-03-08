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
      src:"/images/sponsors/2024/sponsor1.png",
      alt:"sponsor1"
  },
  {
      No:2,
      src:"/images/sponsors/2024/sponsor2.png",
      alt:"sponsor2"
  },
  {
      No:3,
      src:"/images/sponsors/2024/sponsor3.png",
      alt:"sponsor3"
  },
  {
      No:4,
      src:"/images/sponsors/2024/sponsor4.png",
      alt:"sponsor4"
  },
  {
      No:5,
      src:"/images/sponsors/2024/sponsor5.png",
      alt:"sponsor5"
  },
  {
      No:6,
      src:"/images/sponsors/2024/sponsor6.png",
      alt:"sponsor6"
  },
  {
      No:7,
      src:"/images/sponsors/2024/sponsor7.png",
      alt:"sponsor7"
  },
  {
      No:8,
      src:"/images/sponsors/2024/sponsor8.png",
      alt:"sponsor8"
  },
  {
      No:9,
      src:"/images/sponsors/2024/sponsor9.png",
      alt:"sponsor9"
  },
  {
      No:10,
      src:"/images/sponsors/2024/sponsor10.png",
      alt:"sponsor10"
  },
  {
      No:11,
      src:"/images/sponsors/2024/sponsor11.png",
      alt:"sponsor11"
  },
  {
      No:12,
      src:"/images/sponsors/2024/sponsor12.png",
      alt:"sponsor12"
  },
  {
      No:13,
      src:"/images/sponsors/2024/sponsor13.png",
      alt:"sponsor13"
  },
  {
      No:14,
      src:"/images/sponsors/2024/sponsor14.png",
      alt:"sponsor14"
  },
  {
      No:15,
      src:"/images/sponsors/2024/sponsor15.png",
      alt:"sponsor15"
  },
  {
      No:16,
      src:"/images/sponsors/2024/sponsor16.png",
      alt:"sponsor16"
  },
  {
      No:17,
      src:"/images/sponsors/2024/sponsor17.png",
      alt:"sponsor17"
  },
  {
      No:19,
      src:"/images/sponsors/2024/sponsor19.png",
      alt:"sponsor19"
  },
  {
      No:18,
      src:"/images/sponsors/2024/sponsor18.png",
      alt:"sponsor18"
  },
]


export default function Home() {
  return (
    <div>
        <Header/>
        <FirstView src='/fv_4.jpg' srcM='/fv_4M.jpg' alt="fv_4"/>
        <main className="flex min-h-screen flex-col items-center justify-between pt-0 pb-20 lg:px-24">
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
