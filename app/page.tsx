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
        <div className='bg-[url(/bg.webp)] bg-cover bg-top-left bg-fixed md:bg-center md:bg-[length:110%] xl:bg-no-repeat'>
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
