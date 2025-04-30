'use client';
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronDown } from "lucide-react";
import Image from 'next/image';
import projects from '../data/projects';

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]) // 첫번째 기본 열림

  const toggleProject = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)) // 닫기
    } else {
      setOpenIndexes([...openIndexes, index]) // 열기
    }
  }

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
      <div className='bg-light-primary'>
        <section id="project" className="container max-w-screen-xl flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 scroll-mt-16 mx-auto py-6 md:py-16 px-6">
          <div className="relative w-[80px] h-[80px] md:w-[400px] md:h-[400px]">
            <Image src='/mac.webp' alt='컴퓨터 이미지' fill />
          </div>
          <div className='w-full md:w-[60%]'>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">외주 프로젝트
              <span className='text-sm text-bold'> (총: {projects.length}건)</span>
            </h2>
            <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-800 dark:text-gray-200">외주 프로젝트를 수행하며 폭넓은 경험을 쌓았습니다.<br />
              특히 클라이언트의 요구사항을 반영하고 유지보수를 진행하며 실무에서의 협업 능력을 키울 수 있었습니다.<br />
              이러한 경험을 통해 원활한 소통이 개발 효율성과 직결된다는 것을 깨닫게 되었으며,<br />
              단순한 기술력뿐만 아니라 협업과 커뮤니케이션이 실무에서 더욱 중요하다는 것을 실감했습니다.<br />
              이러한 경험을 바탕으로 보다 효과적인 개발 환경을 만들어가는 데 기여할 수 있다고 생각합니다.
            </p>
            <div className="mt-4 md:mt-12">
              {projects.slice().reverse().slice(0, 3).map((project, index) => (
                <div key={project.id} className="flex items-start gap-3 md:gap-4 mb-3 md:mb-6">
                  <span className="w-[32px] h-[32px] flex-[0_0_32px] flex items-center justify-center bg-primary text-sm md:text-base text-white dark:text-light-primary font-bold rounded-full">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-6 md:mt-12'>
              <button className="px-6 py-3 bg-gray-200 text-primary dark:text-light-primary font-bold rounded-lg cursor-pointer hover:bg-primary hover:text-white" onClick={() => setIsOpen(true)}>더보기</button>
            </div>
          </div>
        </section>
      </div>

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
                <h3 className="text-3xl font-bold text-gray-900">외주 프로젝트</h3>
                <button
                  className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={28} />
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-700">총: {projects.length}건</p>
            </div>

            {/* 스크롤 가능한 콘텐츠 영역 프로젝트 리스트 */}
            <div className="my-6 max-h-[60vh] overflow-y-auto px-8">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-light-primary">프로젝트 상세 내용</h4>
              <div className="mt-4 space-y-6">
                {projects.slice().reverse().map((project, index) => {
                  const isOpen = openIndexes.includes(index)

                  return (
                    <div key={index} className="border p-4 rounded-lg">
                      {/* 타이틀 영역 */}
                      <button
                        onClick={() => toggleProject(index)}
                        className="w-full flex justify-between items-center cursor-pointer text-primary dark:text-sub-primary font-bold"
                      >
                        {project.title}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* 토글 영역 */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="flex mt-4 space-x-6">
                          {project.image && (
                            <div className="relative w-[30%] h-64">
                              <Image
                                src={project.image}
                                alt={project.title}
                                className="mb-2 rounded object-cover object-center"
                                fill
                              />
                            </div>
                          )}
                          <div className="space-y-2">
                            <p className="text-sm text-gray-700">📅 기간: {project.period}</p>
                            <p className="text-sm text-gray-700">🛠 기술스택: {project.skill}</p>
                            <p className="mt-4 whitespace-break-spaces">작업: {project.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </dialog>,
        document.body // 모달을 body 하단에 렌더링!
      )}
    </>
  );
}
