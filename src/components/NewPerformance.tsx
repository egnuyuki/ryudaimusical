import H2 from "./H2";
import Image from "next/image";
import Link from 'next/link'
export default function NewPerformance() {
    return (
        <div className="w-full md:w-10/12 mx-auto my-10 px-4 pt-8 flex justify-center flex-col  max-w-screen-xl">
          <H2 h2J='最新公演情報' h2E='Performance'/>
          <div className="w-full md:w-10/12 mx-auto px-8 pt-8 flex justify-center items-center gap-8 flex-col  max-w-screen-xl">
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/poster2023.png"
                alt="ITH-poster"
                width={400}
                height={50}
                priority
            />
            <Link href="/2023" target="blank">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-lg font-semibold py-4 px-6 rounded-lg shadow-md hover:shadow-sm hover:translate-y-1 transform transition-all duration-300">特設サイトはコチラ！</button>
            </Link>
          </div>
        </div>
    );
}