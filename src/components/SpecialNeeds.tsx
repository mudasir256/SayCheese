import { Heart, Shield, Smile, Users, Phone, Star } from "lucide-react";
import Link from "next/link";

const SpecialNeeds = () => {
    return (
        <div className="min-h-screen">
            <div>
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                <span className="text-logo-blue">Dental Care For</span> <span className="text-logo-green">Special Needs Patients</span>
                            </h1>
                            <nav className="text-sm text-gray-600 mb-8">
                                <Link href="/" className="hover:text-logo-blue">Home</Link> | <Link href="/service" className="hover:text-logo-blue">Services</Link> | <span className="text-logo-blue">Dental Care For Special Needs</span>
                            </nav>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                                    <Smile className="h-32 w-32 text-logo-blue mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2 text-center">
                                        <span className="text-logo-blue">Compassionate</span> <span className="text-logo-green">Care</span>
                                    </h3>
                                    <p className="text-gray-600 text-center">
                                        Specialized dental care designed for children with special needs.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    At Say Cheese Kids Dental, we take pride in treating all children including those with
                                    special needs. We have specially designed private rooms and accommodations to
                                    make them feel comfortable and make treatment possible. We believe in easy
                                    access to dental care for all children! Our patient and experienced team will know
                                    how to take care of your child. We hope you trust us with their care.
                                </p>

                                <p className="text-lg text-gray-700 mb-8">
                                    Book your appointment with us today:
                                </p>

                                <a href="tel:9094796030">
                                    <button className="bg-gradient-to-r from-logo-blue to-logo-green hover:from-logo-blue/90 hover:to-logo-green/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        Call (909) 479-6030
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Patient Testimonial */}
                        <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12 mb-16">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                    <span className="text-logo-blue">Our Patients</span> <span className="text-logo-yellow">Love Us!</span>
                                </h3>
                                <div className="flex justify-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="text-logo-yellow fill-logo-yellow h-6 w-6" />
                                    ))}
                                </div>
                            </div>

                            <blockquote className="text-lg italic text-center max-w-4xl mx-auto mb-4 text-gray-700">
                                "Every time we come here its a pleasant experience, they are great with my special
                                needs child. The staff is very professional, caring and really take their time with her.
                                They are always friendly, patient, and smiling, even when my child is rowdy. They
                                also give them toys after their visit, which really made my kid happy at the end. I will
                                definitely keep coming back here."
                            </blockquote>

                            <p className="text-center text-gray-600">– Jennifer from Google</p>

                            <div className="text-center mt-6">
                                <Link href="/reviews">
                                    <button className="bg-gradient-to-r from-logo-blue to-logo-green hover:from-logo-blue/90 hover:to-logo-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                                        Read More Reviews →
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            <span className="text-logo-blue">Why Choose</span> <span className="text-logo-green">Us!</span>
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Our team of caring professionals truly attend to your child and do their best to
                                make their dental visit a fun one. Whether your child needs a regular checkup
                                and cleaning to extensive dental work, they are in good hands at Say Cheese Kids
                                Dental. We always welcome parents to be in the same room
                                with their child throughout the appointment including treatment. We offer
                                sedation/laughing gas, toys and prize giveaways for patients, and flexible
                                payment options. We now accept Medi-Cal and PPO insurances. Let our
                                expertly trained dental team make your next dental visit one to
                                remember!
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                            <div className="text-center border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 to-logo-blue/5 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8 hover:shadow-xl transition-all">
                                <div className="mx-auto mb-4 p-4 bg-logo-blue/20 rounded-full w-fit">
                                    <Heart className="h-8 w-8 text-logo-blue" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Compassionate Care</h3>
                                <p className="text-sm text-gray-600">
                                    Specially trained staff experienced in working with special needs children
                                </p>
                            </div>

                            <div className="text-center border-2 border-logo-green/30 bg-gradient-to-br from-logo-green/10 to-logo-green/5 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8 hover:shadow-xl transition-all">
                                <div className="mx-auto mb-4 p-4 bg-logo-green/20 rounded-full w-fit">
                                    <Shield className="h-8 w-8 text-logo-green" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Safe Environment</h3>
                                <p className="text-sm text-gray-600">
                                    Private rooms designed for comfort and accessibility
                                </p>
                            </div>

                            <div className="text-center border-2 border-logo-pink/30 bg-gradient-to-br from-logo-pink/10 to-logo-pink/5 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8 hover:shadow-xl transition-all">
                                <div className="mx-auto mb-4 p-4 bg-logo-pink/20 rounded-full w-fit">
                                    <Users className="h-8 w-8 text-logo-pink" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Family-Centered</h3>
                                <p className="text-sm text-gray-600">
                                    Parents welcome to stay throughout the entire appointment
                                </p>
                            </div>

                            <div className="text-center border-2 border-logo-yellow/30 bg-gradient-to-br from-logo-yellow/10 to-logo-yellow/5 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8 hover:shadow-xl transition-all">
                                <div className="mx-auto mb-4 p-4 bg-logo-yellow/20 rounded-full w-fit">
                                    <Smile className="h-8 w-8 text-logo-yellow" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Comfort Options</h3>
                                <p className="text-sm text-gray-600">
                                    Sedation dentistry and comfort techniques available
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SpecialNeeds;
