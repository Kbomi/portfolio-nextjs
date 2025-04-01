import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto px-6">
      <section className="flex items-center justify-center gap-4 py-16">
        <div className='w-[60%]'>
        <h1 className="text-4xl font-bold">안녕하세요.
          <br />
          <span className='text-primary'>웹 프론트엔드 개발자</span>
          <br />김보미 입니다.
        </h1>
        <p className="mt-4 text-gray-600">2018년부터 웹 퍼블리셔로 다양한 프로젝트를 수행하며 React, Vue 등 프레임워크 기반 개발과 SCSS, Emotion, Bootstrap, Blueprint.js 등 스타일 및 디자인 시스템 활용 경험을 쌓았습니다. <br />
          2022년 이후 프론트엔드 개발자로 전향하여 React, HTML, JavaScript 기반의 다양한 웹 프로젝트를 진행했습니다.<br />
          탄탄한 퍼블리싱 경험과 프론트엔드 개발 역량을 바탕으로 사용자 경험을 고려한 완성도 높은 웹 서비스를 구현하는 데 집중하고 있습니다.
        </p>
        <div className="mt-6">
          <Link href="/projects">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700">포트폴리오 보기</button>
          </Link>
        </div>
        </div>
        <div className="flex items-center justify-center w-[40%]">
          <Image src='/character.gif' alt='책상 앞에 앉아 있는 여자아이 캐릭터' width={400} height={400} />
        </div>
      </section>
    </main>
  );
}
