import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue-dark/40 via-corporate-blue/ to-corporate-blue-light/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            India’s Next-Gen
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              HR Solutions Partner
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses across India with comprehensive HR outsourcing, 
            recruitment excellence, and strategic workforce solutions.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-white">
            <div className="flex items-center gap-2 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <Users className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold">2000+ Employees Placed</span>
            </div>
            <div className="flex items-center gap-2 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
              <TrendingUp className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold">Target: 5000+ by 2025</span>
            </div>
            <div className="flex items-center gap-2 animate-slide-in-right" style={{animationDelay: '0.6s'}}>
              <MapPin className="h-6 w-6 text-yellow-400" />
              <span className="text-lg font-semibold">PAN-India Presence</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{animationDelay: '0.8s'}}>
            <Button variant="corporate" size="lg" className="text-lg px-8 py-3">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="corporate-outline" size="lg" className="text-lg px-8 py-3">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;