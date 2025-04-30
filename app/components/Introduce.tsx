'use client';
import Image from 'next/image';

export default function Introduce() {
  return (
    <section id="intro" className="container max-w-screen-xl flex flex-col items-center justify-center gap-4 mx-auto scroll-mt-16 py-6 md:py-16 px-6 md:flex-row">
      <div className='w-full md:w-[60%]'>
        <h1 className="text-3xl md:text-4xl font-bold">안녕하세요.
          <br />
          <span className='text-primary'>웹 프론트엔드 개발자</span>
          <br />김보미 입니다.
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-600 dark:text-gray-200">웹 퍼블리싱부터 프론트엔드 개발까지 경험하며, 사용자 중심의 인터페이스를 구현해왔습니다.<br/>
          사용자가 원하는 서비스를 만들고, 기여하는 과정에서 보람을 느낍니다.
        </p>
      </div>
      <div className="relative w-[250px] h-[250px] ml-auto md:w-[400px] md:h-[400px]">
        <Image src='/character.png' alt='책상 앞에 앉아 있는 여자아이 캐릭터' fill />
      </div>
    </section>
  );
}
