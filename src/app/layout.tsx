import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Favicon from '/public/images/Metadata/favicon.ico';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '琉大ミュージカル',
  description: '琉大ミュージカルのホームページです。琉球大学の授業「ステージスタッフ総合活動」',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
