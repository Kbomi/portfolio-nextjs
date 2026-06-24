"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { featuredWorks } from "../data/profile";

export default function FeaturedWorks() {
  const [selectedWork, setSelectedWork] = useState<
    (typeof featuredWorks)[number] | null
  >(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedWork(null);
      }
    };

    if (selectedWork) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedWork]);

  return (
    <>
      <section id="featured" className="bg-light-primary">
        <div className="container max-w-screen-xl mx-auto scroll-mt-16 px-6 py-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-primary">
              Representative Work
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold">대표 경험</h2>
            <p className="mt-4 text-sm md:text-base leading-7 text-gray-800 dark:text-gray-200">
              프론트엔드 역량을 잘 보여줄 수 있는 실무 경험을 정리했습니다.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredWorks.map((work) => (
              <article
                key={work.title}
                className="group flex cursor-pointer flex-col rounded-lg bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                role="button"
                tabIndex={0}
                aria-label={`${work.title} 상세 보기`}
                onClick={() => setSelectedWork(work)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedWork(work);
                  }
                }}
              >
                <div className="flex min-h-[116px] flex-col">
                  <p className="text-sm font-bold text-primary">
                    {work.period}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {work.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {work.summary}
                  </p>
                </div>
                <p className="mt-4 rounded-md bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700">
                  {work.stack}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-700">
                  {work.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-5 text-sm font-bold text-primary underline-offset-4 group-hover:underline">
                  자세히 보기
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedWork &&
        createPortal(
          <dialog
            open
            className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/50 p-4 backdrop-blur-md"
          >
            <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-gray-100 p-5 md:p-7">
                <div>
                  <p className="text-sm font-bold text-primary">
                    {selectedWork.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                    {selectedWork.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-700">
                    {selectedWork.summary}
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                  aria-label="닫기"
                  onClick={() => setSelectedWork(null)}
                >
                  <X size={26} />
                </button>
              </div>

              <div className="max-h-[64vh] overflow-y-auto p-5 md:p-7">
                <p className="rounded-md bg-gray-50 px-3 py-2 text-xs font-bold text-gray-700">
                  {selectedWork.stack}
                </p>
                <div className="mt-6 grid gap-5">
                  <section>
                    <h4 className="text-base font-bold text-gray-900">상황</h4>
                    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-700">
                      {selectedWork.detail.context}
                    </p>
                  </section>
                  <section>
                    <h4 className="text-base font-bold text-gray-900">역할</h4>
                    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-700">
                      {selectedWork.detail.role}
                    </p>
                  </section>
                  <section>
                    <h4 className="text-base font-bold text-gray-900">구현</h4>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-gray-700">
                      {selectedWork.detail.implementation.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h4 className="text-base font-bold text-gray-900">결과</h4>
                    <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-700">
                      {selectedWork.detail.result}
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </dialog>,
          document.body,
        )}
    </>
  );
}
