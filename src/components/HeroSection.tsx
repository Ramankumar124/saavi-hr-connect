import { Button } from "@/components/ui/button";
import { Users, Sun, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up text-[#344256]">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold  mt-24 ">
              India's Next-Gen
              <br />
              <span className=" ">HR Solutions Partner</span>
            </h1>

            <p className="text-lg   mb-8 max-w-xl leading-relaxed">
              Empowering business across India with comprehensive HR
              outsourcing, recruitment excellence, and strategic workforce
              solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-lg font-semibold"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services
              </Button>

              <Button
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-lg px-8 py-6 rounded-lg font-semibold"
                size="lg"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Card 1 - Employees Placed */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-1">
                  2000+
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Employees Placed
                </h4>
                <p className="text-gray-600 text-sm">
                  Successfully placed across various industries.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Growth Target */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-1">
                  5000+
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Target by FY 2026
                </h4>
                <p className="text-gray-600 text-sm">
                  Ambitious growth plan for workforce expansion.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - PAN-India Presence */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sun className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-500 mb-1">
                  PAN-India
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Presence
                </h4>
                <p className="text-gray-600 text-sm">
                  Nationwide coverage across all major cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
