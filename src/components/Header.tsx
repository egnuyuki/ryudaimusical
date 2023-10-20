import Image from "next/image";
import HeaderNav from "./Header-nav";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-screen py-6 px-8 bg-white flex justify-center md:justify-between items-center flex-wrap">
            <div className="btn">
                <div>
                    <Link href="/">
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                            src="/rm-logo.svg"
                            alt="RM-Logo"
                            width={200}
                            height={50}
                            priority
                        />
                    </Link>
                </div>
            </div>
            <HeaderNav/>
        </div>
    )
}