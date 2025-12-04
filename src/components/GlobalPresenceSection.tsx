import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, Phone, Users } from "lucide-react";

const GlobalPresenceSection = () => {
  const offices = [
    {
      city: "Mohali",
      state: "Punjab",
      type: "Headquarters",
      address: " Plot No E-253 , First Floor, Cabin No 107, Mohali",
      phone: "+91 172 451 3879",
      isHQ: true,
    },
    {
      city: "Delhi",
      state: "Delhi NCR",
      type: "Regional Office",
      address: "Connaught Place, New Delhi",
      phone: "+91 11 XXX XXXX",
    },
    {
      city: "Gurgaon",
      state: "Haryana",
      type: "Regional Office",
      address: "Cyber City, Gurgaon",
      phone: "+91 124 XXX XXXX",
    },
    {
      city: "Noida",
      state: "Uttar Pradesh",
      type: "Regional Office",
      address: "Sector 62, Noida",
      phone: "+91 120 XXX XXXX",
    },
    {
      city: "Pune",
      state: "Maharashtra",
      type: "Branch Office",
      address: "Hinjewadi IT Park, Pune",
      phone: "+91 20 XXX XXXX",
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      type: "Regional Office",
      address: "Andheri East, Mumbai",
      phone: "+91 22 XXX XXXX",
    },
    {
      city: "Kolkata",
      state: "West Bengal",
      type: "Regional Office",
      address: "Salt Lake City, Kolkata",
      phone: "+91 33 XXX XXXX",
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      type: "Regional Office",
      address: "Electronic City, Bangalore",
      phone: "+91 80 XXX XXXX",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-4 sm:mb-6 px-2">
            Our PAN-India Presence
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            With strategically located offices across major Indian cities, we
            ensure seamless service delivery and local expertise nationwide.
          </p>
        </div>

        {/* Headquarters Highlight */}
        <div className="mb-10 sm:mb-12">
          <Card className="bg-gradient-to-r from-corporate-blue to-corporate-blue-light text-white border-0">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mr-2 sm:mr-3" />
                    <span className="text-base sm:text-lg font-medium text-yellow-400">
                      Headquarters
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    Mohali, Punjab
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 leading-relaxed">
                    Our state-of-the-art headquarters in Mohali serves as the
                    central hub for our nationwide operations, housing our core
                    management team and advanced technology infrastructure.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">
                        Plot No E-253 , F.F, C.N 107, Phase VIII-B, Industrial
                        Area, Mohali, Punjab
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        +91 172 451 3879
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6 md:mt-0">
                  <div className="inline-block p-6 sm:p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <img
                      className="h-24 w-24 sm:h-32 sm:w-32 text-yellow-400 mx-auto mb-3 sm:mb-4"
                      src="./head.png"
                    />
                    <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                      Command Office
                    </h4>
                    <p className="text-sm sm:text-base text-white/90">
                      Coordinating excellence across India
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expansion Plans */}
        <div className="bg-gradient-to-r from-corporate-grey/50 to-white rounded-2xl p-6 sm:p-8">
          <div className="text-center">
            <Users className="h-12 w-12 sm:h-16 sm:w-16 text-corporate-blue mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl font-bold text-corporate-grey-dark mb-3 sm:mb-4">
              Expanding Our Reach
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              As part of our vision to become India's top HR solutions provider,
              we're continuously expanding our presence to better serve clients
              nationwide.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
              <span className="px-3 py-1 bg-corporate-blue/10 text-corporate-blue rounded-full">
                Coming Soon: Chennai
              </span>
              <span className="px-3 py-1 bg-corporate-accent/10 text-corporate-accent rounded-full">
                Coming Soon: Hyderabad
              </span>
              <span className="px-3 py-1 bg-corporate-blue-light/10 text-corporate-blue-light rounded-full">
                Coming Soon: Ahmedabad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
