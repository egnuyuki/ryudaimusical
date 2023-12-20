import H2 from "./H2";
import Image from "next/image";
import Member1 from "./Member1"
import Member2 from "./Member2"
export default function Credit() {
    return (
        <div className="w-full md:w-10/12 mx-auto px-8 py-8 flex justify-center gap-4 flex-col  max-w-screen-xl">
            <H2 h2J='Cast & Staff'/>
            <div className="w-full text-white flex flex-col gap-20">
                <div>
                    <div className="flex flex-col items-center gap-6 md:gap-12">
                        <Member1 role="ウスナビ" name="又吉光"/>
                        <Member1 role="ニーナ" name="磯野ほのか"/>
                        <Member1 role="ベニー" name="喜友名朝哉"/>
                        <Member1 role="ヴァネッサ" name="島袋鈴菜"/>
                        <div className="w-full flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="アブエラ・クラウディア" name="仲尾萌花"/>
                            <Member2 role="ソニー" name="照屋翔平"/>
                        </div>
                        <div className="w-full flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="ケビン" name="赤嶺瑠九"/>
                            <Member2 role="カミラ" name="吉浜にいの"/>
                        </div>
                        <div className="w-full flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="ダニエラ" name="三好あい菜"/>
                            <Member2 role="カーラ" name="白井明日香"/>
                        </div>
                        <div className="w-full flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="グラフィティー・ピート" name="儀保孝幸"/>
                            <Member2 role="ピラグア" name="平田出"/>
                        </div>
                        <div className="w-full flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="アンサンブル" name="赤木純"/>
                            <Member2 role="アンサンブル" name="久志明日香"/>
                        </div>
                        <div className="w-full flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="アンサンブル" name="割小田あんな"/>
                            <Member2 role="アンサンブル" name="勝連翔大"/>
                        </div>
                        <div className="w-full flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="アンサンブル" name="木村数士"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-6 md:gap-20">
                        <Member1 role="演出" name="与儀厘和"/>
                        <Member1 role="舞台監督" name="比嘉彩加里"/>
                        <Member1 role="音楽監督" name="河合恵"/>
                    </div>
                </div>
            </div>
        </div>
    );
}