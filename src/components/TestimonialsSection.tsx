import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "Grofers",
      feedback: "Saavi HR has been instrumental in scaling our workforce efficiently. Their recruitment process is seamless and they consistently deliver quality candidates.",
      rating: 5,
      logo: "G"
    },
    {
      company: "Zopnow",
      feedback: "Outstanding payroll management and compliance support. They've simplified our HR operations significantly while ensuring 100% statutory compliance.",
      rating: 5,
      logo: "Z"
    },
    {
      company: "Orient Electric",
      feedback: "Professional service delivery and excellent candidate quality. Their understanding of our industry requirements is commendable.",
      rating: 5,
      logo: "O"
    },
    {
      company: "VPG Stores",
      feedback: "Reliable partner for our staffing needs. Their technology-driven approach and transparent processes have made workforce management effortless.",
      rating: 5,
      logo: "V"
    },
    {
      company: "Genesis Colors",
      feedback: "Exceptional training and development programs. Our employees have shown remarkable improvement in skills and productivity.",
      rating: 5,
      logo: "GC"
    },
    {
      company: "Roadrunnr",
      feedback: "Quick turnaround time and excellent support. Saavi HR understands the urgency of logistics business and delivers accordingly.",
      rating: 5,
      logo: "R"
    },
    {
      company: "Arctic",
      feedback: "Comprehensive HR solutions under one roof. Their vendor audit services have helped us maintain quality standards across our operations.",
      rating: 5,
      logo: "A"
    },
    {
      company: "Brattle Foods",
      feedback: "Cost-effective solutions without compromising on quality. Their government remittance support has saved us considerable time and effort.",
      rating: 5,
      logo: "B"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-corporate-grey to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders 
            have to say about our HR solutions and service excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-0 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-corporate-blue/30" />
                </div>
                
                {/* Feedback */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  "{testimonial.feedback}"
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="h-4 w-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>
                
                {/* Company */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-corporate-blue/20 transition-colors">
                    <span className="text-sm font-bold text-corporate-blue">
                      {testimonial.logo}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-corporate-grey-dark group-hover:text-corporate-blue transition-colors">
                      {testimonial.company}
                    </h4>
                    <p className="text-sm text-gray-500">Trusted Partner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-light rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-white/90">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Support Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-corporate-grey-dark mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence that has made our clients successful. 
            Let's discuss how we can transform your HR operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-corporate-blue text-white rounded-lg hover:bg-corporate-blue-dark transition-colors">
              Get Started Today
            </button>
            <button className="px-8 py-3 border-2 border-corporate-blue text-corporate-blue rounded-lg hover:bg-corporate-blue hover:text-white transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;