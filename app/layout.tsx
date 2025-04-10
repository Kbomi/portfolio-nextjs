/* eslint-disable @next/next/inline-script-id */
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
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
  description: "웹 프론트엔드 개발자 김보미의 포트폴리오입니다. 제 소개와 진행했던 프로젝트에 대한 내용을 담았습니다.",
  alternates: {
    canonical: 'https://portfolio.kko-kkuri.com',
  },
  openGraph: {
    title: '웹 프론트엔드 개발자 김보미',
    description: '웹 프론트엔드 개발자 김보미의 포트폴리오입니다. 제 소개와 진행했던 프로젝트에 대한 내용을 담았습니다.',
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
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TH9YRH79TW"></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TH9YRH79TW');`}
        </Script>
      </head>
      <body
        className={`${notoSansKR.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
