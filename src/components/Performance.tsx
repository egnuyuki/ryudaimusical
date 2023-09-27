const Date = [
    {
        No:1,
        day:"2000年2月",
        title:"白雪姫",
        at:"大学会館",
    },
    {
        No:2,
        day:"2001年2月",
        title:"白雪姫",
        at:"大学会館",
    },
    {
        No:3,
        day:"2002年2月",
        title:"サウンド・オブ・ミュージック",
        at:"大学会館",
    },
    {
        No:4,
        day:"2003年2月",
        title:"屋根の上のバイオリン弾き",
        at:"大学会館",
    },
    {
        No:5,
        day:"2004年2月",
        title:"Cats",
        at:"大学会館",
    },
    {
        No:6,
        day:"2005年2月",
        title:"A CHORUS LINE",
        at:"読谷村文化センター鳳ホール",
    },
    {
        No:7,
        day:"2006年2月",
        title:"ウエストサイド・ストーリー",
        at:"うるま市石川会館",
    },
    {
        No:8,
        day:"2007年2月",
        title:"Singin' in the rain",
        at:"うるま市石川会館",
    },
    {
        No:9,
        day:"2008年2月",
        title:"クリスマス・キャロル",
        at:"浦添市てだこホール",
    },
    {
        No:10,
        day:"2008年8月",
        title:"ハイスクール・ミュージカル",
        at:"浦添市てだこホール",
    },
    {
        No:11,
        day:"2009年8月",
        title:"リトルショップ・オブ・ホラーズ",
        at:"うるま市石川会館",
    },
    {
        No:12,
        day:"2010年8月",
        title:"Big the Musical",
        at:"うるま市石川会館",
    },
    {
        No:13,
        day:"2011年8月",
        title:"イントゥー・ザ・ウッズ",
        at:"うるま市石川会館",
    },
    {
        No:14,
        day:"2012年8月",
        title:"モダン・ミリー",
        at:"うるま市石川会館",
    },
    {
        No:15,
        day:"2013年8月",
        title:"OUR HOUSE",
        at:"うるま市石川会館",
    },
    {
        No:16,
        day:"2014年8月",
        title:"How to succeed･･･努力しないで出世する方法",
        at:"うるま市石川会館",
    },
    {
        No:17,
        day:"2015年8月",
        title:"Big Fish",
        at:"沖縄市民会館大ホール",
    },
    {
        No:18,
        day:"2016年8月",
        title:"Made in Dagenham",
        at:"嘉手納文化センター大ホール",
    },
    {
        No:19,
        day:"2017年8月",
        title:"Catch me if you can - The Musical",
        at:"うるま市石川会館",
    },
    {
        No:20,
        day:"2018年8月",
        title:"Singin' in the Rain ～ 雨に唄えば",
        at:"沖縄市民会館大ホール",
    },
    {
        No:21,
        day:"2019年8月",
        title:"Chitty Chitty Bang Bang",
        at:"沖縄市民会館大ホール",
    },
    {
        No:22,
        day:"2021年2月",
        title:"Footloose",
        at:"沖縄市民会館大ホール",
    },
    {
        No:23,
        day:"2021年8月",
        title:"A CHORUS LINE",
        at:"うるま市石川会館",
    },
    {
        No:24,
        day:"2023年2月",
        title:"big The Musical",
        at:"宜野湾市民会館",
    },
    {
        No:25,
        day:"2023年2月",
        title:"In the Heights",
        at:"なはーと",
    },
    
]

import Image from "next/image";
import Link from "next/link";
import H2 from "./H2";
export default function Performance() {
    return (
        <div className="w-full md:w-10/12 mx-auto my-10 px-4 py-8 flex justify-center flex-col  max-w-screen-xl">
            <H2 h2J="公演記録" h2E="Record"/>
            <div className="mt-10">
            {Date.map(date => {
                    return (
                        <div key = {date.No} className="border-b dark:border-b-slate-50">
                                <div className="flex border-b-black justify-between items-center flex-wrap sm:flex-nowrap">
                                    <div className="w-1/3 text-center ">
                                        <div className="py-8 px-4">
                                            {date.day}
                                        </div>
                                    </div>
                                    <div className="w-2/3 sm:w-1/2 border-l-2 sm:px-2 sm:order-last dark:border-l-slate-700">
                                        <div className="py-8 px-4">
                                            {date.at}
                                        </div>
                                    </div>
                                    <div className="w-full border-l-2 text-left dark:border-l-slate-700 ">
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