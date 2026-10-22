import InteractiveHero from "./components/InteractiveHero";
import AboutStory from "./components/AboutStory";
import ProjectRibbon from "./components/ProjectRibbon";
import PortfolioMotion from "./components/PortfolioMotion";
import Career from "./components/Career";
import FeaturedWorks from "./components/FeaturedWorks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import SideProjects from "./components/SideProjects";
import Strengths from "./components/Strengths";

export default function Home() {
  return (
    <>
      <PortfolioMotion />
      <Header />
      <main id="main-content" className="overflow-x-clip">
        <InteractiveHero />
        {/* <Introduce /> */}
        <ProjectRibbon />
        <AboutStory />
        <FeaturedWorks />
        <Strengths />
        <Career />
        <SideProjects />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
