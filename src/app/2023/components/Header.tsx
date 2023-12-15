import Image from "next/image";
import Link from "next/link";
import BorderLine from "./BorderLine";

export default function Header() {
    return (
        <div id="header">
            <div className="relative w-screen py-6 px-8 bg-blue-950 flex justify-center items-center flex-wrap">
                <div className="absolute top-1/2 left-4 -translate-y-1/2 h-fit items-center flex">
                    <div className="self-stretch flex-col justify-center items-center gap-2 inline-flex">
                        <div className="w-[30px] h-[0px] border border-white"></div>
                        <div className="w-[30px] h-[0px] border border-white"></div>
                        <div className="w-[30px] h-[0px] border border-white"></div>
                    </div>
                </div>
                <div className="btn">
                    <div>
                        <Link href="/">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                                src="/rm-logo.svg"
                                alt="RM-Logo"
                                width={180}
                                height={50}
                                priority
                            />
                        </Link>
                    </div>
                </div>
                {/* <HeaderNav/> */}
            </div>
            <BorderLine />
        </div>
    )
}