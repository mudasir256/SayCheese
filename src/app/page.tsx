import HeroSection from "@/components/HeroSection/index";
import WhyChoose from "@/components/WhyChoose/index";
import AboutSection from "@/components/About/index";
import Comprehensive from "@/components/Comprehensive/index";
import WhyChoosetwo from "@/components/WhyChoosetwo/index";
import ReadyToGive from "@/components/ReadyToGive/index";
import Reviews from "@/components/Reviews/index";


export default function Home() {
  return (
    <main >
      <HeroSection />
      <WhyChoose />
      <AboutSection />
      <Comprehensive />
      <WhyChoosetwo />
      <ReadyToGive />
      <Reviews />
    </main>
  );
}
