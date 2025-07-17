import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ClienteleSection from "@/components/ClienteleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <WhyChooseSection />
        <section id="clients">
          <ClienteleSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="presence">
          <GlobalPresenceSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
