import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Smartphone, DollarSign, Shield, Users } from "lucide-react";

const WhyChooseSection = () => {
  const advantages = [
    {
      icon: Users,
      title: "Grassroot Industrial Understanding",
      description: "Deep insights into various industries with hands-on experience across sectors, ensuring solutions that truly fit your business needs."
    },
 
  
    {
      icon: CheckCircle,
      title: "Transparent Process",
      description: "Fully digitized and transparent processes ensuring complete visibility and accountability in all operations."
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
            to deliver HR solutions that drive your business way forward.
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
                <h3 className="text-xl whitespace-nowrap font-bold text-corporate-grey-dark mb-4 group-hover:text-corporate-blue transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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