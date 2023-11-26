const Date = [
    {
        titleJ:"キャスト",
        titleE:"CAST",
        img:"/キャスト.png",
        href:"#dep-cast",
    },
    {
        titleJ:"スタッフ",
        titleE:"STAFF",
        img:"/スタッフ.png",
        href:"#dep-staff",
    },
    {
        titleJ:"オーケストラ",
        titleE:"ORCHESTRA",
        img:"/オーケストラ.png",
        href:"#dep-orchestra",
    },
]

import H3 from "./H3"
import Image from "next/image"
import ScrollToButton from "./ScrollToButton"

export default function Dep () {

    return (
        <div>
            <div className="w-full justify-center items-center flex-col md:flex-row flex gap-10 my-10">
                <div className="border p-8 rounded-xl flex flex-col items-center gap-2 shadow-lg">
                    <div className="mx-auto relative mt-4">
                        <div className="text-zinc-800 dark:text-white text-xl font-normal mx-auto text-center">キャスト</div>
                        <div className="text-blue-300 dark:text-blue-50 text-opacity-20 dark:text-opacity-20 text-3xl font-normal mx-auto text-center absolute -top-2/4 left-2/4 -translate-x-2/4">Cast</div>
                    </div>
                    <div className="w-40 h-40 bg-zinc-300 rounded-full">
                        <Image
                            src="/キャスト.png"
                            alt="25thImage"
                            className="rouded-full overflow-hidden"
                            width={160}
                            height={160}
                            priority
                        />
                    </div>
                    <ScrollToButton targetId="dep-cast" text="詳しく見る" className=""/>
                </div>
                    <div className="border p-8 rounded-xl flex flex-col items-center gap-2 shadow-lg">
                        <div className="mx-auto relative mt-4">
                            <div className="text-zinc-800 dark:text-white text-xl font-normal mx-auto text-center">スタッフ</div>
                            <div className="text-blue-300 dark:text-blue-50 text-opacity-20 dark:text-opacity-20 text-3xl font-normal mx-auto text-center absolute -top-2/4 left-2/4 -translate-x-2/4">STAFF</div>
                        </div>
                        <div className="w-40 h-40 bg-zinc-300 rounded-full">
                            <Image
                            src="/スタッフ.png"
                            alt="25thImage"
                            className="rouded-full overflow-hidden"
                            width={160}
                            height={160}
                            priority
                            />
                        </div>
                        <ScrollToButton targetId="dep-staff" text="詳しく見る" className=""/>
                    </div>
                    <div className="border p-8 rounded-xl flex flex-col items-center gap-2 shadow-lg">
                        <div className="mx-auto relative mt-4">
                            <div className="text-zinc-800 dark:text-white text-xl font-normal mx-auto text-center">オーケストラ</div>
                            <div className="text-blue-300 dark:text-blue-50 text-opacity-20 dark:text-opacity-20 text-3xl font-normal mx-auto text-center absolute -top-2/4 left-2/4 -translate-x-2/4">ORCHESTRA</div>
                        </div>
                        <div className="w-40 h-40 bg-zinc-300 rounded-full">
                            <Image
                            src="/オーケストラ.png"
                            alt="25thImage"
                            className="rouded-full overflow-hidden"
                            width={160}
                            height={160}
                            priority
                            />
                        </div>
                        <ScrollToButton targetId="dep-orchestra" text="詳しく見る" className=""/>
                    </div>
            </div>
            <div className="my-40">
                <div id="dep-cast" className="my-20">
                    <H3 h3J="キャスト" />
                    <div className="flex flex-col items-center mt-16 gap-10">
                        <Image
                        src="/S__10133536_M.jpg"
                        alt="25thImage"
                        className=""
                        width={650}
                        height={650}
                        priority
                        />
                        <p className="">
                            ライトに照らされた舞台の上で、歌って、踊って、演じるのが キャスト です。これまでの自分とは違った、新しい自分に出会えます。
                        </p>
                    </div>
                </div>
                <div id="dep-staff">
                    <H3 h3J="スタッフ" />
                    <div className="flex flex-col items-center mt-16 gap-10">
                        <Image
                        src="/S__72253473_0_M.jpg"
                        alt="25thImage"
                        className=""
                        width={650}
                        height={650}
                        priority
                        />
                        <p className="">
                            道具、衣装、音、光。これらを用いて舞台を彩るのが スタッフ です。琉大ミュージカルでは、道具・衣装の制作、転換、音響、照明、早着替えの補助の仕事を担います。
                        </p>
                    </div>
                </div>
                <div id="dep-orchestra">
                    <H3 h3J="オーケストラ" />
                    <div className="flex flex-col items-center gap-10 my-16">
                        <Image
                        src="/S__56410147_M.jpg"
                        alt="25thImage"
                        className=""
                        width={650}
                        height={650}
                        priority
                        />
                        <p className="">
                            オーケストラ は、ミュージカルの楽曲を実際に演奏し、吹奏楽とも管弦楽とも違う編成で音楽を作り上げます。お客さんの笑顔と拍手を一番近くで見ることができます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
