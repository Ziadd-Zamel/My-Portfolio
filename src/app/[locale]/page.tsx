import HeroSection from "./_components/hero/hero-section";
import FeaturedProjectsSection from "./_components/featured-projects/featured-projects-section";
import AboutSection from "./_components/about/about-section";
import SkillsSection from "./_components/skills/skills-section";
import ContactSection from "./_components/contact/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
