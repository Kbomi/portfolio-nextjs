"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
const links = [
  { href: "#featured", label: "대표 경험" },
  { href: "#strengths", label: "핵심 역량" },
  { href: "#career", label: "실무 경력" },
  { href: "#sideproject", label: "사이드 프로젝트" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-[#e1e5da] bg-[#fafaf6]/95 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:bg-white focus:p-4"
      >
        본문으로 이동
      </a>
      <nav
        aria-label="주요 메뉴"
        className="shell flex h-20 items-center justify-between"
      >
        <a
          href="#intro"
          aria-label="김보미 포트폴리오 처음으로"
          className="flex items-center gap-3"
        >
          <Image src="/logo.webp" alt="" width={44} height={44} />
          <span className="text-sm font-bold tracking-tight">
            김보미
            <span className="ml-2 font-normal text-[#7a8276]">/ Portfolio</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-[#5d685d] hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#footer"
            className="flex items-center gap-2 rounded-full border border-[#ccd6c8] px-4 py-2 text-xs text-primary"
          >
            연락처 <ArrowUpRight size={13} />
          </a>
        </div>
        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-md p-2 text-primary md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-menu"
          className="shell flex flex-col gap-1 border-t border-[#e1e5da] py-4 md:hidden"
        >
          {[
            ...links,
            { href: "#project", label: "외부 프로젝트" },
            { href: "#footer", label: "연락처" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-3 text-sm hover:bg-sub-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
