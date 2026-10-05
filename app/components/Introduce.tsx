import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Introduce() {
  return (
    <section
      id="intro"
      className="shell grid gap-8 py-14 md:grid-cols-[1fr_220px] md:items-center md:gap-16 md:py-24"
    >
      <div>
        <p className="eyebrow">Frontend developer · Kim Bomi</p>
        <h1 className="mt-6 text-[38px] leading-[1.4] font-bold tracking-[-0.055em] [word-break:keep-all] md:text-[54px]">
          필요한 화면을 만들고,
          <br />
          <span className="text-primary">더 나은 경험</span>으로 다듬습니다.
        </h1>
        <p className="mt-6 text-sm leading-8 text-[#667068] [word-break:keep-all] md:text-base">
          안녕하세요, 프론트엔드 개발자 김보미입니다.
          <br />
          웹 퍼블리싱부터 React·Next.js 웹 개발, Flutter 앱 구현까지.
          <br className="hidden md:block" />
          사용자에게 필요한 기능을 만들고, 운영 과정의 문제를 해결합니다.
        </p>
        <div className="mt-7 flex flex-wrap gap-2" aria-label="주요 기술">
          <span className="pill">React</span>
          <span className="pill">Next.js</span>
          <span className="pill">Flutter</span>
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            className="cta bg-primary text-white hover:bg-[#193f34]"
            href="#featured"
          >
            대표 경험 보기 <ArrowDown size={16} />
          </a>
          <a className="cta text-primary hover:bg-sub-primary" href="#footer">
            연락하기 <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/character.png"
          alt="책상 앞에서 작업하는 김보미 캐릭터"
          width={240}
          height={240}
          priority
          className="h-auto w-full"
        />
        <p className="mt-4 text-center text-xs tracking-wide text-[#778074]">
          작은 디테일까지, 꾸준하게.
        </p>
      </div>
    </section>
  );
}
