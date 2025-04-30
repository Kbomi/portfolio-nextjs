'use client';
import Link from 'next/link'
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
    }
  }, [isOpen]);

  return (
    <>
      <article className="bg-white shadow-md rounded-2xl flex flex-col cursor-pointer"
        onClick={() => setIsOpen(true)}
        role="button" // 접근성을 위한 역할 부여
        tabIndex={0} // 키보드 포커스 가능하도록 설정
        aria-label={`${card.title} 상세 보기`} // 스크린 리더용 설명 추가
      >
        {/* 아이콘 영역 */}
        <div className={`w-12 h-12 rounded-tl-2xl rounded-br-xl flex items-center justify-center text-white text-2xl`}
          style={{ backgroundColor: card.color }} 
        >
          {card.title.charAt(0)}
        </div>
        {/* 텍스트 정보 */}
        <div className="p-6 pt-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-light-primary">{card.title}</h3>
          <p className="mt-2 text-sm text-gray-700">근무 기간: {card.date}</p>
          <p className="mt-2 text-sm text-gray-700 whitespace-break-spaces">{card.description}</p>
        </div>
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
              <div className="flex items-center justify-between items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{card.title}</h3>
                <button
                  className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-700">근무 기간: {card.date}</p>
              <p className="mt-2 text-sm whitespace-break-spaces">{card.content}</p>
            </div>

            {/* 스크롤 가능한 콘텐츠 영역 프로젝트 리스트 */}
            <div className="my-4 md:my-6 max-h-[60vh] overflow-y-auto px-4 md:px-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-light-primary">프로젝트 상세 내용</h4>
              <div className="border-l-2 border-primary mt-4 ml-1 md:ml-2 pl-3 md:pl-5 space-y-5 md:space-y-10">
                {card.projects?.slice().reverse().map((project, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center mt-1">
                      <p className="text-sm text-gray-700">📅 기간: {project.date}</p>
                      <p className="text-sm text-gray-700">🛠 기술 스택: {project.skill}</p>
                    </div>
                    {project.url?.length && (
                      <p className='flex gap-2 mt-2 text-sm text-gray-600'>🔗 URL: 
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
                    <p className="mt-2 text-base whitespace-break-spaces">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </dialog>,
        document.body // 모달을 body 하단에 렌더링!
      )}
    </>
  );
}
