"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { SideProjectProps } from "../data/sideProjects";
import Link from "next/link";

export default function SideProjectCard({ card }: { card: SideProjectProps }) {
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
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#d9e0d4] bg-[#fafaf6] transition hover:-translate-y-1 hover:shadow-lg"
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
        <Image
          src={card.image}
          alt={`${card.title}의 서비스 화면`}
          width={500}
          height={500}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className={`h-[210px] w-full border-b border-[#d9e0d4] bg-[#eef2e9] object-cover md:h-[190px] ${card.id === 10 ? "object-[center_30%]" : "object-top"}`}
        />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-base font-bold leading-6">{card.title}</h3>
          <p className="mt-2 text-[11px] leading-6 text-primary">
            {card.skill}
          </p>
          <p className="mt-4 text-sm leading-7 text-[#667068]">
            {card.description}
          </p>
          <p className="mt-auto pt-5 text-xs font-bold text-primary underline-offset-4 group-hover:underline">
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
                <div className="relative flex items-center gap-3 pr-12">
                  <Image
                    src={card.thumb}
                    alt={`${card.title}의 썸네일 이미지`}
                    className="w-10 md:w-15 h-10 md:h-15 rounded-full object-cover"
                    width={500}
                    height={500}
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <button
                    className="popup-close absolute right-0 top-0 z-2 md:static ml-auto text-gray-500 hover:text-gray-700 transition cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    aria-label="닫기"
                  >
                    <X size={28} />
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-600">{card.description}</p>
              </div>

              {/* 스크롤 가능한 콘텐츠 영역 프로젝트 리스트 */}
              <div className="popup-body my-4 md:my-6 max-h-[60vh] overflow-y-auto px-4 md:px-8">
                <div className="popup-project-layout grid gap-7 md:grid-cols-2">
                  <Link
                    href={card.link}
                    target="_blank"
                    className="popup-project-image relative block h-80 md:h-120"
                  >
                    <Image
                      src={card.image}
                      alt={`${card.title} 참고 이미지`}
                      className="rounded-xl object-contain object-top"
                      fill
                    />
                  </Link>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-700">
                      기술 스택: {card.skill}
                    </p>
                    <p className="mt-2 md:mt-4 text-sm md:text-base">
                      링크:{" "}
                      <Link
                        href={card.link}
                        target="_blank"
                        className="underline underline-offset-4 transition"
                      >
                        {card.title}
                      </Link>
                    </p>
                    <p className="mt-2 md:mt-4 whitespace-break-spaces">
                      {card.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </dialog>,
          document.body, // 모달을 body 하단에 렌더링!
        )}
    </>
  );
}
