import Image from 'next/image'
import Header from '@/components/Header'
import Link from 'next/link'


export default function Home() {
  return (
    <div className=''>
      <main className="flex flex-col items-center py-20 lg:px-24 h-screen justify-between">
        <Header/>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/ComingSoon.svg"
          alt="Next.js Logo"
          width={250}
          height={50}
          priority
        />
        <div className="mt-10 mb-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/about">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`px-2 max-w-[30ch] text-sm opacity-50`}>
            琉大ミュージカルについて<br />部署について<br />
            <span className='text-xs'>ex)キャスト・スタッフ・オーケストラ</span>
          </p>
        </div>
        </Link>
        
        <Link href="/history">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            History{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            琉大ミュージカルの歴史<br />過去の公演記録<br />25年の歴史を振り返ります
          </p>
        </div>
        </Link>

        <Link href="/note">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Note{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            琉大ミュージカルの過去のブログ<br />制作部紹介など

          </p>
        </div>
        </Link>

        <Link href="/sponsor">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sponsor{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            お問い合わせ
          </p>
        </div>
        </Link>
      </div>
      </main>
    </div>
  )
}
