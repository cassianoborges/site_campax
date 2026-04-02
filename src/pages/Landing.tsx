import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Stats from "@/components/landing/Stats";
import AppScreenshots from "@/components/landing/AppScreenshots";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <AppScreenshots />
      <Stats />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Landing;
