// const Date = [
//     {
//         img:"/home-icon.svg",
//         href:"/",
//     },
//     {
//         img:"/contact-icon.svg",
//         href:"/contact",
//     },
//     {
//         img:"/Instagram_Glyph_Gradient.png",
//         href:"https://www.instagram.com/ryudaimusical/",
//     },
//     {
//         img:"/icons8-twitterx-48.png",
//         href:"https://twitter.com/ryudaimusical",
//     },
// ]
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
            // <div className="relative justify-start items-start gap-4 md:flex hidden">
            //         {Date.map(date => {
            //         return (
            //             <div key = {date.img} className="w-10 h-10 bg-zinc-100 rounded-full shadow">
            //                 <Link href = {date.href} className="h-10" target="brank">
            //                     <div className="relative flex flex-col items-center justify-center h-10">
            //                         <div className="">
            //                             <Image
            //                             className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
            //                             src={date.img}
            //                             alt="Next.js Logo"
            //                             width={20}
            //                             height={20}
            //                             priority
            //                             />
            //                         </div>    
            //                         {/* <p className="text-[8px] font-normal font-['Inter']">{date.text}</p> */}
            //                     </div>
            //                 </Link>
            //             </div>
            //                 )
            //         })}
            // </div>
            <div className="relative justify-start items-start gap-4 md:flex hidden">
                
                <div className="w-10 h-10 bg-zinc-100 rounded-full shadow">
                    <Link href = "/" className="h-10">
                        <div className="relative flex flex-col items-center justify-center h-10">
                            <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
                            src="/home-icon.svg"
                            alt="home-icon"
                            width={20}
                            height={20}
                            priority
                            />
                        </div>
                    </Link>
                </div>


                <div className="w-10 h-10 bg-zinc-100 rounded-full shadow">
                    <Link href = "/contact" className="h-10">
                        <div className="relative flex flex-col items-center justify-center h-10">
                            <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
                            src="/contact-icon.svg"
                            alt="contact-icon"
                            width={20}
                            height={20}
                            priority
                            />
                        </div>
                    </Link>
                </div>


                <div className="w-10 h-10 bg-zinc-100 rounded-full shadow">
                    <Link href = "https://www.instagram.com/ryudaimusical/" className="h-10" target="brank">
                        <div className="relative flex flex-col items-center justify-center h-10">
                            <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
                            src="/Instagram_Glyph_Gradient.png"
                            alt="insta-icon"
                            width={20}
                            height={20}
                            priority
                            />
                        </div>
                    </Link>
                </div>


                <div className="w-10 h-10 bg-zinc-100 rounded-full shadow">
                    <Link href = "https://twitter.com/ryudaimusical" className="h-10" target="brank">
                        <div className="relative flex flex-col items-center justify-center h-10">
                            <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:inver text-xs"
                            src="/icons8-twitterx-48.png"
                            alt="x-icon"
                            width={20}
                            height={20}
                            priority
                            />
                        </div>
                    </Link>
                </div>
            </div>
    );
}

