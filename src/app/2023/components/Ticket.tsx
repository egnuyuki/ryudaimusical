import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import Image from "next/image";
import Member1 from "./Member1";
import BtnOrange from "./BtnOrange";
import FadingInOnScroll from "./FadingInOnScroll";
export default function Ticket() {
    return (
        <div className="w-full md:w-10/12 mx-auto px-8 py-8 flex justify-center gap-4 flex-col  max-w-screen-xl">
            <FadingInOnScroll>
                <H2 h2J='Ticket'/>
                <div className="flex flex-col items-center gap-4 md:gap-8 mb-4 md:mb-12">
                    <H3 h3J="料金"/>
                    <div className="flex justify-evenry gap-28">
                        <Member1 role="大人" name="¥2,500"/>
                        <Member1 role="学生" name="¥1,500"/>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:gap-8 mb-4 md:mb-12">
                    <H3 h3J="購入の流れ"/>
                    <H4 h4J="パスマーケットでの購入"/>
                    <div className="text-white text-base">以下のボタンからフォームを入力ください。パスマーケットの購入リンクはフォーム送信完了画面にて表示されます。</div>
                    <BtnOrange Text="チケットフォームはコチラ！" Href="https://forms.gle/UJ7jGvT3nYtSymhc7"/>
                    <H4 h4J="関係者から直接購入"/>
                    <div className="text-white text-base">団体内に身内や知り合いがいる場合は直接お買い求めできます。本人とのやり取り後、基本情報フォームを提出してください。</div>
                    <ul className="text-white text-xs list-disc">
                        <li>当日は本人確認が必要なため、フォームを提出してない方は入場できない可能性があります。</li>
                        <li>提出して頂いたお客様の情報は本人の事前の同意なく第三者に提供することはありません。</li>
                    </ul>
                </div>
            </FadingInOnScroll>
        </div>
    );
}