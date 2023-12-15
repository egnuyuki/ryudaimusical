const Date = [
    {
        No:1,
        day:"1999年10月",
        title:"総合演習科目として「人間と音楽」開始",
    },
    {
        No:2,
        day:"2001年2月",
        title:"授業名を「民族と音楽」に名称変更",
    },
    {
        No:3,
        day:"2008年8月",
        title:"この年度から前期開講科目に切り替わり、夏公演が開始",
    },
    {
        No:4,
        day:"2009年8月",
        title:"この年度以降2014年度まで会場をうるま市石川会館で行う",
    },
    {
        No:5,
        day:"2016年8月",
        title:"「ステージ・スタッフ総合活動」が共通教育科目として設置",
    },
    {
        No:6,
        day:"2021年2月",
        title:"総監督・服部洋一が退官、琉球大学名誉教授に就任、「民族と音楽」の終了",
    },
    {
        No:7,
        day:"2021年8月",
        title:"A CHORUS LINEを上演予定もcovid-19の感染状況により中止",
    },
]

import H2 from "./H2";
export default function Record() {
    return (
        <div className="w-full md:w-10/12 mx-auto my-10 px-4 py-8 flex justify-center flex-col  max-w-screen-xl">
            <H2 h2J="沿革" h2E="History"/>
            <div className="mt-10">
                {Date.map(date => {
                    return (
                        <div key = {date.No} className="border-b dark:border-b-slate-50">
                                <div className="flex border-b-black justify-between items-center flex-wrap sm:flex-nowrap">
                                    <div className="w-full md:w-1/5 text-center bg-slate-100 dark:bg-slate-800 sm:bg-transparent">
                                        <div className="py-8 px-4">
                                            {date.day}
                                        </div>
                                    </div>
                                    <div className="w-full md:w-4/5 border-l-2 text-left dark:border-l-slate-700 ">
                                        <div className="py-8 px-4 text-center bg-slate-200 dark:bg-slate-700 sm:bg-transparent">
                                            {date.title}
                                        </div>
                                    </div>
                                </div>
                        </div>
                            )
                    })}
            </div>
        </div>
    );
}