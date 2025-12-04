import { Card, CardContent } from "@/components/ui/card";

const ClienteleSection = () => {
  const majorClients = [
    {
      name: "Jubilant",
      category: "Conglomerate",
      logo: "https://logo.clearbit.com/jubilantfoodworks.com",
    },
    {
      name: "Ecom Express",
      category: "Logistics",
      logo: "https://logo.clearbit.com/ecomexpress.in",
    },
    {
      name: "WeDib Express",
      category: "Logistics",
      logo: "https://logo.clearbit.com/wedibexpress.com",
    },
    {
      name: "Scootsy",
      category: "Food Delivery",
      logo: "https://logo.clearbit.com/scootsy.com",
    },
    {
      name: "ElasticRun",
      category: "Logistics & Supply Chain",
      logo: "https://logo.clearbit.com/elastic.run",
    },
    {
      name: "CriticaLog",
      category: "Logistics",
      logo: "https://logo.clearbit.com/criticalog.com",
    },
    {
      name: "Yusen Logistics",
      category: "Logistics",
      logo: "https://logo.clearbit.com/yusen-logistics.com",
    },
    {
      name: "Delhivery",
      category: "Logistics",
      logo: "https://logo.clearbit.com/delhivery.com",
    },
    {
      name: "Grab a Grub",
      category: "Logistics / Hyperlocal Delivery",
      logo: "https://logo.clearbit.com/grab.in",
    },
    {
      name: "Meesho",
      category: "E-commerce",
      logo: "https://logo.clearbit.com/meesho.com",
    },
    {
      name: "Flipkart",
      category: "E-commerce",
      logo: "https://logo.clearbit.com/flipkart.com",
    },
  ];

  const otherClients = [
    "Parle Agro",
    "Croma",
    "Panasonic Anchor",
    "Haier India",
    "Faasos",
    "FreshMenu",
    "Grofers",
    "Stanley Black & Decker",
    "Orient Electric",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-4 sm:mb-6 px-2">
            Our Trusted Partners
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            We're proud to serve some of India's most prestigious companies,
            helping them achieve their workforce goals with excellence.
          </p>
        </div>

        {/* Major Clients Showcase */}
        <div className="mb-10 sm:mb-12 lg:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-corporate-grey-dark text-center mb-6 sm:mb-8 px-2">
            Leading Enterprise Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {majorClients.map((client, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-0"
              >
                <CardContent className="p-4 sm:p-5 lg:p-6 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.nextElementSibling?.classList.remove("hidden");
                      }}
                    />
                    <span className="text-xl sm:text-2xl font-bold text-corporate-blue hidden">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold text-corporate-grey-dark mb-1 sm:mb-2 group-hover:text-corporate-blue transition-colors">
                    {client.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {client.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue-light rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Join Our Growing Network
            </h3>
            <p className="text-sm sm:text-base text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Become part of our trusted partner network and experience the
              difference that professional HR solutions can make for your
              business.
            </p>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-corporate-blue rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
