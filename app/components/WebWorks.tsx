import Image from "next/image";

const works = [
  {
    name: "MELT", image: "/works/melt.jpg", href: "https://www.kko-kkuri.com/works/melt/",
    description: "젤라토를 주제로 이미지와 스크롤 흐름을 구성한 웹사이트.",
    scope: "컨셉 기획 / 화면 디자인 / 반응형 웹 구현 / 스크롤 인터랙션",
    alt: "MELT 데모 첫 화면: 딸기 젤라토와 한 통 가득 happy 문구",
  },
  {
    name: "PRESS", image: "/works/press.jpg", href: "https://www.kko-kkuri.com/works/press/",
    description: "기계식 스위치의 구조와 움직임을 탐구하는 인터랙티브 웹사이트.",
    scope: "컨셉 기획 / 화면 디자인 / 반응형 웹 구현 / 스위치 인터랙션",
    alt: "PRESS 데모 첫 화면: 파란 키캡과 투명 하우징의 기계식 스위치",
  },
];

export default function WebWorks() {
  return (
    <section id="works" className="web-works shell section-space">
      <div className="works-heading">
        <div>
          <p className="eyebrow">Works</p>
          <h2 className="section-title">직접 만든 웹사이트</h2>
          <p className="section-description">컨셉과 화면, 인터랙션을 함께 만든 개인 데모입니다.</p>
        </div>
        <a className="works-link" href="https://www.kko-kkuri.com/works/" target="_blank" rel="noopener noreferrer">전체 작업 보기<span className="sr-only"> (새 탭)</span></a>
      </div>
      <div className="works-grid">
        {works.map((work) => (
          <article key={work.name}>
            <a href={work.href} target="_blank" rel="noopener noreferrer" className="works-preview">
              <Image src={work.image} alt={work.alt} width={1440} height={900} sizes="(max-width: 767px) 100vw, 50vw" />
              <span className="sr-only">{work.name} 사이트 보기 (새 탭)</span>
            </a>
            <div className="works-title"><h3>{work.name}</h3><span>개인 제작 데모</span></div>
            <p className="works-description">{work.description}</p>
            <p className="works-scope"><span>제작 범위</span>{work.scope}</p>
            <a className="works-link" href={work.href} target="_blank" rel="noopener noreferrer">사이트 보기<span className="sr-only"> (새 탭)</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}
