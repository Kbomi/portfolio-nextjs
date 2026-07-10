import { strengths } from "../data/profile";

export default function Strengths() {
  return (
    <section
      id="strengths"
      className="container max-w-screen-xl mx-auto scroll-mt-16 px-6 pb-8 md:pb-14"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-bold text-primary">Core Strengths</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold">
          제품 화면을 끝까지 책임지는 프론트엔드 역량
        </h2>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {strengths.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-700">
              {item.description}
            </p>
            <p className="mt-4 rounded-md bg-gray-50 px-3 py-2 text-xs font-bold text-gray-600">
              관련 경험: {item.related}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
