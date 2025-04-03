'use client';
import Image from 'next/image';
import Link from "next/link";
import projects from '../data/projects';

export default function Projects() {
  return (
    <div className='bg-light-primary'>
      <section id="project" className="container max-w-screen-xl flex items-center justify-center gap-4 scroll-mt-16 mx-auto py-16 px-6">
        <div className="flex items-center justify-center w-[40%]">
          <Image src='/mac.png' alt='컴퓨터 이미지' width={400} height={400} />
        </div>
        <div className='w-[60%]'>
          <h2 className="text-3xl font-bold text-primary">외주 프로젝트
            <span className='text-sm text-bold'> (총: {projects.length}건)</span>
          </h2>
          <p className="mt-4 text-gray-800">외주 프로젝트를 수행하며 폭넓은 경험을 쌓았습니다.<br />
            특히 클라이언트의 요구사항을 반영하고 유지보수를 진행하며 실무에서의 협업 능력을 키울 수 있었습니다.<br />
            이러한 경험을 통해 원활한 소통이 개발 효율성과 직결된다는 것을 깨닫게 되었으며,<br />
            단순한 기술력뿐만 아니라 협업과 커뮤니케이션이 실무에서 더욱 중요하다는 것을 실감했습니다.<br />
            이러한 경험을 바탕으로 보다 효과적인 개발 환경을 만들어가는 데 기여할 수 있다고 생각합니다.
          </p>
          <div className="mt-12">
            {projects.slice().reverse().slice(0, 3).map((project, index) => (
              <div key={project.id} className="flex items-start gap-4 mb-6">
                <span className="w-8 h-8 flex items-center justify-center bg-primary text-white font-bold rounded-full">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-800">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-12'>
            <Link href="/projects">
              <button className="px-6 py-3 bg-gray-200 text-primary font-bold rounded-lg cursor-pointer hover:bg-primary hover:text-white">더보기</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
