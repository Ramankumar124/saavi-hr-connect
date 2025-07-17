import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Building2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-corporate-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6">
            About Saavi HR Business Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A leading HR outsourcing and recruitment firm with PAN-India presence, 
            dedicated to transforming businesses through strategic workforce solutions.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-corporate-blue/10 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-corporate-blue" />
                </div>
                <h3 className="text-2xl font-bold text-corporate-grey-dark">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To achieve a <span className="font-semibold text-corporate-blue">15,000+ associate base by 2025</span>, 
                providing comprehensive HR solutions that empower businesses to focus on their core competencies 
                while we handle their workforce management needs with excellence and innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-corporate-accent/10 rounded-lg mr-4">
                  <Eye className="h-8 w-8 text-corporate-accent" />
                </div>
                <h3 className="text-2xl font-bold text-corporate-grey-dark">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become <span className="font-semibold text-corporate-accent">India's top human resource provider</span>, 
                setting industry standards through innovative solutions, ethical practices, and unwavering commitment 
                to client success and employee satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="p-4 bg-corporate-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-corporate-blue" />
            </div>
            <h4 className="text-2xl font-bold text-corporate-grey-dark mb-2">10,000+</h4>
            <p className="text-gray-600">Employees Placed Across India</p>
          </div>

          <div className="text-center">
            <div className="p-4 bg-corporate-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-10 w-10 text-corporate-accent" />
            </div>
            <h4 className="text-2xl font-bold text-corporate-grey-dark mb-2">HQ Mohali</h4>
            <p className="text-gray-600">Headquarters with National Reach</p>
          </div>

          <div className="text-center">
            <div className="p-4 bg-corporate-blue-light/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Target className="h-10 w-10 text-corporate-blue-light" />
            </div>
            <h4 className="text-2xl font-bold text-corporate-grey-dark mb-2">2025 Goal</h4>
            <p className="text-gray-600">15,000+ Associates Target</p>
          </div>
        </div>

        {/* Management Section */}
        <Card className="bg-gradient-to-r from-corporate-blue/5 to-corporate-accent/5">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-corporate-grey-dark mb-6 text-center">Leadership Excellence</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-corporate-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-corporate-blue">RK</span>
                </div>
                <h4 className="text-xl font-bold text-corporate-grey-dark mb-2">Ravinder Kumar</h4>
                <p className="text-gray-600">Co-Founder & Strategic Leader</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-corporate-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-corporate-accent">JK</span>
                </div>
                <h4 className="text-xl font-bold text-corporate-grey-dark mb-2">Jitendar Kumar</h4>
                <p className="text-gray-600">Co-Founder & Operations Head</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;