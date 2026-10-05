"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { CareerProps } from "../data/career";

export default function CareerCard({ card }: { card: CareerProps }) {
  const [isOpen, setIsOpen] = useState(false);

  // Esc 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // 모달 열리면 스크롤 막기
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = ""; // 원래대로 복원
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = ""; // 컴포넌트 언마운트 시 복원
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <article
        className="group relative cursor-pointer border-b border-l border-[#d9e0d4] py-7 pl-7 transition hover:bg-[#f1f3ec]"
        role="button"
        tabIndex={0}
        aria-label={`${card.title} 상세 보기`}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
      >
        <span
          aria-hidden="true"
          className="absolute top-9 -left-[5px] h-[9px] w-[9px] rounded-full bg-primary"
        />
        <div className="grid gap-4 md:grid-cols-[180px_1fr_auto] md:gap-6">
          <div>
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="mt-2 text-[11px] leading-6 text-[#667068]">
              {card.date}
            </p>
            {card.leave && (
              <p className="mt-1 text-[11px] leading-6 text-[#667068]">
                {card.leave}
              </p>
            )}
          </div>
          <p className="text-sm leading-7 text-[#667068]">{card.description}</p>
          <p className="text-xs font-bold leading-7 text-primary underline-offset-4 group-hover:underline">
            자세히 보기 ↗
          </p>
        </div>
      </article>

      {/* 모달을 Portal로 body 하단에 렌더링 */}
      {isOpen &&
        createPortal(
          <dialog
            open
            className="popup-overlay fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md transition z-50 w-full h-full"
          >
            <div className="popup-panel bg-white rounded-3xl shadow-2xl max-w-4xl w-[90%] max-h-[90vh] overflow-hidden">
              {/* 헤더 */}
              <div className="popup-heading p-4 md:px-8 md:py-6 shadow-md">
                <div className="flex items-center justify-between items-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <button
                    className="popup-close text-gray-500 hover:text-gray-700 transition cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    aria-label="닫기"
                  >
                    <X size={28} />
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  근무 기간: {card.date}
                </p>
                {card.leave && (
                  <p className="mt-1 text-sm font-bold text-gray-500">
                    휴직 기간: {card.leave}
                  </p>
                )}
                <p className="mt-2 text-sm whitespace-break-spaces">
                  {card.content}
                </p>
              </div>

              {/* 스크롤 가능한 콘텐츠 영역 프로젝트 리스트 */}
              <div className="popup-body my-4 md:my-6 max-h-[60vh] overflow-y-auto px-4 md:px-8">
                <h4 className="text-xl font-semibold text-gray-800">
                  주요 업무
                </h4>
                <div className="border-l-2 border-primary mt-4 ml-1 md:ml-2 pl-3 md:pl-5 space-y-5 md:space-y-10">
                  {card.projects
                    ?.slice()
                    .reverse()
                    .map((project, index) => (
                      <div key={index}>
                        <h4 className="text-lg font-bold text-gray-900">
                          {project.title}
                        </h4>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center mt-1">
                          <p className="text-sm text-gray-700">
                            기간: {project.date}
                          </p>
                          <p className="text-sm text-gray-700">
                            기술 스택: {project.skill}
                          </p>
                        </div>
                        {project.url?.length && (
                          <p className="flex gap-2 mt-2 text-sm text-gray-600">
                            URL:
                            {project.url.map((item, index) => (
                              <Link
                                key={index}
                                href={item.link}
                                target="_blank"
                                className="underline underline-offset-4 transition"
                              >
                                {item.text}
                              </Link>
                            ))}
                          </p>
                        )}
                        <p className="mt-2 text-base whitespace-break-spaces">
                          {project.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </dialog>,
          document.body, // 모달을 body 하단에 렌더링!
        )}
    </>
  );
}
