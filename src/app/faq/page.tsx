"use client";

import { Heart, Smile, Star, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";

const FAQs = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const generalQuestions = [
    {
      question: "What age should my child first visit the dentist?",
      answer: "The American Academy of Pediatric Dentistry recommends that children have their first dental visit by age 1 or within 6 months of their first tooth appearing. Early visits help establish a dental home and prevent future problems."
    },
    {
      question: "How often should my child visit the dentist?",
      answer: "Most children should visit the dentist every 6 months for routine checkups and cleanings. However, some children may need more frequent visits based on their individual oral health needs and risk factors."
    },
    {
      question: "What should I expect during my child's first visit?",
      answer: "The first visit is usually short and focuses on getting your child comfortable. We'll examine their teeth and gums, discuss proper oral hygiene, and answer any questions you may have. We make it fun and stress-free!"
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major dental insurance plans including Delta Dental, Cigna, MetLife, United Concordia, and many others. Our team will help verify your benefits and maximize your coverage."
    },
    {
      question: "Do you offer payment plans or financing?",
      answer: "Yes! We offer flexible payment options and accept CareCredit, a healthcare financing option that allows you to pay for treatment over time with convenient monthly payments."
    }
  ];

  const dentalCareQuestions = [
    {
      question: "How can I help my child overcome dental anxiety?",
      answer: "We specialize in helping anxious children feel comfortable. We use positive reinforcement, explain procedures in kid-friendly terms, and offer nitrous oxide sedation when appropriate. Parents can also help by staying positive and avoiding negative words about dental visits."
    },
    {
      question: "When do children start losing baby teeth?",
      answer: "Children typically start losing baby teeth around age 6, beginning with the lower front teeth. The process continues until about age 12-13. It's important to maintain good oral hygiene during this transition period."
    },
    {
      question: "Are dental sealants necessary for children?",
      answer: "Dental sealants are highly recommended for children's permanent molars. They provide an extra layer of protection against cavities in the deep grooves of back teeth, which are harder to clean with regular brushing."
    },
    {
      question: "What should I do if my child has a dental emergency?",
      answer: "For dental emergencies, contact our office immediately. For knocked-out permanent teeth, try to reinsert the tooth gently or keep it in milk. For severe pain or swelling, you can give age-appropriate pain medication and apply a cold compress."
    },
    {
      question: "How do I care for my child's teeth at home?",
      answer: "Brush twice daily with fluoride toothpaste, floss daily once teeth touch, limit sugary snacks and drinks, and encourage drinking water. For young children, parents should supervise and assist with brushing until age 7-8."
    }
  ];

  const orthodonticsQuestions = [
    {
      question: "When should my child see an orthodontist?",
      answer: "The American Association of Orthodontists recommends children have their first orthodontic evaluation by age 7. Early evaluation allows us to detect problems early and determine the best time for treatment."
    },
    {
      question: "Do braces hurt?",
      answer: "Braces may cause some discomfort when first placed and after adjustments, but serious pain is rare. Any discomfort typically lasts only a few days and can be managed with over-the-counter pain relievers."
    },
    {
      question: "What's the difference between Phase 1 and Phase 2 treatment?",
      answer: "Phase 1 treatment occurs while children still have baby teeth (ages 7-10) to address serious problems early. Phase 2 treatment happens when most permanent teeth are present (ages 11-13) for comprehensive alignment."
    },
    {
      question: "How long does orthodontic treatment take?",
      answer: "Treatment time varies based on the complexity of the case, but typically ranges from 12-30 months. Traditional braces usually take 18-24 months, while Invisalign Teen may take 12-18 months for appropriate cases."
    },
    {
      question: "Can my child play sports with braces?",
      answer: "Yes! We recommend wearing a mouthguard during sports activities to protect both the braces and your child's mouth. We can provide special orthodontic mouthguards designed for braces."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      ...generalQuestions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      })),
      ...dentalCareQuestions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      })),
      ...orthodonticsQuestions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    ]
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-logo-blue">Frequently</span>{' '}
                <span className="text-logo-green">Asked</span>{' '}
                <span className="text-logo-yellow">Questions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Find answers to common questions about pediatric dental care, orthodontics, and what to expect at Say Cheese Kids Dental.
              </p>
              <Link href="/contact">
                <Button
                  text="Still Have Questions? Contact Us"
                  variant="blue"
                  size="lg"
                  rounded="lg"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* General Questions */}
              <div>
                <div className="flex items-center mb-8">
                  <Heart className="h-8 w-8 text-logo-pink mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">General Questions</h2>
                </div>
                <div className="space-y-4">
                  {generalQuestions.map((faq, index) => {
                    const key = `general-${index}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={index} className="border-2 border-logo-pink/30 bg-gradient-to-br from-logo-pink/10 to-logo-pink/5 rounded-lg overflow-hidden transition-all">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-logo-pink/5 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          <ChevronDown className={`h-5 w-5 text-logo-pink flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-gray-600">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dental Care Questions */}
              <div>
                <div className="flex items-center mb-8">
                  <Smile className="h-8 w-8 text-logo-blue mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Dental Care & Treatment</h2>
                </div>
                <div className="space-y-4">
                  {dentalCareQuestions.map((faq, index) => {
                    const key = `dental-${index}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={index} className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 to-logo-blue/5 rounded-lg overflow-hidden transition-all">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-logo-blue/5 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          <ChevronDown className={`h-5 w-5 text-logo-blue flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-gray-600">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex items-center justify-center mb-8">
                <Star className="h-8 w-8 text-logo-yellow mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Orthodontics & Braces</h2>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="space-y-4">
                  {orthodonticsQuestions.map((faq, index) => {
                    const key = `ortho-${index}`;
                    const isOpen = openItems[key];
                    return (
                      <div key={index} className="border-2 border-logo-yellow/30 bg-gradient-to-br from-logo-yellow/10 to-logo-yellow/5 rounded-lg overflow-hidden transition-all">
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-logo-yellow/5 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                          <ChevronDown className={`h-5 w-5 text-logo-yellow flex-shrink-0 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-gray-600">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-logo-blue">Still Have</span> <span className="text-logo-green">Questions?</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Our friendly team is here to help! Contact us with any questions about your child's dental care.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-logo-blue/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-logo-blue" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">(909) 479-6030</h3>
                </div>
                <div className="text-center">
                  <div className="bg-logo-green/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-logo-green" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">12413 Central Ave, Chino, CA</h3>
                </div>
                <div className="text-center">
                  <div className="bg-logo-yellow/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-logo-yellow" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Mon-Fri: 8AM-5PM</h3>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    text="Schedule Appointment"
                    variant="blue"
                    size="lg"
                    rounded="lg"
                  />
                </Link>
                <Link href="/">
                  <Button
                    text="Back to Homepage"
                    variant="outline"
                    size="lg"
                    rounded="lg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQs;
