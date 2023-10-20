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

export default function Dep () {

    return (
        <div>
            <div className='w-full justify-center items-center flex-col md:flex-row flex gap-10 my-10'>
            {Date.map(date => {
                const scrollToSection = () => {
                    const target = document.getElementById(date.href);
                    const offset = 120;  // Adjust this value as needed
                    if (target) {
                      window.scrollTo({
                        top: target.offsetTop - offset,
                        behavior: 'smooth'
                      });
                    }
                    console.log(target);
                };
                return (
                    <div key = {date.titleJ}>
                        <div className="border p-8 rounded-xl flex flex-col items-center gap-2">
                            <div className="mx-auto relative mt-4">
                                <div className="text-zinc-800 dark:text-white text-xl font-normal mx-auto text-center">{date.titleJ}</div>
                                <div className="text-blue-300 dark:text-blue-50 text-opacity-20 dark:text-opacity-20 text-3xl font-normal mx-auto text-center absolute -top-2/4 left-2/4 -translate-x-2/4">{date.titleE}</div>
                            </div>
                            <div className="w-40 h-40 bg-zinc-300 rounded-full">
                                <Image
                                src={date.img}
                                alt="25thImage"
                                className="rouded-full overflow-hidden"
                                width={160}
                                height={160}
                                priority
                                />
                            </div>    
                            <div 
                            onClick={scrollToSection} 
                              className="cursor-pointer p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                            // className={combinedClass}
                            role="button" 
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === "Space") {
                                scrollToSection();
                                }
                            }}
                            >
                            詳しく見る
                            </div>
                        </div>
                    </div>
                            )
                        })}
            </div>
            <div className="my-10">
                <div id="dep-cast">
                    <H3 h3J="キャスト" />
                    <Image
                    src="/S__10133536.jpg"
                    alt="25thImage"
                    className="firstview hidden md:block"
                    width={650}
                    height={650}
                    priority
                    />
                    <Image
                    src="/S__10133536_M.jpg"
                    alt="25thImage"
                    className="firstview md:hidden"
                    width={650}
                    height={650}
                    priority
                    />
                    <p className="my-2">
                        ライトに照らされた舞台の上で、歌って、踊って、演じるのが キャスト です。これまでの自分とは違った、新しい自分に出会えます。
                    </p>
                </div>
                <div id="dep-staff">
                    <H3 h3J="スタッフ" />
                    <Image
                    src="/S__72253473_0.jpg"
                    alt="25thImage"
                    className="firstview hidden md:block"
                    width={650}
                    height={650}
                    priority
                    />
                    <Image
                    src="/S__72253473_0_M.jpg"
                    alt="25thImage"
                    className="firstview md:hidden"
                    width={650}
                    height={650}
                    priority
                    />
                    <p className="my-2">
                        道具、衣装、音、光。これらを用いて舞台を彩るのが スタッフ です。琉大ミュージカルでは、道具・衣装の制作、転換、音響、照明、早着替えの補助の仕事を担います。
                    </p>
                </div>
                <div id="dep-orchestra">
                    <H3 h3J="オーケストラ" />
                    <Image
                    src="/S__56410147.jpg"
                    alt="25thImage"
                    className="firstview hidden md:block"
                    width={650}
                    height={650}
                    priority
                    />
                    <Image
                    src="/S__56410147_M.jpg"
                    alt="25thImage"
                    className="firstview md:hidden"
                    width={650}
                    height={650}
                    priority
                    />
                    <p className="my-2">
                        オーケストラ は、ミュージカルの楽曲を実際に演奏し、吹奏楽とも管弦楽とも違う編成で音楽を作り上げます。お客さんの笑顔と拍手を一番近くで見ることができます。
                    </p>
                </div>
            </div>
        </div>
    )
}
