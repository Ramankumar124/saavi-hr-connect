import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Smartphone, DollarSign, Shield, Users } from "lucide-react";

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: Users,
      title: "Grassroot Industry Understanding",
      description: "Deep insights into various industries with hands-on experience across sectors, ensuring solutions that truly fit your business needs."
    },
    {
      icon: TrendingUp,
      title: "Strong Financial Background",
      description: "Robust financial foundation ensuring stability, reliability, and long-term partnership for your business growth."
    },
    {
      icon: Smartphone,
      title: "Digital Attendance Tracking",
      description: "Advanced biometric and mobile app-based attendance systems for accurate workforce monitoring and management."
    },
    {
      icon: CheckCircle,
      title: "Transparent Process",
      description: "Fully digitized and transparent processes ensuring complete visibility and accountability in all operations."
    },
    {
      icon: DollarSign,
      title: "Cost-Efficient Solutions",
      description: "Optimized pricing models that deliver maximum value while reducing your operational costs significantly."
    },
    {
      icon: Shield,
      title: "100% Compliance Assurance",
      description: "Complete statutory compliance management ensuring your business stays protected from legal risks."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-corporate-grey to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6">
            Why Choose Saavi HR?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine industry expertise, innovative technology, and unwavering commitment 
            to deliver HR solutions that drive your business forward.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-0"
            >
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-corporate-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-corporate-blue/20 transition-colors">
                  <advantage.icon className="h-10 w-10 text-corporate-blue" />
                </div>
                <h3 className="text-xl font-bold text-corporate-grey-dark mb-4 group-hover:text-corporate-blue transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Highlight */}
        <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-light rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Advanced Technology Integration</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Biometric attendance systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Mobile app-based tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Real-time dashboard monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Automated compliance reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
                  <span className="text-lg">Digital payroll processing</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Smartphone className="h-24 w-24 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Smart Solutions</h4>
                <p className="text-white/90">Technology-driven HR management for the modern workplace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-corporate-blue mb-2">99.9%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-corporate-accent mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-corporate-blue-light mb-2">100%</div>
            <div className="text-gray-600">Compliance</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-corporate-blue mb-2">10K+</div>
            <div className="text-gray-600">Happy Employees</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;