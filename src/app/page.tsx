import HeroSection from "@/components/HeroSection";
import WhyChoose from "@/components/WhyChoose";
import AboutSection from "@/components/About";
import Comprehensive from "@/components/Comprehensive";
import WhyChoosetwo from "@/components/WhyChoosetwo";
import ReadyToGive from "@/components/ReadyToGive";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChoose />
      <AboutSection/>
      <Comprehensive/>
      <WhyChoosetwo/>
      <ReadyToGive/>
    </main>
  );
}
