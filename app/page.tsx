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
        <Introduce />
        <Career />
        <Projects />
        <SideProjects />
      </main>
      <Footer />
    </>
  );
}
