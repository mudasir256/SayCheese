'use client';

import { memo, useState } from 'react';
import { ADDRESS } from '@/components/Footer/constants';
import Button from '@/components/Button';

const Map = memo(() => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const encodedAddress = encodeURIComponent(ADDRESS);
    const mapSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed&z=15`;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { email, message });
        // You can add your form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        setEmail('');
        setMessage('');
    };

    return (
        <section
            className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-16"
            aria-label="Contact us and location map"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Contact Form - Left Side */}
                    <div className="order-2 lg:order-1 flex">
                        <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8 w-full h-full flex flex-col">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                Contact Us
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                                <div className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="your.email@example.com"
                                            required
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue transition-colors"
                                            aria-label="Email Address"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Tell us how we can help you..."
                                            rows={6}
                                            required
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-logo-blue focus:border-logo-blue resize-none transition-colors"
                                            aria-label="Message"
                                        />
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <Button
                                        text="Send Message"
                                        variant="blue"
                                        size="lg"
                                        rounded="lg"
                                        fullWidth={true}
                                        type="submit"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Map - Right Side */}
                    <div className="order-1 lg:order-2 flex">
                        <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-full rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                src={mapSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="SayCheese Dental Clinic Location"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

Map.displayName = 'Map';

export default Map;

