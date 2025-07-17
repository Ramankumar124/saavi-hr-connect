import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Building2, Phone, Users } from "lucide-react";

const GlobalPresenceSection = () => {
  const offices = [
    {
      city: "Mohali",
      state: "Punjab",
      type: "Headquarters",
      address: "Plot No. 123, Phase 8B, Industrial Area, Mohali",
      phone: "+91 172 XXX XXXX",
      isHQ: true
    },
    {
      city: "Delhi",
      state: "Delhi NCR",
      type: "Regional Office",
      address: "Connaught Place, New Delhi",
      phone: "+91 11 XXX XXXX"
    },
    {
      city: "Gurgaon",
      state: "Haryana",
      type: "Regional Office",
      address: "Cyber City, Gurgaon",
      phone: "+91 124 XXX XXXX"
    },
    {
      city: "Noida",
      state: "Uttar Pradesh",
      type: "Regional Office",
      address: "Sector 62, Noida",
      phone: "+91 120 XXX XXXX"
    },
    {
      city: "Pune",
      state: "Maharashtra",
      type: "Branch Office",
      address: "Hinjewadi IT Park, Pune",
      phone: "+91 20 XXX XXXX"
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      type: "Regional Office",
      address: "Andheri East, Mumbai",
      phone: "+91 22 XXX XXXX"
    },
    {
      city: "Kolkata",
      state: "West Bengal",
      type: "Regional Office",
      address: "Salt Lake City, Kolkata",
      phone: "+91 33 XXX XXXX"
    },
    {
      city: "Bangalore",
      state: "Karnataka",
      type: "Regional Office",
      address: "Electronic City, Bangalore",
      phone: "+91 80 XXX XXXX"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6">
            Our PAN-India Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With strategically located offices across major Indian cities, 
            we ensure seamless service delivery and local expertise nationwide.
          </p>
        </div>

        {/* Headquarters Highlight */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-corporate-blue to-corporate-blue-light text-white border-0">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Building2 className="h-8 w-8 text-yellow-400 mr-3" />
                    <span className="text-lg font-medium text-yellow-400">Headquarters</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Mohali, Punjab</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Our state-of-the-art headquarters in Mohali serves as the central hub 
                    for our nationwide operations, housing our core management team and 
                    advanced technology infrastructure.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-yellow-400 mr-2" />
                      <span>Plot No. 123, Phase 8B, Industrial Area, Mohali</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-yellow-400 mr-2" />
                      <span>+91 172 XXX XXXX</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <Building2 className="h-24 w-24 text-yellow-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Central Command</h4>
                    <p className="text-white/90">Coordinating excellence across India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offices Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {offices.filter(office => !office.isHQ).map((office, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-0"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-corporate-accent/10 rounded-lg mr-3">
                    <MapPin className="h-5 w-5 text-corporate-accent" />
                  </div>
                  <span className="text-sm font-medium text-corporate-accent">
                    {office.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-corporate-grey-dark mb-2 group-hover:text-corporate-blue transition-colors">
                  {office.city}
                </h3>
                <p className="text-gray-600 mb-4">{office.state}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start">
                    <Building2 className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-corporate-blue/5 to-corporate-blue/10 rounded-2xl">
            <div className="text-3xl font-bold text-corporate-blue mb-2">8+</div>
            <div className="text-gray-600">Major Cities</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-corporate-accent/5 to-corporate-accent/10 rounded-2xl">
            <div className="text-3xl font-bold text-corporate-accent mb-2">28+</div>
            <div className="text-gray-600">States Covered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-corporate-blue-light/5 to-corporate-blue-light/10 rounded-2xl">
            <div className="text-3xl font-bold text-corporate-blue-light mb-2">500+</div>
            <div className="text-gray-600">Team Members</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-corporate-blue/5 to-corporate-blue/10 rounded-2xl">
            <div className="text-3xl font-bold text-corporate-blue mb-2">24/7</div>
            <div className="text-gray-600">Support Network</div>
          </div>
        </div>

        {/* Expansion Plans */}
        <div className="bg-gradient-to-r from-corporate-grey/50 to-white rounded-2xl p-8">
          <div className="text-center">
            <Users className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-corporate-grey-dark mb-4">
              Expanding Our Reach
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              As part of our vision to become India's top HR solutions provider, 
              we're continuously expanding our presence to better serve clients nationwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
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