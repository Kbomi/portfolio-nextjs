"use client";

import { useRef, useState } from "react";
import Image from "next/image";

// Keep newest demos first.
const works = [
  {
    theme: "yeobaek", category: "컨설팅 홈페이지", name: "여백", image: "/works/yeobaek.jpg", href: "https://www.kko-kkuri.com/works/yeobaek/",
    description: "서비스 소개부터 상담 신청 체험까지 연결한 가상 컨설팅 브랜드 홈페이지.",
    scope: "브랜드 화면 구성 / 반응형 웹 구현 / 스크롤 인터랙션 / 상담 폼 데모",
    alt: "여백 컨설팅 데모 첫 화면: 비즈니스 미팅 공간과 더 명확한 방향 문구",
  },
  {
    theme: "melt", category: "젤라토 브랜드", name: "MELT", image: "/works/melt.jpg", href: "https://www.kko-kkuri.com/works/melt/",
    description: "젤라토를 주제로 이미지와 스크롤 흐름을 구성한 웹사이트.",
    scope: "컨셉 기획 / 화면 디자인 / 반응형 웹 구현 / 스크롤 인터랙션",
    alt: "MELT 데모 첫 화면: 딸기 젤라토와 한 통 가득 happy 문구",
  },
  {
    theme: "press", category: "인터랙티브 웹", name: "PRESS", image: "/works/press.jpg", href: "https://www.kko-kkuri.com/works/press/",
    description: "기계식 스위치의 구조와 움직임을 탐구하는 인터랙티브 웹사이트.",
    scope: "컨셉 기획 / 화면 디자인 / 반응형 웹 구현 / 스위치 인터랙션",
    alt: "PRESS 데모 첫 화면: 파란 키캡과 투명 하우징의 기계식 스위치",
  },
];

export default function WebWorks() {
  const [selected, setSelected] = useState(0);
  const shelf = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClickUntil = useRef(0);
  const work = works[selected];

  function selectBook(index: number, focus = false) {
    setSelected(index);
    const button = shelf.current?.querySelectorAll<HTMLButtonElement>("button")[index];
    if (focus) button?.focus({ preventScroll: true });
    button?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
  }

  return (
    <section id="works" className="web-works shell section-space">
      <div className="works-heading">
        <div>
          <p className="eyebrow">Works</p>
          <h2 className="section-title">홈페이지 제작 데모</h2>
          <p className="section-description">이런 홈페이지를 만들 수 있어요. 디자인과 인터랙션을 직접 구현한 개인 데모입니다.</p>
        </div>
        <a className="works-link" href="https://www.kko-kkuri.com/works/" target="_blank" rel="noopener noreferrer">전체 작업 보기<span className="sr-only"> (새 탭)</span></a>
      </div>
      <div className="demo-library">
        <div className="demo-shelf" ref={shelf} role="group" aria-label="홈페이지 데모 책장"
          onTouchStart={(event) => {
            const touch = event.touches[0];
            touchStart.current = { x: touch.clientX, y: touch.clientY };
          }}
          onTouchEnd={(event) => {
            const start = touchStart.current;
            touchStart.current = null;
            if (!start) return;
            const touch = event.changedTouches[0];
            const dx = touch.clientX - start.x;
            const dy = touch.clientY - start.y;
            if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
            suppressClickUntil.current = Date.now() + 400;
            selectBook((selected + (dx < 0 ? 1 : -1) + works.length) % works.length);
          }}
          onTouchCancel={() => { touchStart.current = null; }}
        >
          {works.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`demo-book demo-book-${item.theme}${selected === index ? " is-selected" : ""}`}
              aria-label={`${item.name} 데모 선택`}
              aria-pressed={selected === index}
              aria-controls="demo-book-description"
              onClick={() => { if (Date.now() >= suppressClickUntil.current) selectBook(index); }}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % works.length;
                else if (event.key === "ArrowLeft") next = (index - 1 + works.length) % works.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = works.length - 1;
                else return;
                event.preventDefault();
                selectBook(next, true);
              }}
            >
              <span className="demo-book-spine" aria-hidden="true"><span>0{index + 1}</span><strong>{item.name}</strong><span>WEB</span></span>
              <span className="demo-book-cover" aria-hidden="true">
                <span className="demo-cover-meta">개인 제작 데모 <span>0{index + 1}</span></span>
                <strong>{item.name}</strong>
                <span className="demo-cover-image"><Image src={item.image} alt="" width={1440} height={900} sizes="(max-width: 767px) 220px, 300px" /></span>
                <span className="demo-cover-footer">{item.category}</span>
              </span>
            </button>
          ))}
        </div>
        <p className="demo-shelf-hint">책을 골라 작업을 살펴보세요.</p>
        <div id="demo-book-description" className="demo-book-description">
          <div aria-live="polite" aria-atomic="true">
            <div className="works-title"><h3>{work.name}</h3><span>개인 제작 데모</span></div>
            <p className="works-description">{work.description}</p>
            <p className="works-scope"><span>제작 범위</span>{work.scope}</p>
          </div>
          <a className="works-link" href={work.href} target="_blank" rel="noopener noreferrer">{work.name} 사이트 보기<span className="sr-only"> (새 탭)</span></a>
        </div>
      </div>
    </section>
  );
}
