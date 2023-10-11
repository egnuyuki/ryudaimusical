const Date = [
    {
        text:"Menu",
        img:"/home-icon.svg",
        href:"/menu",
    },
    {
        text:"History",
        img:"/history-icon.svg",
        href:"/history",
    },
    // {
    //     text:"Note",
    //     img:"/note-icon.svg",
    //     href:"/note",
    // },
    {
        text:"Sponsor",
        img:"/sponsor-icon.svg",
        href:"/sponsor",
    },
    {
        text:"Contact",
        img:"/contact-icon.svg",
        href:"/contact",
    },
]
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
            <div className="w-80 h-20 px-10 py-10 justify-center items-center inline-flex md:h-auto border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800">
                <div className="h-10 px-5 justify-center items-center gap-8 inline-flex ">
                    {Date.map(date => {
                    return (
                        <div key = {date.text} className="">
                            <Link href = {date.href}>
                                <div className="relative flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full">
                                        <Image
                                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                        src={date.img}
                                        alt="Next.js Logo"
                                        width={50}
                                        height={50}
                                        priority
                                        />
                                    </div>    
                                    <p className="text-xs font-normal font-['Inter']">{date.text}</p>
                                </div>
                            </Link>
                        </div>
                            )
                    })}
                </div>
            </div>
    );
}

