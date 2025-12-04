import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-grey-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                <span className="text-white font-bold text-lg sm:text-xl">
                  S
                </span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Saavi HR</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Business Solutions Pvt. Ltd.
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              India's fastest growing HR solutions partner, empowering business
              with comprehensive workforce management and recruitment
              excellence.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="#"
                className="p-2 bg-corporate-blue/20 rounded-lg hover:bg-corporate-blue transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-corporate-blue/20 rounded-lg hover:bg-corporate-blue transition-colors"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-corporate-blue/20 rounded-lg hover:bg-corporate-blue transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Clients
                </a>
              </li>

              <li>
                <a
                  href="#presence"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Global Presence
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Recruitment Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Payroll Outsourcing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Statutory Compliance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Training & Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  HR Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Vendor Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Contact Info
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-corporate-blue mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">
                    Headquarters
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Plot No. 123, Phase 8B
                    <br />
                    Phase VIII-B, Industrial Area, Mohali, Punjab, 160055
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-corporate-blue mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Phone</p>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    +91 172 451 3879
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-corporate-blue mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <p className="text-gray-300 text-xs sm:text-sm break-all">
                    Business@saavihr.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-corporate-blue mr-2 sm:mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm sm:text-base">
                    Business Hours
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Mon-Fri: 9AM-6PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-300 text-xs sm:text-sm text-center md:text-left">
              © 2024 Saavi HR Business Solutions Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
