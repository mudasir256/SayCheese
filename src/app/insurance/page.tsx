
import { Shield, CheckCircle, Heart, Phone } from "lucide-react";

const Insurance = () => {
    const insurancePlans = [
        "Delta Dental", "Cigna", "MetLife", "United Concordia",
        "Guardian", "Principal Financial", "Humana", "First Dental Health",
        "United Healthcare", "Anthem Blue Cross", "Anthem Blue Shield", "Aetna",
        "Ameritas", "GEHA / Connection Dental", "Assurant / DHA", "Careington"
    ];

    return (
        <div className="min-h-screen">
            <div className="pt-20">
                {/* Hero Section - Made much longer */}
                <section className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
                                Insurance & <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Payment Options</span>
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
                                        <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Most Plans Accepted</h3>
                                        <p className="text-gray-600">We work with your insurance to maximize benefits</p>
                                    </div>
                                    <div className="text-center">
                                        <Heart className="h-16 w-16 text-green-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Financing</h3>
                                        <p className="text-gray-600">CareCredit and payment plans available</p>
                                    </div>
                                    <div className="text-center">
                                        <Phone className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
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
                                    <Shield className="h-8 w-8 text-blue-600 mr-3" />
                                    <h2 className="text-3xl font-bold text-gray-900">Dental Insurance</h2>
                                </div>
                                <p className="text-gray-600 mb-6 text-lg">
                                    We are happy to accept Medi-Cal, Denti-Cal, and most PPO dental insurance plans. If you don't see your plan listed, feel free to contact us — we may still accept it!
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="tel:9094796030">
                                        {/* <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Button> */}
                                    </a>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8">
                                    <Shield className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Most Plans Accepted</h3>
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">PPO Insurance Plans We Accept Include:</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
                            {insurancePlans.map((plan, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-200">
                                    <div className="flex items-center justify-center mb-2">
                                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                        <span className="text-gray-900 font-medium">{plan}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="text-gray-600 mb-6">
                                If you're unsure about your coverage, our friendly team is here to help verify your benefits and answer any questions you may have.
                            </p>
                            <a href="tel:9094796030">
                                {/* <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-4 text-lg">
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Us About Your Plan
                </Button> */}
                            </a>
                        </div>
                    </div>
                </section>

                {/* No Insurance Section */}
                {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-50 to-orange-50 border-0 shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full w-fit">
                  <Heart className="h-12 w-12 text-yellow-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">No Insurance? No Problem.</CardTitle>
                <CardDescription className="text-lg text-gray-600 mt-4">
                  We offer CareCredit, a flexible healthcare financing option that allows you to pay for treatment over time with convenient monthly payments. It's a great alternative if you don't currently have dental insurance.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/carecredit">
                    <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 px-8 py-4 text-lg font-semibold">
                      Learn About CareCredit
                    </Button>
                  </Link>
                  <a href="https://www.carecredit.com/apply/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4 text-lg font-semibold">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}

                {/* Contact Section */}
                <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Coverage?</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Our team is here to help you understand your benefits and make the most of your insurance coverage.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <a href="tel:9094796030">
                                {/* <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-4 text-lg font-semibold">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (909) 479-6030
                </Button> */}
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Insurance;
