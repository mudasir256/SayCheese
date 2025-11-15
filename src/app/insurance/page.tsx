import { Shield, CheckCircle, Heart, Phone } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Button";

const Insurance = () => {
    const insurancePlans = [
        "Delta Dental", "Cigna", "MetLife", "United Concordia",
        "Guardian", "Principal Financial", "Humana", "First Dental Health",
        "United Healthcare", "Anthem Blue Cross", "Anthem Blue Shield", "Aetna",
        "Ameritas", "GEHA / Connection Dental", "Assurant / DHA", "Careington"
    ];

    return (
        <div className="min-h-screen">
            <div>
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-7xl font-bold mb-8">
                                <span className="text-logo-blue">Insurance</span>{' '}
                                <span className="text-logo-green">&</span>{' '}
                                <span className="text-logo-yellow">Payment</span>{' '}
                                <span className="text-logo-pink">Options</span>
                            </h1>
                            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
                                At Say Cheese Kids Dental, we believe every child should have access to high-quality dental care. That's why we proudly accept a wide range of insurance plans and offer flexible payment solutions to make dental care as affordable and stress-free as possible.
                            </p>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-lg text-gray-500 mb-8">
                                    We understand that navigating dental insurance can be confusing. Our experienced team is here to help you understand your benefits, maximize your coverage, and find the best payment options for your family's needs.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                                    <div className="text-center">
                                        <Shield className="h-16 w-16 text-logo-blue mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">
                                            <span className="text-logo-blue">Most Plans</span> <span className="text-logo-green">Accepted</span>
                                        </h3>
                                        <p className="text-gray-600">We work with your insurance to maximize benefits</p>
                                    </div>
                                    <div className="text-center">
                                        <Heart className="h-16 w-16 text-logo-pink mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">
                                            <span className="text-logo-pink">Flexible</span> <span className="text-logo-yellow">Financing</span>
                                        </h3>
                                        <p className="text-gray-600">CareCredit and payment plans available</p>
                                    </div>
                                    <div className="text-center">
                                        <Phone className="h-16 w-16 text-logo-green mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">
                                            <span className="text-logo-green">Expert</span> <span className="text-logo-blue">Support</span>
                                        </h3>
                                        <p className="text-gray-600">Our team helps navigate your coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dental Insurance Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <Shield className="h-8 w-8 text-logo-blue mr-3" />
                                    <h2 className="text-3xl font-bold">
                                        <span className="text-logo-blue">Dental</span> <span className="text-logo-green">Insurance</span>
                                    </h2>
                                </div>
                                <p className="text-gray-600 mb-6 text-lg">
                                    We are happy to accept Medi-Cal, Denti-Cal, and most PPO dental insurance plans. If you don't see your plan listed, feel free to contact us — we may still accept it!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="tel:9094796030">
                                        <Button
                                            text="Call Us"
                                            variant="blue"
                                            size="md"
                                            rounded="lg"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-lg p-6 md:p-8">
                                    <Shield className="h-24 w-24 text-logo-blue mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-2">
                                        <span className="text-logo-blue">Most Plans</span> <span className="text-logo-green">Accepted</span>
                                    </h3>
                                    <p className="text-gray-600">
                                        We work with your insurance to maximize your benefits
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PPO Insurance Plans */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                <span className="text-logo-blue">PPO Insurance Plans</span> We <span className="text-logo-green">Accept Include:</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
                            {insurancePlans.map((plan, index) => {
                                const themeColors = [
                                    'bg-gradient-to-br from-logo-blue/10 to-logo-blue/5 border-logo-blue/30',
                                    'bg-gradient-to-br from-logo-green/10 to-logo-green/5 border-logo-green/30',
                                    'bg-gradient-to-br from-logo-yellow/10 to-logo-yellow/5 border-logo-yellow/30',
                                    'bg-gradient-to-br from-logo-pink/10 to-logo-pink/5 border-logo-pink/30'
                                ];
                                const colorClass = themeColors[index % themeColors.length];
                                return (
                                    <div key={index} className={`${colorClass} rounded-lg p-4 text-center shadow-sm border-2 hover:shadow-md transition-all hover:scale-105`}>
                                        <div className="flex items-center justify-center mb-2">
                                            <CheckCircle className="h-5 w-5 text-logo-green mr-2" />
                                            <span className="text-gray-900 font-medium">{plan}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center">
                            <p className="text-gray-600 mb-6">
                                If you're unsure about your coverage, our friendly team is here to help verify your benefits and answer any questions you may have.
                            </p>
                            <a href="tel:9094796030">
                                <Button
                                    text="Contact Us About Your Plan"
                                    variant="blue"
                                    size="lg"
                                    rounded="lg"
                                />
                            </a>
                        </div>
                    </div>
                </section>

                {/* No Insurance Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto border-2 border-logo-yellow/30 bg-gradient-to-br from-logo-yellow/10 to-logo-pink/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12">
                            <div className="text-center pb-6">
                                <div className="mx-auto mb-4 p-4 bg-logo-yellow/30 rounded-full w-fit">
                                    <Heart className="h-12 w-12 text-logo-yellow" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">
                                    <span className="text-logo-yellow">No Insurance?</span> <span className="text-logo-pink">No Problem.</span>
                                </h2>
                                <p className="text-lg text-gray-600 mt-4">
                                    We offer CareCredit, a flexible healthcare financing option that allows you to pay for treatment over time with convenient monthly payments. It's a great alternative if you don't currently have dental insurance.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/carecredit">
                                        <Button
                                            text="Learn About CareCredit"
                                            variant="yellow"
                                            size="lg"
                                            rounded="lg"
                                        />
                                    </Link>
                                    <a href="https://www.carecredit.com/apply/" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            text="Apply Now"
                                            variant="green"
                                            size="lg"
                                            rounded="lg"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                <span className="text-logo-blue">Questions About</span> <span className="text-logo-green">Coverage?</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                Our team is here to help you understand your benefits and make the most of your insurance coverage.
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

export default Insurance;
