import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  TrendingUp,
  Smartphone,
  DollarSign,
  Shield,
  Users,
} from "lucide-react";

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: Users,
      title: "Grassroot Industrial Understanding",
      description:
        "Deep insights into various industries with hands-on experience across sectors, ensuring solutions that truly fit your business needs.",
    },

    {
      icon: CheckCircle,
      title: "Transparent Process",
      description:
        "Fully digitized and transparent processes ensuring complete visibility and accountability in all operations.",
    },
    {
      icon: Shield,
      title: "100% Compliance Assurance",
      description:
        "Complete statutory compliance management ensuring your business stays protected from legal risks.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-corporate-grey to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-4 sm:mb-6 px-2">
            Why Choose Saavi HR?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            We combine industrial expertise, innovative technology, and
            unwavering commitment to deliver HR solutions that drive your
            business way forward.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-0"
            >
              <CardContent className="p-5 sm:p-6 lg:p-8 text-center">
                <div className="p-3 sm:p-4 bg-corporate-blue/10 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-corporate-blue/20 transition-colors">
                  <advantage.icon className="h-8 w-8 sm:h-10 sm:w-10 text-corporate-blue" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-corporate-grey-dark mb-3 sm:mb-4 group-hover:text-corporate-blue transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
