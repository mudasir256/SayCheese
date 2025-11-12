import { Heart, Award, Users, Clock } from "lucide-react";
const About = () => {
    const stats = [{
        icon: <Users className="h-8 w-8 text-blue-600" />,
        number: "1000+",
        label: "Happy Patients"
    }, {
        icon: <Award className="h-8 w-8 text-green-600" />,
        number: "5+",
        label: "Years Experience"
    }, {
        icon: <Heart className="h-8 w-8 text-pink-600" />,
        number: "99%",
        label: "Satisfaction Rate"
    }, {
        icon: <Clock className="h-8 w-8 text-purple-600" />,
        number: "After-Hours",
        label: "Emergency Care Available"
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
        <div className="pt-20">
            <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            About <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Say Cheese Kids</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Creating beautiful, healthy smiles for children in our community since 2019
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Dr. Joshua Kohan</h2>
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
                            <div className="bg-blue-100 p-6 rounded-lg mb-6">
                                <p className="text-blue-800 italic font-medium">
                                    "My philosophy centers around creating enjoyable dental experiences, reducing anxiety, and
                                    building a positive foundation for lifelong oral health. I want to make dental visits comfortable,
                                    fun, and stress-free for every child."
                                </p>
                                <p className="text-blue-600 font-semibold mt-2">- Dr. Joshua Kohan, D.M.D.</p>
                            </div>
                            <a href="tel:9094796030">
                                {/* <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold">
                  Call (909) 479-6030
                </Button> */}
                            </a>
                        </div>

                    </div>

                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => <Card key={index} className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-3 p-3 bg-gray-100 rounded-full w-fit">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>)}
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-gray-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  At Say Cheese Kids Dental & Orthodontics, we're dedicated to creating positive dental experiences 
                  that set the foundation for a lifetime of excellent oral health. We combine state-of-the-art 
                  technology with gentle, compassionate care to ensure every child feels comfortable, safe, and 
                  excited about maintaining their beautiful smile. We also partner with experienced orthodontists 
                  to provide comprehensive care under one roof.
                </p>
              </CardContent>
            </Card> */}
                </div>
            </section>
        </div>
    </div>;
};
export default About;
