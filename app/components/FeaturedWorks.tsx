"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, X } from "lucide-react";
import { featuredWorks } from "../data/profile";
import WorkScreens, { WorkScreenGallery } from "./WorkScreens";

type Work = (typeof featuredWorks)[number];

function WorkDialog({ work, onClose }: { work: Work; onClose: () => void }) {
  const workIndex = featuredWorks.indexOf(work);
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
      className="popup-native fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-32px)] max-w-3xl overflow-y-auto rounded-2xl bg-[#fafaf6] p-0 text-[#222b26] shadow-2xl backdrop:bg-black/50"
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
      <div className="popup-heading sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#d9e0d4] bg-[#fafaf6] p-6 md:p-8">
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
          className="popup-close rounded-full p-2 text-primary hover:bg-sub-primary"
        >
          <X size={22} />
        </button>
      </div>
      <div className="popup-body space-y-7 p-6 md:p-8">
        <p className="text-sm leading-7 text-[#667068]">{work.summary}</p>
        <div className="flex flex-wrap gap-2">
          {work.stack.split(", ").map((stack) => (
            <span key={stack} className="pill">
              {stack}
            </span>
          ))}
        </div>
        <section>
          <h4 className="font-bold">서비스 화면</h4>
          {workIndex === 1 && <p className="mt-3">부부10분은 2026년 9월 출시한 첫 버전입니다. 부부사이 화면은 개발 중인 새 버전이며, 대화카드와 공유 캘린더는 아직 구현 중입니다.</p>}
          <WorkScreenGallery index={workIndex} />
        </section>
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
        <div className="showcase-stack mt-10">
          {featuredWorks.map((work, index) => (
            <article
              key={work.title}
              className="showcase-card"
            >
              <WorkScreens index={index} />
              <div className="showcase-copy">
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
