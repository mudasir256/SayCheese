import { Smile, Shield, Zap, Star, CheckCircle, Phone } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: <Smile className="h-12 w-12 text-logo-blue" />,
            title: "Preventive Care",
            description: "Keep your child's teeth healthy with regular checkups and cleanings.",
            details: [
                "Regular dental cleanings and checkups",
                "Fluoride treatments to strengthen teeth",
                "Dental sealants to prevent cavities",
                "Oral hygiene education for kids and parents",
                "Digital X-rays for comprehensive diagnosis"
            ],
            checkColor: "text-logo-blue"
        },
        {
            icon: <Shield className="h-12 w-12 text-logo-green" />,
            title: "Restorative Dentistry",
            description: "Gentle treatment for cavities and damaged teeth.",
            details: [
                "Tooth-colored composite fillings",
                "Stainless steel crowns for back teeth",
                "Pulp therapy (baby root canals)",
                "Space maintainers",
                "Tooth extractions when necessary"
            ],
            checkColor: "text-logo-green"
        },
        {
            icon: <Zap className="h-12 w-12 text-logo-yellow" />,
            title: "Orthodontics",
            description: "Straighten your child's smile with modern orthodontic solutions.",
            details: [
                "Traditional metal braces",
                "Clear ceramic braces",
                "Invisalign Teen",
                "Early orthodontic intervention",
                "Retainer fitting and maintenance"
            ],
            checkColor: "text-logo-yellow"
        },
        {
            icon: <Star className="h-12 w-12 text-logo-pink" />,
            title: "Emergency Care",
            description: "24/7 emergency dental care when your child needs it most.",
            details: [
                "Emergency pain relief",
                "Knocked-out tooth reimplantation",
                "Broken tooth repair",
                "Abscess treatment",
                "After-hours emergency consultations"
            ],
            checkColor: "text-logo-pink"
        }
    ];

    const themeColors = [
        'bg-gradient-to-br from-logo-blue/10 to-logo-blue/5 border-logo-blue/30',
        'bg-gradient-to-br from-logo-green/10 to-logo-green/5 border-logo-green/30',
        'bg-gradient-to-br from-logo-yellow/10 to-logo-yellow/5 border-logo-yellow/30',
        'bg-gradient-to-br from-logo-pink/10 to-logo-pink/5 border-logo-pink/30'
    ];

    const iconBgColors = [
        'bg-logo-blue/20',
        'bg-logo-green/20',
        'bg-logo-yellow/20',
        'bg-logo-pink/20'
    ];

    return (
        <div className="min-h-screen">
            <div>
                <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                <span className="text-logo-blue">Our</span>{' '}
                                <span className="text-logo-green">Services</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Comprehensive dental and orthodontic care designed specifically for children and teenagers
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`hover:shadow-xl transition-all duration-300 border-2 ${themeColors[index]} rounded-lg overflow-hidden hover:scale-105`}
                                >
                                    <div className="p-6 md:p-8">
                                        <div className="text-center pb-4">
                                            <div className={`mx-auto mb-4 p-4 ${iconBgColors[index]} rounded-full w-fit`}>
                                                {service.icon}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{service.title}</h2>
                                            <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                                        </div>
                                        <ul className="space-y-3 mb-6">
                                            {service.details.map((detail, detailIndex) => (
                                                <li key={detailIndex} className="flex items-start text-gray-700">
                                                    <CheckCircle className={`h-5 w-5 ${service.checkColor} mr-3 mt-0.5 flex-shrink-0`} />
                                                    <span className="text-base">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a href="tel:9094796030" className="block w-full">
                                            <button className="w-full bg-gradient-to-r from-logo-blue to-logo-green hover:from-logo-blue/90 hover:to-logo-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2">
                                                <Phone className="h-4 w-4" />
                                                Call (909) 479-6030
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12 text-center">
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                <span className="text-logo-blue">Ready to Get</span> <span className="text-logo-green">Started?</span>
                            </h3>
                            <p className="text-xl text-gray-600 mb-8">
                                Call us today at (909) 479-6030 and give your child the gift of a healthy smile!
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

export default Services;
