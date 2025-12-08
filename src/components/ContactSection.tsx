import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitContactForm = async () => {
    const API_ENDPOINT =
      "https://script.google.com/macros/s/AKfycbxohxXroKfhh8yvT_Nb62zEq4SRjFWr9LQ0SpLUwFBipZeZ5QCHXkKkhoI7vxZA5huF9w/exec";

    try {
      const params = new URLSearchParams();
      params.append("firstName", formData.firstName);
      params.append("lastName", formData.lastName);
      params.append("companyName", formData.companyName);
      params.append("email", formData.email);
      params.append("phone", formData.phone);
      params.append("service", formData.service);
      params.append("message", formData.message);

      const response = await fetch(`${API_ENDPOINT}?${params.toString()}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      return await response.json();
    } catch (error) {
      console.error("Error submitting form:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm();
      toast.success("Thank you! Your message has been sent successfully.", {
        duration: 4000,
        position: "top-center",
      });
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-corporate-grey to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-corporate-grey-dark mb-4 sm:mb-6 px-2">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Ready to transform your HR operations? Contact our experts today for
            a personalized consultation and discover how we can help your
            business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* HQ Contact */}
            <Card className="border-0 bg-white shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-corporate-blue text-lg sm:text-xl">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                  Head office - Mohali
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark text-sm sm:text-base">
                      Address
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Plot No E-253 , First Floor, Cabin No 107
                      <br />
                      Phase VIII-B, Industrial Area, Mohali, Punjab, 160055
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark text-sm sm:text-base">
                      Phone
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      +91 172 451 3879
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-corporate-grey-dark text-sm sm:text-base">
                      Email
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm break-all">
                      Business@saavihr.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-0 bg-gradient-to-r from-corporate-blue/5 to-corporate-accent/5">
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-corporate-blue mr-2" />
                  <h3 className="text-lg sm:text-xl font-bold text-corporate-grey-dark">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 text-sm sm:text-base">
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
                  <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-corporate-blue/10 rounded-lg">
                    <p className="text-xs sm:text-sm text-corporate-blue font-medium">
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
              <CardTitle className="text-xl sm:text-2xl text-corporate-grey-dark">
                Send us a Message
              </CardTitle>
              <p className="text-sm sm:text-base text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                      First Name *
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                      Last Name *
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                    Company Name *
                  </label>
                  <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    className="border-gray-300"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-corporate-grey-dark mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-corporate-blue/20 focus:border-corporate-blue"
                  >
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
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements..."
                    className="border-gray-300 min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="corporate"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Quick Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 lg:mt-16">
          <div className="text-center p-5 sm:p-6 bg-white rounded-xl shadow-card hover:shadow-elegant transition-shadow">
            <Phone className="h-10 w-10 sm:h-12 sm:w-12 text-corporate-blue mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-bold text-corporate-grey-dark mb-2">
              Call Us
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Speak directly with our HR experts
            </p>
            <Button
              variant="corporate-outline"
              size="sm"
              className="text-xs sm:text-sm"
            >
              +91 172 451 3879
            </Button>
          </div>

          <div className="text-center p-5 sm:p-6 bg-white rounded-xl shadow-card hover:shadow-elegant transition-shadow">
            <Mail className="h-10 w-10 sm:h-12 sm:w-12 text-corporate-accent mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-bold text-corporate-grey-dark mb-2">
              Email Us
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Send us your requirements
            </p>
            <Button
              variant="corporate-outline"
              size="sm"
              className="text-xs sm:text-sm break-all"
            >
              Business@saavihr.com
            </Button>
          </div>

          <div className="text-center p-5 sm:p-6 bg-white rounded-xl shadow-card hover:shadow-elegant transition-shadow">
            <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-corporate-blue-light mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-bold text-corporate-grey-dark mb-2">
              Quick Response
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              We respond within 24 hours
            </p>
            <Button
              variant="corporate-outline"
              size="sm"
              className="text-xs sm:text-sm"
            >
              Schedule Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
