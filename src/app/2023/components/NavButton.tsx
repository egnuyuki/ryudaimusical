import Image from 'next/image'
import Link from 'next/link'
import CircleNav from './CircleNav'

export default function NavButton () {

    return (
        <div className="w-full fixed z-20 bottom-8 left-0 flex gap-4 items-end justify-center">
            
            
            <div className="w-12 h-12 bg-zinc-100 rounded-full shadow translate-y-2 btn">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link className="" href="/" target=''>
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
                            src="/home-icon.svg"
                            alt="Next.js Logo"
                            width={20}
                            height={20}
                            priority
                        />
                    </Link> 
                </div>
            </div>
            
            
            <div className="relative w-12 h-12 bg-zinc-100 rounded-full shadow btn">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link className="" href="/contact" target=''>
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
                            src="/contact-icon.svg"
                            alt="Next.js Logo"
                            width={20}
                            height={20}
                            priority
                        />
                    </Link> 
                </div>
            </div>
            
            
            <CircleNav/>
            
            
            
            <div className="w-12 h-12 bg-zinc-100 rounded-full shadow relative btn">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link className="" href="https://www.instagram.com/ryudaimusical/" target='brank'>
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
                            src="/Instagram_Glyph_Gradient.png"
                            alt="Next.js Logo"
                            width={20}
                            height={20}
                            priority
                        />
                    </Link> 
                </div>
            </div>
            
            
            <div className="w-12 h-12 bg-zinc-100 rounded-full shadow translate-y-2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link className="" href="https://twitter.com/ryudaimusical" target='brank'>
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
                            src="/icons8-twitterx-48.png"
                            alt="Next.js Logo"
                            width={20}
                            height={20}
                            priority
                        />
                    </Link> 
                </div>
            </div>

            
        </div>
    )
}