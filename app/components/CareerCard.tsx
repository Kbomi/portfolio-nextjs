import Link from "next/link";
import { CareerProps } from "../data/career";

export default function CareerCard({card}: {card:CareerProps}) {
  return (
    <Link href={'/'} className="bg-white shadow-md rounded-2xl flex flex-col">
      {/* 아이콘 영역 */}
      <div className={`w-12 h-12 rounded-tl-2xl rounded-br-xl flex items-center justify-center text-white text-2xl`}
        style={{ backgroundColor: card.color }} 
      >
        {card.title.charAt(0)}
      </div>
      {/* 텍스트 정보 */}
      <div className="p-6 pt-0">
        <h3 className="mt-4 text-lg font-semibold text-gray-800">{card.title}</h3>
        <p className="text-gray-500 mt-2">{card.description}</p>
      </div>
    </Link>
  );
}
