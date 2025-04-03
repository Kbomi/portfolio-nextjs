'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 py-2 bg-white shadow-md z-2">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="#intro">
          <Image src='/logo.png' alt='나뭇잎모양 로고 이미지' width={150} height={65} />
        </Link>
        <ul className="flex gap-8">
          <li><Link href="#intro" className={`hover:underline underline-offset-4`}>자기소개</Link></li>
          <li><Link href="#career" className={`hover:underline underline-offset-4`}>회사 경력</Link></li>
          <li><Link href="#project" className={`hover:underline underline-offset-4`}>외주 프로젝트</Link></li>
          <li><Link href="#sideproject" className={`hover:underline underline-offset-4`}>사이드 프로젝트</Link></li>
          <li><Link href="#footer" className={`hover:underline underline-offset-4`}>연락처</Link></li>
        </ul>
      </nav>
    </header>
  );
}
