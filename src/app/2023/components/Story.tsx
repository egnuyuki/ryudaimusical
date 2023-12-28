import FadingInOnScroll from "./FadingInOnScroll";
import H2 from "./H2";
import Image from "next/image";
export default function Story() {
    return (
        <FadingInOnScroll>
        <div className="w-full md:w-10/12 mx-auto px-8 py-8 flex justify-center gap-4 flex-col  max-w-screen-xl">
            <H2 h2J='Story'/>
            <div className="w-full text-white text-s font-normal font-['Inter'] leading-loose">
                <div>ニューヨークの片隅にある街ワシントンハイツ。ここは日々の暮らしに立ち向かう人々で溢れている。故郷のドミニカに帰ることを夢みて小さなコンビニを営む主人公ウスナビは、街のおばあちゃんことアブエラの世話をしながら、隣の美容室で働くヴァネッサへの秘めた想いを抱えている。コンビニの常連であり、幼馴染であるベニーは、ニーナの両親が経営するタクシー会社に勤めている。そんなある日、ニーナが大学から思わぬニュースを持って帰ってくる。</div>
                <br />
                <div>ウスナビ、ヴァネッサ、ニーナ、ベニー、4人の若者たちが中心となって展開される、絆・夢・そして「故郷」の真の意味を描く壮大でかつ繊細なSHOW TIME</div>
            </div>
        </div>
        </FadingInOnScroll>
    );
}