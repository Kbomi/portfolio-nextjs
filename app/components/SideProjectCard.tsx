'use client';
import Image from 'next/image';
import { SideProjectProps } from "../data/sideProjects";

export default function SideProjectCard({card}: {card:SideProjectProps}) {
  return (
    <div className="bg-white shadow-md rounded-2xl flex flex-col gap-6 p-6">
      {/* 썸네일 이미지 영역 */}
      <div className="flex items-center gap-3">
        <Image src={card.image} alt={`${card.title}의 썸네일 이미지`} className="w-15 h-15 rounded-full object-cover" width={500} height={500} />
        <div>
          <h3 className="text-sm font-semibold">{card.title}</h3>
          <p className="text-xs text-gray-500">기술 스택: {card.skill}</p>
        </div>
      </div>
      {/* 텍스트 정보 */}
      <p className="text-sm text-gray-700">{card.description}</p>
    </div>
  );
}
