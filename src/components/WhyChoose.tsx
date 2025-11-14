'use client';
import React, { useState } from 'react';

export default function ChildrensDentalPractice() {
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        phone: '',
        age: '',
        email: '',
        appointmentType: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Appointment booked:', formData);
        alert('Appointment request submitted!');
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#f4f3ef' }}>
            <div className="  px-4 sm:px-6 lg:px-16 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#a4b55f' }}>
                        WHY CHOOSE OUR CHILDREN'S
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#a4b55f' }}>
                        DENTAL PRACTICE IN CHINO?
                    </h1>

                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                    {/* Left Column - Features in 2x2 Grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Feature 1 - Specialized Children's Dental Care */}
                        <div className="pr-0 lg:pr-8">
                            <div className="flex justify-center lg:justify-start mb-4">
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="30" fill="#ffffff" />
                                    <path d="M18 12 Q12 18 12 30 Q12 42 18 48 L24 42 Q20 36 20 30 Q20 24 24 18 Z" fill="#87ceeb" opacity="0.7" />
                                    <path d="M42 12 Q48 18 48 30 Q48 42 42 48 L36 42 Q40 36 40 30 Q40 24 36 18 Z" fill="#87ceeb" opacity="0.7" />
                                    <rect x="22" y="24" width="16" height="14" rx="2" fill="#fff" stroke="#87ceeb" strokeWidth="2" />
                                    <circle cx="30" cy="31" r="2" fill="#ff6b6b" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center lg:text-left">
                                Specialized Children's<br />Dental Care
                            </h3>
                            <div className="w-16 h-1 mb-3 mx-auto lg:mx-0" style={{ backgroundColor: '#e8a5a5' }}></div>
                            <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
                                Our dentist understands the unique needs of growing smiles. We provide gentle, age-appropriate dental care that helps children develop healthy oral hygiene habits for life.
                            </p>
                        </div>

                        {/* Feature 2 - Expert Kids Braces & Orthodontics */}
                        <div className="pr-0 lg:pr-8">
                            <div className="flex justify-center lg:justify-start mb-4">
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="30" fill="#ffffff" />
                                    <circle cx="30" cy="30" r="20" fill="none" stroke="#87ceeb" strokeWidth="2" />
                                    <rect x="24" y="24" width="12" height="12" fill="#fff" stroke="#4a9eff" strokeWidth="2" rx="1" />
                                    <circle cx="30" cy="18" r="2" fill="#4a9eff" />
                                    <circle cx="30" cy="42" r="2" fill="#4a9eff" />
                                    <circle cx="18" cy="30" r="2" fill="#4a9eff" />
                                    <circle cx="42" cy="30" r="2" fill="#4a9eff" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center lg:text-left">
                                Expert Kids Braces<br />& Orthodontics
                            </h3>
                            <div className="w-16 h-1 mb-3 mx-auto lg:mx-0" style={{ backgroundColor: '#ffd966' }}></div>
                            <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
                                From traditional metal braces to clear aligners, we partner with experienced orthodontists to offer comprehensive orthodontic solutions designed specifically for children and teenagers in Chino and surrounding areas.
                            </p>
                        </div>

                        {/* Feature 3 - Emergency Children's Dental Care */}
                        <div className="pr-0 lg:pr-8">
                            <div className="flex justify-center lg:justify-start mb-4">
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="30" fill="#ffffff" />
                                    <rect x="12" y="18" width="36" height="24" rx="4" fill="#ffb6c1" opacity="0.7" />
                                    <rect x="16" y="22" width="28" height="4" fill="#fff" />
                                    <circle cx="24" cy="33" r="4" fill="#ff6b6b" />
                                    <circle cx="36" cy="33" r="4" fill="#ff6b6b" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center lg:text-left">
                                Emergency Children's<br />Dental Care
                            </h3>
                            <div className="w-16 h-1 mb-3 mx-auto lg:mx-0" style={{ backgroundColor: '#87ceeb' }}></div>
                            <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
                                Dental emergencies can happen anytime. Our team provides prompt, compassionate emergency dental care for children, including after-hours consultations when possible.
                            </p>
                        </div>

                        {/* Feature 4 - Family-Friendly Dental Office */}
                        <div className="pr-0 lg:pr-8">
                            <div className="flex justify-center lg:justify-start mb-4">
                                <svg width="60" height="60" viewBox="0 0 60 60">
                                    <circle cx="30" cy="30" r="30" fill="#ffffff" />
                                    <circle cx="24" cy="22" r="7" fill="#ffd966" />
                                    <path d="M24 29 Q18 31 18 38 L18 46 L30 46 L30 38 Q30 31 24 29 Z" fill="#87ceeb" />
                                    <circle cx="40" cy="24" r="6" fill="#ffb6c1" />
                                    <path d="M40 30 Q35 32 35 38 L35 46 L45 46 L45 38 Q45 32 40 30 Z" fill="#e8a5a5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center lg:text-left">
                                Family-Friendly<br />Dental Office
                            </h3>
                            <div className="w-16 h-1 mb-3 mx-auto lg:mx-0" style={{ backgroundColor: '#ffd966' }}></div>
                            <p className="text-gray-700 text-sm leading-relaxed text-center lg:text-left">
                                Located conveniently in Chino, our modern dental office is designed with children in mind, featuring a fun, welcoming atmosphere that helps reduce dental anxiety.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Appointment Form */}
                    <div className="w-full lg:w-[500px] flex-shrink-0">
                        <div className="bg-amber-50 rounded-[50px] p-8 shadow-lg h-fit">
                            <h2 className="text-xl font-bold text-gray-800 mb-1 text-center leading-tight">
                                SCHEDULE YOUR CHILD'S
                            </h2>
                            <h2 className="text-xl font-bold text-gray-800 mb-3 text-center leading-tight">
                                DENTAL APPOINTMENT
                            </h2>
                            <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                                Book your appointment with Chino's<br />trusted children's dentist today!
                            </p>

                            <div className="space-y-3">
                                <input
                                    type="text"
                                    name="parentName"
                                    placeholder="Parent/Guardian Name"
                                    value={formData.parentName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm text-gray-700 placeholder-gray-400"
                                />

                                <input
                                    type="text"
                                    name="childName"
                                    placeholder="Child Name"
                                    value={formData.childName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm text-gray-700 placeholder-gray-400"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm text-gray-700 placeholder-gray-400"
                                />

                                <input
                                    type="text"
                                    name="age"
                                    placeholder="Child's Age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm text-gray-700 placeholder-gray-400"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm text-gray-700 placeholder-gray-400"
                                />

                                <select
                                    name="appointmentType"
                                    value={formData.appointmentType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm text-gray-700 appearance-none cursor-pointer"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                                >
                                    <option value="">Select Appointment type</option>
                                    <option value="checkup">Regular Checkup</option>
                                    <option value="cleaning">Cleaning</option>
                                    <option value="emergency">Emergency</option>
                                    <option value="orthodontics">Orthodontics Consultation</option>
                                    <option value="other">Other</option>
                                </select>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full py-4 mt-2 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    style={{ backgroundColor: '#e6c84a' }}
                                >
                                    Book Appointments
                                </button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}