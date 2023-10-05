import Image from "next/image";
import Footer from "./Footer";
import Link from "next/link";

export default function Header() {
    return (
        <div className="z-10 w-screen px-4 bg-black bg-opacity-50 items-center justify-between font-mono text-sm lg:flex mx-auto lg:fixed">
            <div className="fixed left-0 top-0 flex h-20 md:h-auto w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <div className="relative flex place-items-center 
                before:absolute before:h-20 before:w-20 before:translate-x-full before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] 
                after:absolute after:-z-20 after:h-20 after:w-20 after:translate-x-full-x-full after:rounded-full after:bg-gradient-radial after: from-white after:to-transparent after:blur-2xl after:content-['']">
                    <Link href="/">
                        <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/rm-logo.svg"
                        alt="Next.js Logo"
                        width={200}
                        height={50}
                        priority
                        />
                    </Link>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Footer/>
            </div>
        </div>
    );
}