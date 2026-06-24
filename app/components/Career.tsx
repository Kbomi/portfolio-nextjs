'use client';
import CareerCard from "./CareerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import career from "../data/career";

export default function Career() {
  return (
    <section id="career" className="container mx-auto scroll-mt-16 px-6 md:px-auto py-6 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">실무 경력</h2>
      <p className="mt-4 text-sm md:text-base text-center leading-7">
        2018년 웹 퍼블리셔로 커리어를 시작해 시맨틱 마크업과 반응형 UI 구현 경험을 쌓았고,<br />
        2022년 이후 React, Vue, Next.js 기반 프론트엔드 개발 영역으로 확장해왔습니다.<br />
        주요 성과와 문제 해결 사례는 대표 경험에서 더 자세히 확인할 수 있습니다.
      </p>
      <div className="max-w-6xl mx-auto mt-7 p-6">
      {/* Swiper 슬라이더 */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // 태블릿: 2개
            1024: { slidesPerView: 4 }, // 데스크톱: 4개
          }}
          navigation
          className="career-swiper"
          style={{ paddingBottom: '8px' }}
        >
          {career.slice().reverse().map(card => (
            <SwiperSlide key={card.id} className="h-auto">
              <CareerCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
