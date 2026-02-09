import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProceduresSection from "@/components/ProceduresSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProceduresSection />
      <BeforeAfterSection />
      <ProfessionalsSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
