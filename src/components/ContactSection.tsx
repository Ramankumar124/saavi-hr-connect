import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-corporate-grey to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your HR operations? Contact our experts today 
            for a personalized consultation and discover how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* HQ Contact */}
            <Card className="border-0 bg-white shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-corporate-blue">
                  <MapPin className="h-6 w-6 mr-2" />
                  Headquarters - Mohali
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark">Address</p>
                    <p className="text-gray-600">Plot No. 123, Phase 8B, Industrial Area<br />Mohali, Punjab - 160055</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark">Phone</p>
                    <p className="text-gray-600">+91 172 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark">Email</p>
                    <p className="text-gray-600">info@saavihr.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pune Branch */}
            <Card className="border-0 bg-white shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-corporate-accent">
                  <MapPin className="h-6 w-6 mr-2" />
                  Pune Branch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark">Address</p>
                    <p className="text-gray-600">Hinjewadi IT Park, Phase 2<br />Pune, Maharashtra - 411057</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark">Phone</p>
                    <p className="text-gray-600">+91 20 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark">Email</p>
                    <p className="text-gray-600">pune@saavihr.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 bg-gradient-to-r from-corporate-blue/5 to-corporate-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-corporate-blue mr-2" />
                  <h3 className="text-xl font-bold text-corporate-grey-dark">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-corporate-blue/10 rounded-lg">
                    <p className="text-sm text-corporate-blue font-medium">
                      📞 24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-white shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-corporate-grey-dark">Send us a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                    First Name *
                  </label>
                  <Input placeholder="Enter your first name" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Enter your last name" className="border-gray-300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                  Company Name *
                </label>
                <Input placeholder="Enter your company name" className="border-gray-300" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                    Phone Number *
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" className="border-gray-300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                  Service Required
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue">
                  <option value="">Select a service</option>
                  <option value="recruitment">Recruitment Services</option>
                  <option value="payroll">Payroll Outsourcing</option>
                  <option value="compliance">Statutory Compliance</option>
                  <option value="training">Training & Development</option>
                  <option value="consulting">HR Consulting</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your requirements..."
                  className="border-gray-300 min-h-[120px]"
                />
              </div>

              <Button variant="corporate" size="lg" className="w-full">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-card hover:shadow-elegant transition-shadow">
            <Phone className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
            <h3 className="text-lg font-bold text-corporate-grey-dark mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Speak directly with our HR experts</p>
            <Button variant="corporate-outline" size="sm">
              +91 172 XXX XXXX
            </Button>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-card hover:shadow-elegant transition-shadow">
            <Mail className="h-12 w-12 text-corporate-accent mx-auto mb-4" />
            <h3 className="text-lg font-bold text-corporate-grey-dark mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us your requirements</p>
            <Button variant="corporate-outline" size="sm">
              info@saavihr.com
            </Button>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-card hover:shadow-elegant transition-shadow">
            <Clock className="h-12 w-12 text-corporate-blue-light mx-auto mb-4" />
            <h3 className="text-lg font-bold text-corporate-grey-dark mb-2">Quick Response</h3>
            <p className="text-gray-600 mb-4">We respond within 24 hours</p>
            <Button variant="corporate-outline" size="sm">
              Schedule Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;