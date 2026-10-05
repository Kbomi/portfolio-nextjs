import Image from "next/image";

const rows = [
  ["/featured/screens/culti-intro.webp", "/featured/screens/culti-dashboard.webp", "/sideproject/fit.webp", "/sideproject/plan.webp", "/project/meecs.webp"],
  ["/featured/screens/bubu-launch-home.webp", "/featured/screens/bubu-splash.webp", "/sideproject/guni.webp", "/featured/screens/culti-widgets.webp", "/featured/screens/bubu-invitation.webp"],
];
export default function ProjectRibbon() {
  return (
    <section className="project-ribbon" aria-label="프로젝트 화면 미리보기">
      <p className="shell ribbon-label"><span>FROM WEB TO APP</span><span>아이디어가 화면이 되는 순간</span></p>
      <div className="ribbon-window" aria-hidden="true">
        {rows.map((row, index) => <div className={`ribbon-track ribbon-track-${index}`} key={index}>
          {[...row, ...row].map((src, item) => <div key={`${src}-${item}`} className={`ribbon-tile ${index === 1 ? "ribbon-app" : ""}`}><Image src={src} alt="" width={420} height={270} sizes="(max-width: 767px) 210px, 340px" /></div>)}
        </div>)}
      </div>
    </section>
  );
}
