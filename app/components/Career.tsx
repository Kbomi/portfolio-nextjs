'use client';
import CareerCard from "./CareerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import career from "../data/career";

export default function Career() {

  return (
    <section className="container mx-auto px-auto py-16">
      <h2 className="text-3xl font-bold text-primary text-center">회사 근무 경력</h2>
      <p className="mt-4 text-center">2018년부터 웹 퍼블리셔로 다양한 프로젝트를 수행하며<br />React, Vue 등 프레임워크 기반 개발과 SCSS, Emotion, Bootstrap, Blueprint.js 등 스타일 및 디자인 시스템 활용 경험을 쌓았습니다. <br />
        2022년 이후 프론트엔드 개발자로 전향하여 React, HTML, JavaScript 기반의 다양한 웹 프로젝트를 진행했습니다.<br />
        탄탄한 퍼블리싱 경험과 프론트엔드 개발 역량을 바탕으로 사용자 경험을 고려한 완성도 높은 웹 서비스를 구현하는 데 집중하고 있습니다.
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
          style={{ paddingBottom: '8px' }}
        >
          {career.map(card => (
            <SwiperSlide key={card.id}>
              <CareerCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
