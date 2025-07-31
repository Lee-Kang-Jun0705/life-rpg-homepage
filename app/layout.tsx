import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life RPG - 인생을 게임처럼 즐겁게",
  description: "일상을 게임화하여 즐겁게 성장하는 습관 형성 플랫폼",
  keywords: "습관 형성, 게임화, 자기계발, RPG, 라이프 게임",
  openGraph: {
    title: "Life RPG - 인생을 게임처럼 즐겁게",
    description: "일상을 게임화하여 즐겁게 성장하는 습관 형성 플랫폼",
    images: ["/og-image.png"],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}