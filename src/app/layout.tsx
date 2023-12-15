import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Favicon from '/public/images/Metadata/favicon.ico';
import { Raleway, Merriweather_Sans, Delicious_Handrawn } from "next/font/google";

const inter = Inter({ 
  variable: "--latin", 
  subsets: ["latin"],
})

const raleway = Raleway({
  variable: "--display-font",
  subsets: ["latin"],
});

const merriweather = Merriweather_Sans({
  variable: "--body-font",
  subsets: ["latin"],
});

const delicious_handrawn = Delicious_Handrawn({
  variable: "--h2-font",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '琉大ミュージカル公式サイト',
  description: '琉大ミュージカルの公式ホームページです。リニューアルしました！！！琉球大学の授業「ステージスタッフ総合活動」ではキャスト・スタッフ・オーケストラ、そして制作部によってミュージカルを作り上げていきます',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="UTH0ZVWtG4qqeVnPB5I4YepaklljEmoA1n1-I2ub4Fk" />
      <body className={`${inter.variable} ${raleway.variable} ${merriweather.variable} ${delicious_handrawn.variable}`}>{children}</body>
    </html>
  )
}
