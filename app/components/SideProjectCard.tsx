'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
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
    }
  }, [isOpen]);
  
  return (
    <>
      <article className="group bg-white shadow-md rounded-2xl flex h-full flex-col gap-6 p-6 cursor-pointer transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        role="button" // 접근성을 위한 역할 부여
        tabIndex={0} // 키보드 포커스 가능하도록 설정
        aria-label={`${card.title} 상세 보기`} // 스크린 리더용 설명 추가
      >
        {/* 썸네일 이미지 영역 */}
        <div className="flex items-center gap-3">
          <Image src={card.thumb} alt={`${card.title}의 썸네일 이미지`} className="w-15 h-15 rounded-full object-cover" width={500} height={500} />
          <div>
            <h3 className="text-sm font-semibold dark:text-light-primary">{card.title}</h3>
            <p className="text-xs text-gray-700">기술 스택: {card.skill}</p>
          </div>
        </div>
        {/* 텍스트 정보 */}
        <p className="text-sm text-gray-700">{card.description}</p>
        <p className="mt-auto text-sm font-bold text-primary underline-offset-4 group-hover:underline">자세히 보기</p>
      </article>

      {/* 모달을 Portal로 body 하단에 렌더링 */}
      {isOpen && createPortal(
        <dialog
          open
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md transition z-3 w-full h-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-[90%] max-h-[90vh] overflow-hidden">
            {/* 헤더 */}
            <div className="p-4 md:px-8 md:py-6 shadow-md">
              <div className="relative flex items-center pt-8 md:pt-0">
                <Image src={card.thumb} alt={`${card.title}의 썸네일 이미지`} className="w-10 md:w-15 h-10 md:h-15 rounded-full object-cover" width={500} height={500} />
                <h3 className="ml-4 text-2xl md:text-3xl font-bold text-gray-900">{card.title}</h3>
                <button
                  className="absolute right-0 top-0 z-2 md:static ml-auto text-gray-500 hover:text-gray-700 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-light-primary">{card.description}</p>
            </div>

            {/* 스크롤 가능한 콘텐츠 영역 프로젝트 리스트 */}
            <div className="my-4 md:my-6 max-h-[60vh] overflow-y-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row mt-0 md:mt-4 space-x-6">
                <Link href={card.link} target="_blank" className="relative block w-full md:w-[50%] h-80 md:h-120 border border-gray-300 rounded">
                  <Image
                    src={card.image}
                    alt={`${card.title} 참고 이미지`}
                    className="mb-2 rounded object-cover object-center"
                    fill
                  />
                </Link>
                <div className="w-full md:w-[50%] mt-4 md:mt-0">
                  <p className="text-sm text-gray-700">🛠 기술 스택: {card.skill}</p>
                  <p className="mt-2 md:mt-4 text-sm md:text-base">🔗 링크: <Link href={card.link} target="_blank" className="underline underline-offset-4 transition">{card.title}</Link></p>
                  <p className="mt-2 md:mt-4 whitespace-break-spaces">{card.content}</p>
                </div>
              </div>
            </div>
          </div>
        </dialog>,
        document.body // 모달을 body 하단에 렌더링!
      )}
    </>
  );
}
