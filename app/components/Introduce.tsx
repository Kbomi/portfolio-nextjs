import Image from "next/image";
import { ArrowDown, ArrowUpRight, Code2, Layers } from "lucide-react";

export default function Introduce() {
  return (
    <section id="intro" className="motion-hero">
      <div className="shell hero-inner">
        <p className="eyebrow" data-reveal>Frontend developer · Kim Bomi</p>
        <h1 className="hero-name" data-reveal><span className="sr-only">프론트엔드 개발자 김보미</span><span aria-hidden="true">KIM BOMI</span></h1>
        <div className="hero-stage" aria-hidden="true">
          <div className="hero-floor" />
          <div className="hero-halo" />
          <div className="hero-orbit" />
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-token hero-token-react"><Code2 /><span>React</span></div>
          <div className="hero-token hero-token-flutter"><Layers /><span>Flutter</span></div>
          <div className="hero-portrait"><Image src="/character.webp" alt="" width={1200} height={1200} priority sizes="(max-width: 767px) 88vw, 480px" /></div>
        </div>
        <div className="hero-bottom">
          <div data-reveal><p className="hero-tagline">필요한 화면을 만들고,<br /><strong>더 나은 경험</strong>으로 다듬습니다.</p><p className="hero-description">웹 퍼블리싱부터 React·Next.js,<br />Flutter 앱 구현까지.</p></div>
          <div className="hero-actions" data-reveal><a className="cta hero-contact" href="#footer">함께 만들어요 <ArrowUpRight size={18} /></a><a className="hero-scroll" href="#featured">대표 경험 보기 <ArrowDown size={16} /></a></div>
        </div>
      </div>
    </section>
  );
}
