import Image from "next/image";
import H3 from './H3'
import BtnOrange from './BtnOrange'
import FadingInOnScroll from "./FadingInOnScroll";


export default function FirstView() {
    return (
      <div className='flex flex-col items-center gap-4 p-8'>
        <FadingInOnScroll>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/ITH-logo.svg"
            alt="ITH-Logo"
            width={800}
            height={50}
            priority
          />
        </FadingInOnScroll>
        <H3 h3J="公演情報"/>
          <div className="text-white text-small md:text-lg font-normal font-['Inter'] mt-3 mb-8 leading-loose">
            In The Heights（邦語上演）<br/>2024年 2月 12日（月・祝）<br/>開場16:30 開演17:00<br/>那覇文化芸術劇場なはーと 大劇場
          </div>
          <BtnOrange Text="チケットフォームはコチラ！" Href='https://forms.gle/UJ7jGvT3nYtSymhc7'/>
        </div>
    );
}