const text = "웹 퍼블리싱에서 시작해 React와 Next.js 웹 개발, Flutter 앱 구현으로 경험을 넓혀왔습니다. 화면을 만드는 데서 멈추지 않고, 데이터의 흐름과 사용자의 일상을 연결합니다.";
export default function AboutStory() {
  return (
    <section id="about" className="about-story">
      <div className="shell about-inner">
        <p className="eyebrow" data-reveal>소개</p>
        <h2 className="about-heading" data-reveal>화면 너머의<br /><span>경험을 연결합니다.</span></h2>
        <p className="about-copy"><span className="sr-only">{text}</span><span aria-hidden="true">{text.split(" ").map((word, index) => <span className="story-word" key={index}>{word} </span>)}</span></p>
        <a href="#featured" className="cta about-cta" data-reveal>만들어온 경험 보기 </a>
      </div>
    </section>
  );
}
