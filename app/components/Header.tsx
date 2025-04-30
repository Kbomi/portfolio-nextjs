'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 py-2 bg-white shadow-md z-2 dark:bg-[#175a4c]">
      <nav className="container mx-auto flex items-center justify-between px-5 md:px-0">
        <Link href="#intro">
          <Image src='/logo.webp' alt='로고' width={65} height={65} />
        </Link>

        {/* PC 메뉴 */}
        <ul className="hidden md:flex gap-8">
          <li><Link href="#intro">자기소개</Link></li>
          <li><Link href="#career">회사 경력</Link></li>
          <li><Link href="#project">외주 프로젝트</Link></li>
          <li><Link href="#sideproject">사이드 프로젝트</Link></li>
          <li><Link href="#footer">연락처</Link></li>
        </ul>

        {/* Mobile 햄버거 */}
        <button className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <Image src="/menu.webp" alt="메뉴" width={30} height={30} />
        </button>

        {/* Mobile 메뉴 리스트 */}
        {open && (
          <ul className="absolute top-20 right-0 bg-white shadow-md rounded p-4 flex flex-col gap-4 md:hidden">
            <li><Link href="#intro">자기소개</Link></li>
            <li><Link href="#career">회사 경력</Link></li>
            <li><Link href="#project">외주 프로젝트</Link></li>
            <li><Link href="#sideproject">사이드 프로젝트</Link></li>
            <li><Link href="#footer">연락처</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}
