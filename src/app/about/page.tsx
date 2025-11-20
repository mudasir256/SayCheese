import { Heart, Award, Users, Clock } from "lucide-react";
import Button from "@/components/Button";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Meet Dr. Joshua Kohan | Pediatric Dentist in Chino, CA",
  description: "Meet Dr. Joshua Kohan, experienced pediatric dentist in Chino, CA. Over 5 years treating children with compassionate, high-quality dental care. UCLA and Nova Southeastern University graduate.",
  keywords: [
    "Dr. Joshua Kohan",
    "pediatric dentist Chino",
    "kids dentist",
    "children's dentist",
    "Chino pediatric dentist",
    "UCLA dentist",
    "Nova Southeastern dentist"
  ],
  openGraph: {
    title: "Meet Dr. Joshua Kohan | Pediatric Dentist in Chino, CA",
    description: "Experienced pediatric dentist with over 5 years treating children. Creating positive dental experiences for kids in Chino, CA.",
    url: `${baseUrl}/about`,
    type: "profile",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "Dr. Joshua Kohan - Pediatric Dentist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Dr. Joshua Kohan | Pediatric Dentist",
    description: "Experienced pediatric dentist creating positive dental experiences for children in Chino, CA.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

const About = () => {
    const stats = [{
        icon: <Users className="h-8 w-8 text-logo-blue" />,
        number: "1000+",
        label: "Happy Patients",
        bgColor: "bg-logo-blue/10",
        textColor: "text-logo-blue",
        borderColor: "border-logo-blue/30"
    }, {
        icon: <Award className="h-8 w-8 text-logo-green" />,
        number: "5+",
        label: "Years Experience",
        bgColor: "bg-logo-green/10",
        textColor: "text-logo-green",
        borderColor: "border-logo-green/30"
    }, {
        icon: <Heart className="h-8 w-8 text-logo-pink" />,
        number: "99%",
        label: "Satisfaction Rate",
        bgColor: "bg-logo-pink/10",
        textColor: "text-logo-pink",
        borderColor: "border-logo-pink/30"
    }, {
        icon: <Clock className="h-8 w-8 text-logo-yellow" />,
        number: "After-Hours",
        label: "Emergency Care Available",
        bgColor: "bg-logo-yellow/10",
        textColor: "text-logo-yellow",
        borderColor: "border-logo-yellow/30"
    }];
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Joshua Kohan",
        "jobTitle": "Pediatric Dentist",
        "worksFor": {
            "@type": "Dentist",
            "name": "Say Cheese Kids Dental & Orthodontics"
        },
        "alumniOf": [
            {
                "@type": "CollegeOrUniversity",
                "name": "University of California, Los Angeles"
            },
            {
                "@type": "CollegeOrUniversity",
                "name": "Nova Southeastern University College of Dental Medicine"
            }
        ],
        "description": "Experienced pediatric dentist with over 5 years treating children in Chino, CA"
    };

    return <div className="min-h-screen">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <div>
            <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="text-logo-blue">About</span>{' '}
                            <span className="text-logo-green">Say</span>{' '}
                            <span className="text-logo-yellow">Cheese</span>{' '}
                            <span className="text-logo-pink">Kids</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
                            Creating beautiful, healthy smiles for children in our community since 2019
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                <span className="text-logo-blue">Meet</span> <span className="text-logo-green">Dr. Joshua Kohan</span>
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                Dr. Joshua Kohan offers a warm, relatable, and highly personalized approach to children's dental care.
                                A California native, Dr. Kohan earned his undergraduate degree from the esteemed University of
                                California, Los Angeles (UCLA) before obtaining his Doctor of Dental Medicine (D.M.D.) degree at
                                Nova Southeastern University College of Dental Medicine, where he graduated among the top of his class.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                With over five years of experience treating children, Dr. Kohan has delivered compassionate,
                                high-quality dental care to thousands of young patients. His own experiences as a father of two
                                young children enable him to connect deeply with kids—he understands their interests, favorite
                                movies, shows, and characters, allowing him to build genuine rapport and trust with each patient.
                            </p>
                            <div className="bg-logo-blue/20 p-6 rounded-lg mb-6 border-l-4 border-logo-blue">
                                <p className="text-gray-800 italic font-medium">
                                    "My philosophy centers around creating enjoyable dental experiences, reducing anxiety, and
                                    building a positive foundation for lifelong oral health. I want to make dental visits comfortable,
                                    fun, and stress-free for every child."
                                </p>
                                <p className="text-logo-blue font-semibold mt-2">- Dr. Joshua Kohan, D.M.D.</p>
                            </div>
                            <a href="tel:9094796030">
                                <Button
                                    text="Call (909) 479-6030"
                                    size="lg"
                                    variant="blue"
                                    rounded="lg"
                                />
                            </a>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {stats.map((stat, index) => (
                            <div key={index} className={`text-center border-2 ${stat.bgColor} ${stat.borderColor} backdrop-blur-sm hover:shadow-lg transition-all rounded-lg hover:scale-105`}>
                                <div className="p-6">
                                    <div className={`mx-auto mb-3 p-3 rounded-full w-fit ${stat.bgColor}`}>
                                        {stat.icon}
                                    </div>
                                    <div className={`text-3xl font-bold mb-1 ${stat.textColor}`}>{stat.number}</div>
                                    <div className="text-gray-600 text-sm">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-xl rounded-lg p-8">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-center">
                                <span className="text-logo-blue">Our</span>{' '}
                                <span className="text-logo-green">Mission</span>
                            </h2>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                At Say Cheese Kids Dental & Orthodontics, we're dedicated to creating positive dental experiences
                                that set the foundation for a lifetime of excellent oral health. We combine state-of-the-art
                                technology with gentle, compassionate care to ensure every child feels comfortable, safe, and
                                excited about maintaining their beautiful smile. We also partner with experienced orthodontists
                                to provide comprehensive care under one roof.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>;
};
export default About;
