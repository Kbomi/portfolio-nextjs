"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronDown } from "lucide-react";
import Image from "next/image";
import projects from "../data/projects";

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // 첫번째 기본 열림

  const toggleProject = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // 닫기
    } else {
      setOpenIndexes([...openIndexes, index]); // 열기
    }
  };

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
      <section id="project" className="shell section-space">
        <div className="grid gap-8 md:grid-cols-[1fr_1.7fr] md:gap-20">
          <div>
            <p className="eyebrow">05 / Collaborations</p>
            <h2 className="section-title">
              다양한 환경에서도,
              <br />
              안정적인 화면을.
            </h2>
            <p className="section-description">
              리뉴얼부터 어드민, 콘텐츠 페이지까지.
              <br />
              요구사항과 기존 구조에 맞춰 완성한 외부 프로젝트 {projects.length}
              건입니다.
            </p>
            <button
              className="cta mt-7 text-primary hover:bg-sub-primary"
              onClick={() => setIsOpen(true)}
            >
              전체 프로젝트 보기 <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div>
            {projects
              .slice()
              .reverse()
              .slice(0, 3)
              .map((project, index) => (
                <div
                  key={project.id}
                  className="flex gap-5 border-t border-[#d9e0d4] py-6"
                >
                  <span className="pt-1 text-xs text-[#7d8a75]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#667068]">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

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
                  <h3 className="text-3xl font-bold text-gray-900">
                    외부 프로젝트
                  </h3>
                  <button
                    className="popup-close text-gray-500 hover:text-gray-700 transition cursor-pointer"
                    onClick={() => setIsOpen(false)}
                    aria-label="외부 프로젝트 닫기"
                  >
                    <X size={28} />
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  총: {projects.length}건
                </p>
              </div>

              {/* 스크롤 가능한 콘텐츠 영역 프로젝트 리스트 */}
              <div className="popup-body my-6 max-h-[60vh] overflow-y-auto px-8">
                <h4 className="text-xl font-semibold text-gray-800">
                  프로젝트 목록
                </h4>
                <div className="mt-4 space-y-6">
                  {projects
                    .slice()
                    .reverse()
                    .map((project, index) => {
                      const isOpen = openIndexes.includes(index);

                      return (
                        <div
                          key={index}
                          className="popup-accordion border p-4 rounded-lg"
                        >
                          {/* 타이틀 영역 */}
                          <button
                            onClick={() => toggleProject(index)}
                            className="w-full flex justify-between items-center cursor-pointer text-primary font-bold"
                          >
                            {project.title}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* 토글 영역 */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen
                                ? "max-h-none opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="flex flex-col gap-5 mt-5 md:flex-row">
                              {project.image && (
                                <div className="relative w-full md:w-[35%] h-64 shrink-0">
                                  <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="mb-2 rounded object-cover object-center"
                                    fill
                                  />
                                </div>
                              )}
                              <div className="space-y-2">
                                <p className="text-sm text-gray-700">
                                  기간: {project.period}
                                </p>
                                <p className="text-sm text-gray-700">
                                  기술스택: {project.skill}
                                </p>
                                <p className="mt-4 whitespace-break-spaces">
                                  작업: {project.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </dialog>,
          document.body, // 모달을 body 하단에 렌더링!
        )}
    </>
  );
}
