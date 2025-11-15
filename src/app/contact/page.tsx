"use client";
import { Clock, MapPin, Phone, Mail, Navigation as NavigationIcon } from "lucide-react";
import Button from "@/components/Button";

const Contact = () => {
  const openDirections = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=12413+Central+Ave,+Chino,+CA+91710', '_blank');
  };

  return <div className="min-h-screen">

    <div>
      <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-logo-blue">Get</span>{' '}
              <span className="text-logo-green">in</span>{' '}
              <span className="text-logo-yellow">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Ready to schedule your child's appointment? Contact us today and let's create beautiful, healthy smiles together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form action="https://formspree.io/f/xkgbdjwy" method="POST" className="space-y-6">
                  <input type="hidden" name="_next" value="https://saycheesekidsdental.lovable.app/contact?thank-you=true" />
                  <input type="text" name="_gotcha" className="hidden" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent Name *</label>
                      <input
                        name="Parent Name"
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Child's Name *</label>
                      <input
                        name="Child's Name"
                        placeholder="Child's full name"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        name="Phone Number"
                        placeholder="(909) 479-6030"
                        type="tel"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Child's Age *</label>
                      <input
                        name="Child's Age"
                        placeholder="Age"
                        type="number"
                        min="1"
                        max="18"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      name="Email Address"
                      placeholder="your.email@example.com"
                      type="email"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Service *</label>
                    <select
                      name="Preferred Service"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Pediatric Cleaning">Pediatric Cleaning</option>
                      <option value="Braces Consultation">Braces Consultation</option>
                      <option value="Orthodontic Evaluation">Orthodontic Evaluation</option>
                      <option value="Emergency Visit">Emergency Visit</option>
                      <option value="New Patient Visit">New Patient Visit</option>
                      <option value="Follow-up Appointment">Follow-up Appointment</option>
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      name="Additional Message"
                      placeholder="Tell us about any specific concerns or questions..."
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue resize-none"
                    />
                  </div>

                  <Button
                    text="Request Appointment"
                    variant="blue"
                    size="lg"
                    rounded="lg"
                    fullWidth={true}
                    type="submit"
                  />
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="border-2 border-logo-green/30 bg-gradient-to-br from-logo-green/10 to-logo-blue/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-logo-blue" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:9094796030" className="text-gray-600 hover:text-logo-blue transition-colors">
                        (909) 479-6030
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-logo-green" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:saycheesekidsdental@gmail.com" className="text-gray-600 hover:text-logo-green transition-colors">
                        saycheesekidsdental@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-logo-pink mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">12413 Central Ave<br />Chino, CA 91710</p>
                      <button
                        onClick={openDirections}
                        className="text-logo-pink hover:text-logo-pink/80 transition-colors flex items-center space-x-1 mt-2"
                      >
                        <NavigationIcon className="h-4 w-4" />
                        <span className="text-sm">Get Directions</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-logo-yellow/30 bg-gradient-to-br from-logo-yellow/10 to-logo-pink/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
                  <Clock className="h-5 w-5 text-logo-yellow mr-2" />
                  Office Hours
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-logo-pink">Appointment Only</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-logo-pink/10 rounded-lg border-l-4 border-logo-pink">
                  <p className="text-sm text-gray-700">
                    <strong className="text-logo-pink">Emergency Care:</strong> Available 24/7 for urgent dental needs
                  </p>
                </div>
              </div>

              <div className="h-64 bg-gradient-to-br from-logo-blue/10 to-logo-green/10 rounded-lg overflow-hidden relative border-2 border-logo-blue/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7369999999995!2d-117.6891!3d34.0122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c32a4c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s12413%20Central%20Ave%2C%20Chino%2C%20CA%2091710!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Say Cheese Kids Dental & Orthodontics Location"
                />
                <div className="absolute bottom-2 right-2">
                  <button
                    onClick={openDirections}
                    className="bg-logo-blue hover:bg-logo-blue/90 text-white px-3 py-1 rounded text-sm transition-colors inline-flex items-center space-x-1"
                  >
                    <NavigationIcon className="h-3 w-3" />
                    <span>Directions</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>;
};

export default Contact;
