import Career from './components/Career';
import Introduce from './components/Introduce';
import Projects from './components/Projects';
import SideProjects from './components/SideProjects';

export default function Home() {
  return (
    <main>
      <Introduce />
      <Career />
      <Projects />
      <SideProjects />
    </main>
  );
}
