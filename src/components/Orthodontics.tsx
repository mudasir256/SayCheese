import { Star, Smile, Clock, Shield, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import Button from "./Button";

const Orthodontics = () => {
    const benefits = [
        "Improved oral health and easier cleaning",
        "Enhanced facial appearance and confidence",
        "Better chewing and speaking function",
        "Reduced risk of dental injuries",
        "Long-term dental health benefits"
    ];

    const treatmentOptions = [
        {
            title: "Traditional Metal Braces",
            description: "Strong, reliable, and effective for all types of orthodontic issues",
            duration: "18-24 months average",
            features: ["Most cost-effective", "Fastest treatment", "Suitable for all ages", "Highly durable"]
        },
        {
            title: "Clear Ceramic Braces",
            description: "Less visible option that blends with natural tooth color",
            duration: "18-30 months average",
            features: ["More aesthetic", "Tooth-colored brackets", "Popular with teens", "Effective treatment"]
        },
        {
            title: "Invisalign Teen",
            description: "Nearly invisible aligners for qualified teen patients",
            duration: "12-18 months average",
            features: ["Nearly invisible", "Removable", "Comfortable", "Teen compliance indicators"]
        }
    ];

    const themeColors = [
        'bg-gradient-to-br from-logo-blue/10 to-logo-blue/5 border-logo-blue/30',
        'bg-gradient-to-br from-logo-green/10 to-logo-green/5 border-logo-green/30',
        'bg-gradient-to-br from-logo-yellow/10 to-logo-yellow/5 border-logo-yellow/30',
    ];

    return (
        <div className="min-h-screen">
            <div>
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-gradient-to-br from-logo-yellow/20 to-logo-pink/20 rounded-full">
                                    <Smile className="h-16 w-16 text-logo-yellow" />
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                <span className="text-logo-blue">Orthodontics</span> & <span className="text-logo-yellow">Braces</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Creating beautiful, healthy smiles with modern orthodontic treatments designed specifically for children and teens.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="tel:9094796030">
                                    <Button
                                        text="Schedule Consultation"
                                        variant="blue"
                                        size="lg"
                                        rounded="lg"
                                    />
                                </a>
                                <Link href="/service">
                                    <Button
                                        text="Learn About Options"
                                        variant="outline"
                                        size="lg"
                                        rounded="lg"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Orthodontics Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <Star className="h-8 w-8 text-logo-pink mr-3" />
                                    <h2 className="text-3xl font-bold">
                                        <span className="text-logo-blue">Why Choose</span> <span className="text-logo-pink">Orthodontics?</span>
                                    </h2>
                                </div>
                                <p className="text-gray-600 mb-6 text-lg">
                                    Orthodontic treatment goes beyond creating a beautiful smile. It's an investment in your child's long-term oral health, self-confidence, and overall well-being.
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
                                <div className="border-2 border-logo-yellow/30 bg-gradient-to-br from-logo-yellow/10 to-logo-pink/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                                    <Smile className="h-32 w-32 text-logo-yellow mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">
                                        <span className="text-logo-yellow">Beautiful</span> <span className="text-logo-pink">Smiles</span>
                                    </h3>
                                    <p className="text-gray-600">
                                        Helping children achieve confident, healthy smiles that last a lifetime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Treatment Options */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/5 via-logo-green/5 to-logo-yellow/5">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Safe Orthodontic <span className="text-logo-yellow">Options</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We offer different types of orthodontic treatment tailored to each child's individual needs, lifestyle, and the complexity of their treatment.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {treatmentOptions.map((option, index) => (
                                <div key={index} className={`hover:shadow-xl transition-all duration-300 border-2 ${themeColors[index]} backdrop-blur-sm shadow-lg rounded-lg overflow-hidden`}>
                                    <div className="p-6 md:p-8 text-center">
                                        <div className={`mx-auto mb-4 p-3 ${themeColors[index].includes('logo-blue') ? 'bg-logo-blue/20' : themeColors[index].includes('logo-green') ? 'bg-logo-green/20' : 'bg-logo-yellow/20'} rounded-full w-fit`}>
                                            <Smile className={`h-8 w-8 ${themeColors[index].includes('logo-blue') ? 'text-logo-blue' : themeColors[index].includes('logo-green') ? 'text-logo-green' : 'text-logo-yellow'}`} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                                        <p className="text-gray-600 mb-3">{option.description}</p>
                                        <div className={`flex items-center justify-center ${themeColors[index].includes('logo-blue') ? 'text-logo-blue' : themeColors[index].includes('logo-green') ? 'text-logo-green' : 'text-logo-yellow'} font-semibold mt-2 mb-4`}>
                                            <Clock className="h-4 w-4 mr-2" />
                                            {option.duration}
                                        </div>
                                        <ul className="space-y-2 mb-6 text-left">
                                            {option.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                                    <div className={`h-2 w-2 ${themeColors[index].includes('logo-blue') ? 'bg-logo-blue' : themeColors[index].includes('logo-green') ? 'bg-logo-green' : 'bg-logo-yellow'} rounded-full mr-3`}></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <a href="tel:9094796030" className="block w-full">
                                            <Button
                                                text="Learn More"
                                                variant={index === 0 ? "blue" : index === 1 ? "green" : "yellow"}
                                                size="md"
                                                rounded="lg"
                                                fullWidth={true}
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Safety Priority Section */}
                <section className="py-16 bg-gradient-to-br from-logo-green/10 to-logo-blue/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <Shield className="h-16 w-16 text-logo-green mx-auto mb-4" />
                            <h2 className="text-3xl font-bold mb-4">
                                <span className="text-logo-green">Safety</span> is Our <span className="text-logo-blue">Top Priority</span>
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our orthodontic protocols follow strict safety guidelines. Dr. Khan and our team are specially trained in pediatric orthodontics and continuously monitor your child throughout the entire procedure.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-logo-blue/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                                    <Shield className="h-8 w-8 text-logo-blue" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Trained Staff</h3>
                                <p className="text-sm text-gray-600">All team members are certified in pediatric orthodontic protocols.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-logo-green/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                                    <CheckCircle className="h-8 w-8 text-logo-green" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
                                <p className="text-sm text-gray-600">Vital signs monitored throughout the entire procedure.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-logo-yellow/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                                    <Clock className="h-8 w-8 text-logo-yellow" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Quick Recovery</h3>
                                <p className="text-sm text-gray-600">Most children recover quickly with minimal side effects.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-logo-pink/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                                    <Star className="h-8 w-8 text-logo-pink" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Accredited Facility</h3>
                                <p className="text-sm text-gray-600">Our facility meets all safety standards and regulations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                <span className="text-logo-blue">Ready to Start</span> Your <span className="text-logo-yellow">Child's Orthodontic Journey?</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Call us today at (909) 479-6030 and take the first step toward your child's perfect smile!
                            </p>
                            <div className="flex justify-center">
                                <a href="tel:9094796030">
                                    <Button
                                        text="Call (909) 479-6030"
                                        variant="blue"
                                        size="lg"
                                        rounded="lg"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Orthodontics;
