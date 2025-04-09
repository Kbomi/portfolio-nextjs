'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-primary">
      <div className="container max-w-screen-xl flex flex-wrap mx-auto py-8 px-6 text-white">
        <h2 className="w-[100%] mb-4 md:mb-8 text-2xl md:text-3xl font-bold text-white">연락처</h2>
        <div className="flex flex-col gap-3 md:gap-6 w-full md:w-[50%]">
            <Link href="mailto:93rlaqhal@gmail.com" target="_blank" className="underline underline-offset-4">📨 93rlaqhal@gmail.com</Link>
            <Link href="https://github.com/Kbomi" target="_blank" className="underline underline-offset-4">🐱 Github 링크</Link>
        </div>
        <div className="flex flex-col gap-3 md:gap-6 w-full md:w-[50%] mt-3 md:mt-0">
          <Link href="https://www.linkedin.com/in/%EB%B3%B4%EB%AF%B8-%EA%B9%80-126326207" target="_blank" className="underline underline-offset-4">🤳 링크드인</Link>
          <Link href="https://www.kko-kkuri.com" target="_blank" className="underline underline-offset-4">👋 블로그</Link>
        </div>
      </div>
    </footer>
  );
}
