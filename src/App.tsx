import NavBar from "./components/navbar";
import AboutMeSection from "./pages/home/about-me";
import ContactMe from "./pages/home/contactme-section";
import HeroSection from "./pages/home/hero-section";
import ProjectsSection from "./pages/home/projects-section";
import SkillsSection from "./pages/home/skills-section";
import TestimonialSection from "./pages/home/testimonial-section";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactMe />
    </>
  );
}

export default App;
