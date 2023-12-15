import H2 from "./H2";
import Image from "next/image";
import Member1 from "./Member1"
import Member2 from "./Member2"
export default function Credit() {
    return (
        <div className="w-full md:w-10/12 mx-auto px-8 py-8 flex justify-center gap-4 flex-col  max-w-screen-xl">
            <H2 h2J='Cast & Staff'/>
            <div className="w-full text-white flex flex-col gap-12">
                <div>
                    <div className="flex flex-col items-center gap-6 md:gap-12">
                        <Member1 role="ウスナビ" name="又吉光"/>
                        <Member1 role="ニーナ" name="磯野ほのか"/>
                        <Member1 role="ベニー" name="喜友名朝哉"/>
                        <Member1 role="ヴァネッサ" name="島袋鈴菜"/>
                        <div className="flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="アブエラ" name="仲尾萌花"/>
                            <Member2 role="アブエラ" name="仲尾萌花"/>
                        </div>
                        <div className="flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="アブエラ" name="仲尾萌花"/>
                            <Member2 role="アブエラ" name="仲尾萌花"/>
                        </div>
                        <div className="flex justify-evenry gap-10 md:gap-40">
                            <Member2 role="アブエラ" name="仲尾萌花"/>
                            <Member2 role="アブエラ" name="仲尾萌花"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-6 md:gap-20">
                        <Member1 role="演出" name="与儀りちか"/>
                        <Member1 role="舞台監督" name="比嘉あかり"/>
                        <Member1 role="音楽監督" name="河合恵"/>
                    </div>
                </div>
            </div>
        </div>
    );
}