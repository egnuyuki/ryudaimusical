const Date = [
    {
        text:"Home",
        img:"/home-icon.svg",
        href:"/",
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
            <div className="w-80 h-14 px-10 py-10 justify-center items-center inline-flex">
                <div className="h-10 px-5 justify-center items-center gap-8 inline-flex">
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

