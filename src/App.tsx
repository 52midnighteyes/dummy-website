import NavBar from "./components/navbar";
import AboutMeSection from "./pages/home/about-me";
import HeroSection from "./pages/home/hero-section";
import SkillsSection from "./pages/home/skills-section";

function App() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
    </>
  );
}

export default App;
