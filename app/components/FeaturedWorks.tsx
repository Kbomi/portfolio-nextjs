"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ArrowUpRight, Leaf, X } from "lucide-react";
import { featuredWorks } from "../data/profile";

type Work = (typeof featuredWorks)[number];

function WorkDialog({ work, onClose }: { work: Work; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, []);
  return createPortal(
    <dialog
      ref={ref}
      onCancel={onClose}
      aria-labelledby="featured-dialog-title"
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-32px)] max-w-3xl overflow-y-auto rounded-2xl bg-[#fafaf6] p-0 text-[#222b26] shadow-2xl backdrop:bg-black/50"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#d9e0d4] bg-[#fafaf6] p-6 md:p-8">
        <div>
          <p className="eyebrow">{work.period}</p>
          <h3 id="featured-dialog-title" className="mt-3 text-2xl font-bold">
            {work.title}
          </h3>
        </div>
        <button
          type="button"
          aria-label="상세 경험 닫기"
          onClick={onClose}
          className="rounded-full p-2 text-primary hover:bg-sub-primary"
        >
          <X size={22} />
        </button>
      </div>
      <div className="space-y-7 p-6 md:p-8">
        <p className="text-sm leading-7 text-[#667068]">{work.summary}</p>
        <div className="flex flex-wrap gap-2">
          {work.stack.split(", ").map((stack) => (
            <span key={stack} className="pill">
              {stack}
            </span>
          ))}
        </div>
        <section>
          <h4 className="font-bold">상황</h4>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#667068]">
            {work.detail.context}
          </p>
        </section>
        <section>
          <h4 className="font-bold">역할</h4>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#667068]">
            {work.detail.role}
          </p>
        </section>
        <section>
          <h4 className="font-bold">구현</h4>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#667068]">
            {work.detail.implementation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl bg-[#eef2e9] p-5">
          <h4 className="font-bold text-primary">결과</h4>
          <p className="mt-3 whitespace-pre-line text-sm leading-7 text-[#45614e]">
            {work.detail.result}
          </p>
        </section>
      </div>
    </dialog>,
    document.body,
  );
}

export default function FeaturedWorks() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  return (
    <section id="featured" className="border-y border-[#e1e5da] bg-[#eef2e9]">
      <div className="shell section-space">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">01 / Selected experiences</p>
            <h2 className="section-title">운영에서 배운 것, 직접 만든 것.</h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-[#667068]">
            실무 서비스의 개선부터 개인 앱 개발까지.
            <br />두 가지 경험으로 구현 과정을 소개합니다.
          </p>
        </div>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
          {featuredWorks.map((work, index) => (
            <article
              key={work.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#d9e0d4] bg-[#fafaf6]"
            >
              {index === 0 ? (
                <div className="flex min-h-[250px] flex-col justify-between bg-[#244f41] p-7 text-[#edf3e5] md:min-h-[280px] md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] tracking-[.18em] text-[#c1d1b6]">
                      SMART FARM · WEB & APP
                    </span>
                    <Leaf size={26} strokeWidth={1.5} />
                  </div>
                  <div className="mt-10">
                    <p className="text-[34px] font-bold tracking-tight md:text-[40px]">
                      컬티데이터
                    </p>
                    <p className="mt-3 text-sm text-[#c1d1b6]">
                      재배 데이터를 더 명확하게, 어디서든.
                    </p>
                  </div>
                  <div className="mt-8 flex gap-3 text-[11px] text-[#c1d1b6]">
                    <span>웹 운영 및 개선</span>
                    <span aria-hidden="true">/</span>
                    <span>Flutter 앱 개발</span>
                  </div>
                </div>
              ) : (
                <div className="relative flex min-h-[250px] flex-col justify-between overflow-hidden bg-[#f1eadd] p-7 md:min-h-[280px] md:p-9">
                  <p className="text-[11px] tracking-[.18em] text-[#7a715f]">
                    DAILY CONNECTION · FLUTTER APP
                  </p>
                  <div className="relative z-10 mt-8 max-w-[55%]">
                    <p className="text-[34px] font-bold tracking-tight text-[#504b3b] md:text-[40px]">
                      부부사이
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#7a715f] [word-break:keep-all]">
                      하루 끝, 서로를 조금 더 알아가는 시간.
                    </p>
                  </div>
                  <Image
                    src="/featured/bubu-characters.png"
                    alt="부부사이 앱의 고구마와 감자 캐릭터"
                    width={220}
                    height={220}
                    className="absolute right-2 bottom-1 h-auto w-[44%] max-w-[225px]"
                  />
                  <p className="mt-8 text-[11px] text-[#7a715f]">
                    개인 프로젝트 · 개발 중
                  </p>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className="text-[11px] font-bold text-[#77816e]">
                  {work.period}
                </p>
                <h3 className="mt-3 text-xl font-bold">{work.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#667068]">
                  {work.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {work.stack.split(", ").map((stack) => (
                    <span className="pill" key={stack}>
                      {stack}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-3 border-t border-[#e1e5da] pt-6 text-sm leading-7 text-[#5d685d]">
                  {work.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1 w-1 flex-none rounded-full bg-primary"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  aria-label={`${work.title} 상세 보기`}
                  className="mt-auto flex w-fit items-center gap-3 pt-7 text-sm font-bold text-primary underline-offset-4 hover:underline"
                  onClick={() => setSelectedWork(work)}
                >
                  구현 과정 자세히 보기 <ArrowUpRight size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedWork && (
        <WorkDialog work={selectedWork} onClose={() => setSelectedWork(null)} />
      )}
    </section>
  );
}
