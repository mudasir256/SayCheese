import { Smile, Shield, Heart, CheckCircle, Clock, Star, Phone } from "lucide-react";

const SedationDentistry = () => {
    const benefits = ["Reduces anxiety and fear", "Helps children stay still during treatment", "Allows for more comprehensive care", "Creates positive dental experiences", "Safe and monitored by trained professionals"];

    const safetyFeatures = [{
        icon: <Shield className="h-8 w-8 text-logo-blue" />,
        title: "Trained Staff",
        description: "All team members are certified in pediatric sedation protocols."
    }, {
        icon: <Heart className="h-8 w-8 text-logo-green" />,
        title: "Continuous Monitoring",
        description: "Vital signs monitored throughout the entire procedure."
    }, {
        icon: <Clock className="h-8 w-8 text-logo-yellow" />,
        title: "Quick Recovery",
        description: "Most children recover quickly with minimal side effects."
    }, {
        icon: <Star className="h-8 w-8 text-logo-pink" />,
        title: "Accredited Facility",
        description: "Our facility meets all safety standards and regulations."
    }];

    const preAppointmentInstructions = ["Follow fasting instructions carefully", "Arrive on time for your appointment", "Bring a comfort item for your child"];
    const postAppointmentInstructions = ["Wear comfortable, loose clothing", "Plan for recovery time after treatment", "Have questions ready for our team"];

    return (
        <div className="min-h-screen">
            <div>
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                <span className="text-logo-pink">Sedation Dentistry</span> <span className="text-logo-blue">for Kids</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Making dental visits comfortable and stress-free for anxious children. Our safe, child-friendly sedation options help your child relax and receive the care they need in a positive environment.
                            </p>
                            <div className="flex justify-center">
                                <a href="tel:9094796030">
                                    <button className="bg-gradient-to-r from-logo-blue to-logo-green hover:from-logo-blue/90 hover:to-logo-green/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        Call (909) 479-6030
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Sedation Dentistry */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <Heart className="h-8 w-8 text-logo-pink mr-3" />
                                    <h2 className="text-3xl font-bold">
                                        <span className="text-logo-blue">Why Choose</span> <span className="text-logo-pink">Sedation Dentistry?</span>
                                    </h2>
                                </div>
                                <p className="text-gray-600 mb-6 text-lg">
                                    We understand that dental visits can be stressful for children, especially if they're anxious or require more complex procedures. Sedation dentistry helps create a calm, comfortable experience that builds positive associations with dental care.
                                </p>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-logo-green mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-center">
                                <div className="border-2 border-logo-pink/30 bg-gradient-to-br from-logo-pink/10 to-logo-blue/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                                    <Smile className="h-32 w-32 text-logo-pink mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">
                                        <span className="text-logo-pink">Comfortable</span> <span className="text-logo-blue">Care</span>
                                    </h3>
                                    <p className="text-gray-600">
                                        Helping anxious children receive necessary dental treatment in a relaxed state.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safe Sedation Options */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/5 via-logo-green/5 to-logo-yellow/5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                <span className="text-logo-green">Safe Sedation</span> <span className="text-logo-blue">Options</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We offer safe levels of sedation tailored to each child's individual needs, anxiety level, and the complexity of their treatment.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="border-2 border-logo-yellow/30 bg-gradient-to-br from-logo-yellow/10 to-logo-pink/10 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden">
                                <div className="p-6 md:p-8 text-center">
                                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-logo-yellow/20 to-logo-pink/20 rounded-full w-fit">
                                        <Smile className="h-12 w-12 text-logo-yellow" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Nitrous Oxide (Laughing Gas)</h3>
                                    <p className="text-lg text-gray-600 mb-6">
                                        The most common and mildest form of sedation. Safe, effective, and helps children feel relaxed.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-center text-gray-600">
                                                    <CheckCircle className="h-4 w-4 text-logo-green mr-2" />
                                                    Child remains awake and responsive
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <CheckCircle className="h-4 w-4 text-logo-green mr-2" />
                                                    Wears off quickly after treatment
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <CheckCircle className="h-4 w-4 text-logo-green mr-2" />
                                                    No needles required
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <CheckCircle className="h-4 w-4 text-logo-green mr-2" />
                                                    Pleasant scent
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-3">Perfect for:</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-center text-gray-600">
                                                    <Star className="h-4 w-4 text-logo-yellow mr-2" />
                                                    Mildly anxious children
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <Star className="h-4 w-4 text-logo-yellow mr-2" />
                                                    Routine dental procedures
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <Star className="h-4 w-4 text-logo-yellow mr-2" />
                                                    Children with special needs
                                                </li>
                                                <li className="flex items-center text-gray-600">
                                                    <Star className="h-4 w-4 text-logo-yellow mr-2" />
                                                    Longer appointments
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safety Priority */}
                <section className="py-16 bg-gradient-to-br from-logo-green/10 to-logo-blue/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <Shield className="h-16 w-16 text-logo-green mx-auto mb-4" />
                            <h2 className="text-3xl font-bold mb-4">
                                <span className="text-logo-green">Safety</span> is Our <span className="text-logo-blue">Top Priority</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our sedation protocols follow strict safety guidelines. Dr. Kohan and our team are specially trained in pediatric sedation and continuously monitor your child throughout the entire procedure.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {safetyFeatures.map((feature, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                                        {feature.icon}
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pre/Post Guidelines */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                <span className="text-logo-blue">Pre-Sedation</span> <span className="text-logo-pink">Guidelines</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Follow these instructions carefully to ensure your child's safety and comfort.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 to-logo-blue/5 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                                <h3 className="text-xl font-bold text-logo-blue mb-3">Pre-Sedation Guidelines</h3>
                                <p className="text-logo-blue/80 mb-4 text-sm">Follow these steps before your appointment</p>
                                <ul className="space-y-3">
                                    {preAppointmentInstructions.map((instruction, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-logo-blue mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-800">{instruction}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-2 border-logo-green/30 bg-gradient-to-br from-logo-green/10 to-logo-green/5 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                                <h3 className="text-xl font-bold text-logo-green mb-3">What to Expect</h3>
                                <p className="text-logo-green/80 mb-4 text-sm">Preparing for your appointment</p>
                                <ul className="space-y-3">
                                    {postAppointmentInstructions.map((instruction, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-logo-green mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-800">{instruction}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                <span className="text-logo-blue">Ready to Discuss</span> <span className="text-logo-pink">Sedation Options?</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Let us help make your child's dental experience comfortable and positive. Call us at (909) 479-6030 to discuss sedation options.
                            </p>
                            <div className="flex justify-center">
                                <a href="tel:9094796030">
                                    <button className="bg-gradient-to-r from-logo-blue to-logo-green hover:from-logo-blue/90 hover:to-logo-green/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        Call (909) 479-6030
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SedationDentistry;
