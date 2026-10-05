import CareerCard from "./CareerCard";
import career from "../data/career";
export default function Career() {
  return (
    <section id="career" className="career-surface">
      <div className="shell section-space">
      <div className="career-intro" data-reveal>
      <p className="eyebrow">03 / Career journey</p>
      <h2 className="section-title">차곡차곡 쌓아온 실무 경험</h2>
      <p className="section-description">
        2018년 웹 퍼블리셔로 시작해, 프론트엔드 개발과 앱 구현으로 경험을
        넓혀왔습니다.
      </p>
      </div>
      <div className="career-timeline mt-10 ml-1">
        {career
          .slice()
          .reverse()
          .map((card) => (
            <CareerCard key={card.id} card={card} />
          ))}
      </div>
      </div>
    </section>
  );
}
