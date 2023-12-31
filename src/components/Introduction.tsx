import H2 from "./H2";
import Dep from "./Dep copy";
export default function Introduction() {
    return (
        <div className="w-full md:w-10/12 mx-auto my-10 px-4 py-8 flex justify-center flex-col  max-w-screen-xl">
            <H2 h2J='団体紹介' h2E='Introduction' />
            <div className="px-4 py-4 justify-center">
            <div className=" text-textColor text-base font-normal">
                琉大ミュージカルとは、沖縄県琉球大学にて共通教育科目「ステージスタッフ総合活動1組&2組」という名前の授業として開講されています。<br />
                当授業の創設者である服部洋一名誉教授によって1999年から開講されており、ミュージカル制作を通して、「生きる力」「人間力」の成長を目的としています。<br />
                <br />
                琉大ミュージカルでは１つのミュージカル制作を通じて、様々な人と関わり、仲間と協力しながら心身共に成長を目的とした、「学生主導型」の授業です。<br />
                <br />
                琉大ミュージカルには、制作部・キャスト・スタッフ・オーケストラの総勢約100名が毎年参加し、約1000人の観客を前に外部ホールでの公演を行っております。<br />
                <br />
                琉大ミュージカルの魅力は、学生時代という限られた魔法の時間に、学生同士が１つのミュージカルを作り上げる中で生まれる絆や、プレッシャーや不安に耐えながら本番を乗り切った後の感動にあると思います。<br />
                <br />
                約5ヶ月という短期間で、プロではない学生が学業の合間にミュージカルを１つ作り上げることは過酷を極めます。しかし、その高いハードルを乗り越えるためにお互い協力し、支え合い、１つの舞台を作り上げていく過程には、学業だけにとどまらない人間の成長のヒントがあると考えられており、共通教育科目の授業として位置付けられています。<br />
                <br />
                参加者は、歌って演じて踊るキャストだけでなく、舞台に関わる道具を作り、影から舞台の進行を支えるスタッフや、生の演奏で観客を作品の世界観に引き込み魅了するオーケストラの３つから好きな役割を選ぶ事ができます。また、大勢の参加者を指導し率いる制作部も学生を中心に組織され琉大ミュージカルの熱狂と歓喜を沖縄から提供しています。
            </div>
            </div>
            <Dep />
        </div>
    );
}