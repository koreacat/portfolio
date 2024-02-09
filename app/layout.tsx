import type { Metadata } from "next";
import '@/global.css'
import CanvasLayout from '@/components/canvas/CanvasLayout'

export const metadata: Metadata = {
  title: "지경민 | Front-end Developer",
  description: "안녕하세요! 동료와 경험을 나누며 성장의 기쁨을 함께하는 개발자 지경민 입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CanvasLayout>{children}</CanvasLayout>
      </body>
    </html>
  )
}
