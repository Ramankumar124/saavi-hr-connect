import { Button } from "@/components/ui/button";
import { Users, Sun, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up text-[#344256]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-8 sm:mt-12 lg:mt-24 leading-tight">
              India's Next-Gen
              <br />
              <span className="">HR Solutions Partner</span>
            </h1>

            <p className="text-base sm:text-lg mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Empowering business across India with comprehensive HR
              outsourcing, recruitment excellence, and strategic workforce
              solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold w-full sm:w-auto"
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
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold w-full sm:w-auto"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Card 1 - Employees Placed */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">
                  2000+
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Employees Placed
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Successfully placed across various industries.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Growth Target */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">
                  5000+
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Target by FY 2026
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Ambitious growth plan for workforce expansion.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - PAN-India Presence */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-500 mb-1">
                  PAN-India
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  Presence
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
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
