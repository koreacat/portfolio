import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "지경민 | Front-end Developer",
  description: "안녕하세요! 동료와 경험을 나누며 성장의 기쁨을 함께하는 개발자 지경민 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="w-full h-full">
      <body className={`${inter.className}  w-full h-full`}>{children}</body>
    </html>
  );
}
