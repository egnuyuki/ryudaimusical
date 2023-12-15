import Image from "next/image";
import Link from "next/link";
import BorderLine from "./BorderLine";

export default function Footer() {
    return (
        <div>
            <div className="relative w-screen py-16 px-8 bg-blue-950 flex flex-col gap-2 justify-center items-center flex-wrap">
                <div className="btn">
                    <div>
                        <Link href="/">
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] invert"
                                src="/rm-logo.svg"
                                alt="RM-Logo"
                                width={160}
                                height={50}
                                priority
                            />
                        </Link>
                    </div>
                </div>
                <div className="text-xs text-stone-300">©ryudaimusical2023</div>
            </div>
        </div>
    )
}