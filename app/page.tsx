import Career from './components/Career';
import Footer from './components/Footer';
import Header from './components/Header';
import Introduce from './components/Introduce';
import Projects from './components/Projects';
import SideProjects from './components/SideProjects';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className='bg-[url(/bg.png)] bg-contain bg-top-left xl:bg-cover xl:bg-no-repeat'>
          <Introduce />
          <Career />
        </div>
        <Projects />
        <SideProjects />
      </main>
      <Footer />
    </>
  );
}
