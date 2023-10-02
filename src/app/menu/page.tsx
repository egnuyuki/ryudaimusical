"use client"
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mb-40'>
    <main className="flex min-h-screen flex-col items-center py-24 lg:px-24">
        <div className="relative flex place-items-center 
                before:absolute before:h-20 before:w-20 before:translate-x-full before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 
                after:absolute after:-z-20 after:h-20 after:w-20 after:translate-x-full-x-full after:rounded-full after:bg-gradient-radial after: from-white after:to-transparent after:blur-2xl after:content-['']">
                    <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/rm-logo.svg"
                    alt="Next.js Logo"
                    width={250}
                    height={50}
                    priority
                    />
                </div>
      <div className="mt-10 mb-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link href="/">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Home{' '}
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

        <Link href="https://note.com/ryudaimusical/">
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
            後援団体、協賛協力団体
          </p>
        </div>
        </Link>

        <Link href="/privacypolicy">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Privacypolicy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            プライバシーポリシー
          </p>
        </div>
        </Link>

        <Link href="/contact">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Contact{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            お問い合わせ先
          </p>
        </div>
        </Link>
      </div>

    </main>
    </div>
  )
}
