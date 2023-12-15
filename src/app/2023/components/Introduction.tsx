import H2 from "./H2";
import Image from "next/image";
export default function Introduction() {
    return (
        <div className="w-full md:w-10/12 mx-auto px-8 py-8 flex justify-center gap-4 flex-col  max-w-screen-xl">
            <H2 h2J='Introduction'/>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/poster2023.png"
                alt="ITH-poster"
                width={400}
                height={50}
                priority
            />
            <div className="w-full text-white text-s font-normal font-['Inter'] leading-loose">
                <div>25周年を迎える琉大ミュージカルが送る、この冬、沖縄を一番熱くする至極のミュージカル！！</div>
                <br />
                <div>毎年外部で公演している琉大ミュージカルが今年はなんとRM史上初、「なはーと」こと那覇市民芸術劇場 大劇場で公演することになりました。</div>
                <br />
                <div>公演日は2024年2月12日(月・祝)、3連休の最終日に行われます。</div>
                <br />
                <div>演目は「In The Heights」です。製作陣が熱を込めて訳したラップや歌！そしてそれを演じるキャスト、さらにそれを引き立てるオーケストラのダイナミックな演奏やスタッフが作り上げたRM史に残る壮大なセット！どれも見所です！！！！！</div>
                <br />
                <div>想像を創造する</div>
                <div>私たちがイメージした世界が、未来が、思いがそこにあります。ぜひ劇場でご覧ください。</div>
            </div>
        </div>
    );
}