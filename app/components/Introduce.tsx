'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Introduce() {
  return (
    <section className="container flex items-center justify-center gap-4 mx-auto px-6 py-16">
      <div className='w-[60%]'>
      <h1 className="text-4xl font-bold">안녕하세요.
        <br />
        <span className='text-primary'>웹 프론트엔드 개발자</span>
        <br />김보미 입니다.
      </h1>
      <p className="mt-4 text-gray-600">웹 퍼블리싱부터 프론트엔드 개발까지 경험하며, 사용자 중심의 인터페이스를 구현해왔습니다.<br/>
        사용자가 원하는 서비스를 만들고, 기여하는 과정에서 보람을 느낍니다.
      </p>
      </div>
      <div className="flex items-center justify-center w-[40%]">
        <Image src='/character.gif' alt='책상 앞에 앉아 있는 여자아이 캐릭터' width={400} height={400} />
      </div>
    </section>
  );
}
