
import { Star } from "lucide-react";

const Reviews = () => {
    const reviews = [
        {
            name: "Sarah Johnson",
            child: "Emma, age 8",
            text: "Dr. Kohan and the team at Say Cheese Kids made Emma's first dental visit so comfortable. She actually looks forward to going now! The office is bright and cheerful, and they explain everything in kid-friendly terms.",
            rating: 5,
            date: "2 weeks ago"
        },
        {
            name: "Michael Chen",
            child: "Alex & Maya, ages 6 & 10",
            text: "Both my kids love coming here! The staff is incredibly patient and gentle. Maya needed braces and the orthodontic team made the whole process smooth and stress-free. Highly recommend!",
            rating: 5,
            date: "1 month ago"
        },
        {
            name: "Jennifer Martinez",
            child: "Carlos, age 12",
            text: "Carlos was terrified of dentists, but Say Cheese Kids changed everything. They took their time, were super gentle, and now he has a beautiful, healthy smile. The sedation options really helped with his anxiety.",
            rating: 5,
            date: "3 weeks ago"
        },
        {
            name: "David Thompson",
            child: "Lily, age 5",
            text: "The preventive care program is fantastic. Lily learned so much about taking care of her teeth, and the fluoride treatments have kept cavities away. The whole team treats her like family.",
            rating: 5,
            date: "1 week ago"
        },
        {
            name: "Amanda Rodriguez",
            child: "Jake, age 14",
            text: "Jake's Invisalign treatment exceeded our expectations. The results are amazing and the process was much easier than traditional braces. The team monitored his progress closely throughout.",
            rating: 5,
            date: "2 months ago"
        },
        {
            name: "Robert Kim",
            child: "Sophie, age 7",
            text: "Emergency visit on a Saturday and they took excellent care of Sophie. Professional, compassionate, and they made a scary situation much better. We're grateful for their weekend availability.",
            rating: 5,
            date: "4 days ago"
        },
        {
            name: "Lisa Brown",
            child: "Tyler, age 9",
            text: "The virtual tour helped Tyler prepare for his visit, and the actual experience was even better! Dr. Kohan is amazing with kids and makes them feel so comfortable. Five stars!",
            rating: 5,
            date: "1 month ago"
        },
        {
            name: "Carlos Mendez",
            child: "Isabella, age 11",
            text: "Isabella had a complex orthodontic case, but Dr. Kohan explained everything clearly and the results speak for themselves. Her confidence has soared with her new smile!",
            rating: 5,
            date: "6 weeks ago"
        }
    ];

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Say Cheese Kids Dental & Orthodontics",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "200",
            "bestRating": "5"
        },
        "review": reviews.slice(0, 5).map(review => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": review.name
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": review.rating
            },
            "reviewBody": review.text
        }))
    };

    return (
        <div className="min-h-screen">
            <div className="pt-20">
                <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                What <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Parents Say</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                                Don't just take our word for it - hear from the families we've had the privilege to serve
                            </p>

                            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-8 inline-block mb-12">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-3xl font-bold text-gray-900 mb-2">4.9/5 Star Rating</p>
                                <p className="text-gray-600 text-lg">Based on 200+ Google Reviews</p>
                            </div>
                        </div>

                        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-600">Parent of {review.child}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}

                        <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-3xl p-8 md:p-12 text-white text-center">
                            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Happy Families?</h3>
                            <p className="text-xl mb-8 opacity-90">
                                Call us today at (909) 479-6030 and see why families love Say Cheese Kids!
                            </p>
                            <div className="flex justify-center">
                                <a href="tel:9094796030">
                                    {/* <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Call (909) 479-6030
                  </Button> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Reviews;
