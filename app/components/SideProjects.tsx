import SideProjectCard from "./SideProjectCard";
import sideProjects from "../data/sideProjects";
export default function SideProjects() {
  return (
    <section
      id="sideproject"
      className="border-y border-[#e1e5da] bg-[#f0f3eb]"
    >
      <div className="shell section-space">
        <p className="eyebrow">04 / Side projects</p>
        <h2 className="section-title">일상의 아이디어를 실제 서비스로</h2>
        <p className="section-description">
          작은 불편에서 시작해, 직접 기획하고 개발한 프로젝트입니다.
        </p>
        <div className="sideproject-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sideProjects
            .slice()
            .reverse()
            .map((card) => (
              <SideProjectCard key={card.id} card={card} />
            ))}
        </div>
      </div>
    </section>
  );
}
