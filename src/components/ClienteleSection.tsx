import { Card, CardContent } from "@/components/ui/card";

const ClienteleSection = () => {
  const majorClients = [
    { name: "Flipkart", category: "E-commerce" },
    { name: "Honda Cars India", category: "Automotive" },
    { name: "Aditya Birla Group", category: "Conglomerate" },
    { name: "Airtel", category: "Telecom" },
    { name: "Godrej Group", category: "Consumer Goods" },
    { name: "Bajaj Finance", category: "Financial Services" },
    { name: "Paytm", category: "Fintech" },
    { name: "Tata Starbucks", category: "Food & Beverage" }
  ];

  const otherClients = [
    "Parle Agro", "Croma", "Panasonic Anchor", "Haier India",
    "Faasos", "FreshMenu", "Grofers", "Stanley Black & Decker", "Orient Electric"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to serve some of India's most prestigious companies, 
            helping them achieve their workforce goals with excellence.
          </p>
        </div>

        {/* Major Clients Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-corporate-grey-dark text-center mb-8">
            Leading Enterprise Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {majorClients.map((client, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-0"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-blue/20 transition-colors">
                    <span className="text-2xl font-bold text-corporate-blue">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-corporate-grey-dark mb-2 group-hover:text-corporate-blue transition-colors">
                    {client.name}
                  </h4>
                  <p className="text-sm text-gray-500">{client.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="bg-gradient-to-r from-corporate-grey/50 to-white rounded-2xl p-8">
          <h3 className="text-xl font-bold text-corporate-grey-dark text-center mb-8">
            More Valued Partners
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {otherClients.map((client, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-12 h-12 bg-corporate-accent/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-corporate-accent/20 transition-colors">
                  <span className="text-lg font-bold text-corporate-accent">
                    {client.charAt(0)}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-700 group-hover:text-corporate-accent transition-colors">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-gradient-to-br from-corporate-blue/5 to-corporate-blue/10 rounded-2xl">
            <div className="text-4xl font-bold text-corporate-blue mb-2">500+</div>
            <div className="text-lg font-medium text-corporate-grey-dark mb-2">Active Clients</div>
            <div className="text-gray-600">Across various industries</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-corporate-accent/5 to-corporate-accent/10 rounded-2xl">
            <div className="text-4xl font-bold text-corporate-accent mb-2">95%</div>
            <div className="text-lg font-medium text-corporate-grey-dark mb-2">Client Retention</div>
            <div className="text-gray-600">Long-term partnerships</div>
          </div>
          
          <div className="text-center p-8 bg-gradient-to-br from-corporate-blue-light/5 to-corporate-blue-light/10 rounded-2xl">
            <div className="text-4xl font-bold text-corporate-blue-light mb-2">8+</div>
            <div className="text-lg font-medium text-corporate-grey-dark mb-2">Years Experience</div>
            <div className="text-gray-600">Industry expertise</div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-light rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Network</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Become part of our trusted partner network and experience the difference 
              that professional HR solutions can make for your business.
            </p>
            <button className="px-8 py-3 bg-white text-corporate-blue rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;