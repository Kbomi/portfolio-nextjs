import { strengths } from "../data/profile";
export default function Strengths() {
  return (
    <section id="strengths" className="strengths-surface">
      <div className="shell section-space strengths-layout">
        <div className="strengths-intro">
          <p className="eyebrow" data-reveal>02 / What I bring</p>
          <h2 className="section-title" data-reveal>화면 너머의 흐름까지<br />생각합니다.</h2>
          <p className="section-description" data-reveal>UI 구현부터 데이터 연동, 운영 개선까지.<br />서비스를 만드는 과정에서 쌓은 역량입니다.</p>
        </div>
        <div className="strengths-list">
          {strengths.map((item, index) => (
            <article key={item.title} className="strength-row" data-reveal>
              <p className="strength-number" aria-hidden="true">0{index + 1}</p>
              <div><h3>{item.title}</h3><p>{item.description}</p><p className="strength-related">{item.related}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
