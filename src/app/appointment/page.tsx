import { Calendar, Clock, Phone, CheckCircle } from "lucide-react";
import Button from "@/components/Button";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Schedule Appointment | Pediatric Dentist Chino, CA",
  description: "Schedule your child's dental appointment at Say Cheese Kids Dental in Chino, CA. Book online or call (909) 479-6030. New patient visits, cleanings, orthodontic consultations, and emergency care available.",
  keywords: [
    "schedule dental appointment",
    "pediatric dentist appointment",
    "book dentist Chino",
    "kids dentist appointment",
    "orthodontic consultation",
    "emergency dental care",
    "new patient visit"
  ],
  openGraph: {
    title: "Schedule Appointment | Say Cheese Kids Dental Chino",
    description: "Book your child's dental appointment online or call (909) 479-6030. Available Monday-Friday 8AM-5PM, Saturday 8AM-2PM.",
    url: `${baseUrl}/appointment`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "Schedule Appointment - Say Cheese Kids Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schedule Appointment | Say Cheese Kids Dental",
    description: "Book your child's dental appointment online or call (909) 479-6030.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: `${baseUrl}/appointment`,
  },
};

const Appointment = () => {
  const appointmentTypes = [
    {
      title: "New Patient Visit",
      duration: "60-90 minutes",
      description: "Comprehensive exam, cleaning, and treatment planning",
      price: "Starting at $150"
    },
    {
      title: "Routine Cleaning",
      duration: "45-60 minutes", 
      description: "Regular checkup and professional cleaning",
      price: "Starting at $120"
    },
    {
      title: "Orthodontic Consultation",
      duration: "30-45 minutes",
      description: "Evaluation for braces or aligners",
      price: "Free consultation"
    },
    {
      title: "Emergency Visit",
      duration: "30-60 minutes",
      description: "Urgent dental care and pain relief",
      price: "Emergency fee: $75"
    }
  ];

  const themeColors = [
    'bg-gradient-to-br from-logo-blue/10 to-logo-blue/5 border-logo-blue/30',
    'bg-gradient-to-br from-logo-green/10 to-logo-green/5 border-logo-green/30',
    'bg-gradient-to-br from-logo-yellow/10 to-logo-yellow/5 border-logo-yellow/30',
    'bg-gradient-to-br from-logo-pink/10 to-logo-pink/5 border-logo-pink/30'
  ];

  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-logo-blue">Schedule</span>{' '}
              <span className="text-logo-green">Your</span>{' '}
              <span className="text-logo-yellow">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your child's dental visit online or call us directly. We make scheduling easy and convenient for busy families.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <article className="lg:col-span-2">
              <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                <header className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Calendar className="h-6 w-6 text-logo-blue mr-3" />
                    Book Your Appointment
                  </h2>
                </header>
                <form action="https://formspree.io/f/xkgbdjwy" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="parent_name" className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name *</label>
                      <input 
                        id="parent_name"
                        name="parent_name" 
                        placeholder="Your full name" 
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="child_name" className="block text-sm font-medium text-gray-700 mb-2">Child's Name *</label>
                      <input 
                        id="child_name"
                        name="child_name" 
                        placeholder="Child's full name" 
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        id="phone"
                        name="phone" 
                        placeholder="(909) 479-6030" 
                        type="tel" 
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="child_age" className="block text-sm font-medium text-gray-700 mb-2">Child's Age *</label>
                      <input 
                        id="child_age"
                        name="child_age" 
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input 
                      id="email"
                      name="email" 
                      placeholder="your.email@example.com" 
                      type="email" 
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="appointment_type" className="block text-sm font-medium text-gray-700 mb-2">Type of Appointment *</label>
                    <select 
                      id="appointment_type"
                      name="appointment_type" 
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue" 
                      required
                    >
                      <option value="">Select appointment type</option>
                      <option value="new-patient">New Patient Visit</option>
                      <option value="cleaning">Routine Cleaning & Checkup</option>
                      <option value="orthodontic">Orthodontic Consultation</option>
                      <option value="emergency">Emergency Visit</option>
                      <option value="follow-up">Follow-up Visit</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferred_date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input 
                        id="preferred_date"
                        name="preferred_date" 
                        type="date"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select 
                        id="preferred_time"
                        name="preferred_time" 
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                      >
                        <option value="">Select time preference</option>
                        <option value="8am">8:00 AM</option>
                        <option value="9am">9:00 AM</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="12pm">12:00 PM</option>
                        <option value="1pm">1:00 PM</option>
                        <option value="2pm">2:00 PM</option>
                        <option value="3pm">3:00 PM</option>
                        <option value="4pm">4:00 PM</option>
                        <option value="saturday">Saturday Morning</option>
                        <option value="flexible">I'm flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="insurance_provider" className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
                    <input 
                      id="insurance_provider"
                      name="insurance_provider" 
                      placeholder="Insurance company name (optional)"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue"
                    />
                  </div>

                  <div>
                    <label htmlFor="special_requests" className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Concerns</label>
                    <textarea 
                      id="special_requests"
                      name="special_requests" 
                      placeholder="Please let us know about any special needs, dental anxiety, medical conditions, or specific concerns..." 
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" name="consent" className="rounded" required />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to receiving appointment reminders via text message and email *
                    </label>
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
            </article>

            <aside className="space-y-6">
              <article className="border-2 border-logo-green/30 bg-gradient-to-br from-logo-green/10 to-logo-blue/10 backdrop-blur-sm shadow-lg rounded-lg p-6">
                <header className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Phone className="h-5 w-5 text-logo-green mr-2" />
                    Call Us Directly
                  </h2>
                </header>
                <div className="text-center">
                  <p className="text-2xl font-bold text-logo-blue mb-2">(909) 479-6030</p>
                  <p className="text-gray-600 mb-4">Available 24/7 for emergencies</p>
                  <a href="tel:9094796030">
                    <Button
                      text="Call Now"
                      variant="green"
                      size="md"
                      rounded="lg"
                      fullWidth={true}
                    />
                  </a>
                </div>
              </article>

              <article className="border-2 border-logo-yellow/30 bg-gradient-to-br from-logo-yellow/10 to-logo-pink/10 backdrop-blur-sm shadow-lg rounded-lg p-6">
                <header className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Clock className="h-5 w-5 text-logo-yellow mr-2" />
                    Office Hours
                  </h2>
                </header>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold text-logo-pink">Emergency Only</span>
                  </div>
                </div>
              </article>

              <div className="bg-gradient-to-br from-logo-green/10 to-logo-blue/10 rounded-lg p-4 border-2 border-logo-green/30">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-logo-green mr-2" />
                  <h3 className="font-semibold text-gray-900">What to Expect</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Confirmation within 24 hours</li>
                  <li>• Appointment reminder calls/texts</li>
                  <li>• New patient forms sent via email</li>
                  <li>• Insurance verification handled</li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appointmentTypes.map((type, index) => (
              <article 
                key={index} 
                className={`border-2 ${themeColors[index % themeColors.length]} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all rounded-lg`}
              >
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-logo-blue font-medium mb-2">{type.duration}</p>
                  <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                  <p className="text-logo-green font-semibold">{type.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Appointment;