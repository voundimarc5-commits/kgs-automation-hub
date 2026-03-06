import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <NetworkBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ExploreSection />
        <AboutSection />
        <PricingSection />
        <WhySection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
