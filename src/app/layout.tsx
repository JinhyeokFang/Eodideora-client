import type { Metadata } from 'next'
import { Nanum_Gothic } from 'next/font/google'
import './globals.css'

const nanum = Nanum_Gothic({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: '어디더라',
  description: '물건의 위치를 기록하고 찾아주는 웹서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={nanum.className}>{children}</body>
    </html>
  )
}
