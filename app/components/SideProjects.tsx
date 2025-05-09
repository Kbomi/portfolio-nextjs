'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SideProjectCard from './SideProjectCard';
import sideProjects from '../data/sideProjects';

export default function SideProjects() {
  return (
    <section id="sideproject" className="container max-w-screen-xl flex flex-col-reverse md:flex-row items-center justify-center gap-2 md:gap-4 scroll-mt-16 mx-auto py-6 md:py-16 px-6">
      <div className='w-full md:w-[60%]'>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">사이드 프로젝트</h2>
        <p className='mt-2 md:mt-4 text-sm md:text-base text-gray-600 dark:text-gray-200'>만들고 싶은 기능을 직접 기획하고 개발하여 구현했습니다.</p>
        <div className='mt-3 md:mt-12'>
          {/* Swiper 슬라이더 */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 }, // 태블릿: 1개
              1024: { slidesPerView: 2 }, // 데스크톱: 2개
            }}
            navigation
            style={{ paddingBottom: '8px' }}
          >
            {sideProjects.slice().reverse().map(card => (
              <SwiperSlide key={card.id}>
                <SideProjectCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="relative w-[80px] h-[80px] md:w-[400px] md:h-[400px]">
        <Image src='/toy.webp' alt='장난감을 만지는 로봇 이미지' width={400} height={400} />
      </div>
    </section>
  );
}
