import { strengths } from "../data/profile";
export default function Strengths() {
  return (
    <section
      id="strengths"
      className="shell section-space border-b border-[#e1e5da]"
    >
      <div className="grid gap-8 md:grid-cols-[1fr_1.7fr] md:gap-20">
        <div>
          <p className="eyebrow">02 / What I bring</p>
          <h2 className="section-title">
            화면 너머의 흐름까지
            <br />
            생각합니다.
          </h2>
          <p className="section-description">
            UI 구현부터 데이터 연동, 운영 개선까지.
            <br />
            서비스를 만드는 과정에서 쌓은 역량입니다.
          </p>
        </div>
        <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
          {strengths.map((item, index) => (
            <article
              key={item.title}
              className="border-t border-[#d9e0d4] pt-5"
            >
              <p className="text-xs text-[#7d8a75]">0{index + 1}</p>
              <h3 className="mt-3 text-base font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#667068]">
                {item.description}
              </p>
              <p className="mt-4 text-[11px] leading-6 text-primary">
                {item.related}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
