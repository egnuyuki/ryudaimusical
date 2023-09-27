import H1 from "./H1"

export default function Welcome () {
    return (
        <div className="mt-10 xl:mt-32 mx-auto relative  max-w-screen-xl">
            <div className="w-10/12 mx-auto">
                <div className="py-2">
                    <span className="text-blue-950 dark:text-blue-200 text-4xl font-normal tracking-wide">想像</span>
                    <span className="text-blue-950 dark:text-blue-200 text-2xl font-normal tracking-wide">から</span>
                    <span className="text-blue-950 dark:text-blue-200 text-4xl font-normal tracking-wide">創造</span>
                    <span className="text-blue-950 dark:text-blue-200 text-2xl font-normal tracking-wide">へ</span>
                </div>
                <div className=" text-blue-950 dark:text-blue-200 py-1 text-2xl font-normal tracking-wide">学生主導の総合学習</div>
                <div className=" text-blue-300 text-xl font-normal tracking-widest">image to creation</div>
                <div className=" text-textColor text-base font-normal py-2">私たち琉大ミュージカルは学生主導の活動として、舞台芸術の世界に足を踏み入れる素晴らしい機会を提供しています。<br/>私たちの活動は、学業と両立しながら、クリエイティビティとリーダーシップを発展させる場です。<br/>学生たちが自分のアイデアを形にし、プロジェクトを成功に導く力を養うための絶好のチャンスです。</div>
            </div>
        </div>
    )
}
