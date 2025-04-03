import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.kko-kkuri.com'),
  title: "웹 프론트엔드 개발자 김보미",
  description: "웹 프론트엔드 개발자 김보미 포트폴리오. 그동안의 ",
  alternates: {
    canonical: 'https://portfolio.kko-kkuri.com',
  },
  openGraph: {
    title: '웹 프론트엔드 개발자 김보미',
    description: '김보미의 포트폴리오입니다. 제 소개와 진행했던 프로젝트에 대한 내용을 담았습니다.',
    url: 'https://portfolio.kko-kkuri.com',
    siteName: '웹 프론트엔드 개발자 김보미',
    images: [{ url: 'http://www.kko-kkuri.com/wp-content/uploads/2023/06/cropped-logo_long_transparent-e1686665532847-1.png' }]
  },
  keywords: ["웹 프론트엔드 개발자", "웹 프론트엔드 개발자 포트폴리오", "웹 프론트엔드 개발자 소개", "프론트엔드 개발자 포트폴리오", "프론트엔드 개발자 김보미", "웹 프론트엔드 개발자 김보미 포트폴리오"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
