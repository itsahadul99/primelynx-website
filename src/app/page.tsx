import { Navbar, Footer, BackgroundOrbs } from "@/components/shared";
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  TechStackSection,
  WhyChooseUsSection,
  TestimonialsSection,
  ContactSection,
} from "@/components/features/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      {/* <AboutSection /> */}
      <ProjectsSection />
      <TechStackSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
