import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calculator, 
  Shield, 
  GraduationCap, 
  Scale, 
  ClipboardCheck, 
  Banknote,
  Search
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Recruitment Services",
      description: "End-to-end recruitment solutions including temporary & permanent staffing and executive search.",
      features: ["Temp Staffing", "Permanent Placement", "Executive Search", "Volume Hiring"],
      color: "corporate-blue"
    },
    {
      icon: Calculator,
      title: "Payroll Outsourcing",
      description: "Complete payroll management services with accuracy, compliance, and timely processing.",
      features: ["Salary Processing", "Tax Calculations", "Compliance Reports", "Digital Payslips"],
      color: "corporate-accent"
    },
    {
      icon: Shield,
      title: "Statutory Compliance",
      description: "Comprehensive compliance management for PF, ESI, PT, LWF and other statutory requirements.",
      features: ["PF Management", "ESI Processing", "Professional Tax", "Labour Welfare Fund"],
      color: "corporate-blue-light"
    },
   
  
    {
      icon: ClipboardCheck,
      title: "Vendor Audit & Inspections",
      description: "Thorough vendor assessments and quality inspections to ensure standards.",
      features: ["Vendor Assessment", "Quality Audits", "Compliance Check", "Risk Evaluation"],
      color: "corporate-blue-light"
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      "corporate-blue": "bg-corporate-blue/10 text-corporate-blue border-corporate-blue/20",
      "corporate-accent": "bg-corporate-accent/10 text-corporate-accent border-corporate-accent/20",
      "corporate-blue-light": "bg-corporate-blue-light/10 text-corporate-blue-light border-corporate-blue-light/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap["corporate-blue"];
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From recruitment to compliance like wise, We provide end-to-end HR solutions 
            tailored to your business needs across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-4">
                <div className={`p-3 rounded-lg w-fit mb-4 ${getColorClasses(service.color)}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-corporate-grey-dark group-hover:text-corporate-blue transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary" 
                      className="text-xs bg-corporate-grey text-corporate-grey-dark hover:bg-corporate-blue/10"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-corporate-blue/5 to-corporate-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-corporate-grey-dark mb-4">
              Ready to Transform Your HR Operations?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let our experts help you streamline your HR processes and focus on what matters most - growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-corporate-blue text-white rounded-lg hover:bg-corporate-blue-dark transition-colors">
                Request Consultation
              </button>
              <button className="px-8 py-3 border-2 border-corporate-blue text-corporate-blue rounded-lg hover:bg-corporate-blue hover:text-white transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;