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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Saavi HR</h3>
                <p className="text-gray-300">Business Solutions Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              India's fastest growing HR solutions partner, empowering business
              with comprehensive workforce management and recruitment
              excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-corporate-blue/20 rounded-lg hover:bg-corporate-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-corporate-blue/20 rounded-lg hover:bg-corporate-blue transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-corporate-blue/20 rounded-lg hover:bg-corporate-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
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
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
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
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-corporate-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-gray-300 text-sm">
                    Plot No. 123, Phase 8B
                    <br />
                    Phase VIII-B, Industrial Area, Mohali, Punjab, 160055
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-corporate-blue mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">+91 172 451 3879</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-corporate-blue mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-300 text-sm">Business@saavihr.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-corporate-blue mr-3" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-300 text-sm">Mon-Fri: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Saavi HR Business Solutions Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
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
