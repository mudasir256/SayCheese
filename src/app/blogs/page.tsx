import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import blogPosts from "@/data/blogPosts.json";

const Blog = () => {

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-logo-blue">Pediatric</span>{' '}
                <span className="text-logo-green">Dental</span>{' '}
                <span className="text-logo-yellow">Health</span>{' '}
                <span className="text-logo-pink">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert advice from Chino's trusted pediatric dentist on children's oral health, 
                orthodontics, and creating positive dental experiences for kids.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => {
                const themeColors = [
                  'bg-gradient-to-br from-logo-blue/10 to-logo-blue/5 border-logo-blue/30',
                  'bg-gradient-to-br from-logo-green/10 to-logo-green/5 border-logo-green/30',
                  'bg-gradient-to-br from-logo-yellow/10 to-logo-yellow/5 border-logo-yellow/30',
                  'bg-gradient-to-br from-logo-pink/10 to-logo-pink/5 border-logo-pink/30'
                ];
                const colorClass = themeColors[index % themeColors.length];
                const tagColors = [
                  'bg-logo-blue/20 text-logo-blue',
                  'bg-logo-green/20 text-logo-green',
                  'bg-logo-yellow/20 text-logo-yellow',
                  'bg-logo-pink/20 text-logo-pink'
                ];
                
                return (
                  <div key={post.id} className={`hover:shadow-xl transition-all duration-300 border-2 ${colorClass} rounded-lg overflow-hidden hover:scale-105`}>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <Link href={`/blogs/${post.slug}`}>
                          <button className="group flex items-center gap-1 border-2 border-logo-blue text-logo-blue hover:bg-logo-blue hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                            Read More
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`${tagColors[tagIndex % tagColors.length]} px-2 py-1 rounded-full text-xs font-medium`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-logo-blue">Questions About Your Child's</span> <span className="text-logo-green">Dental Health?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our Chino pediatric dental team is here to help! Schedule a consultation today.
              </p>
              <div className="flex justify-center">
                <a href="tel:9094796030">
                  <button className="bg-gradient-to-r from-logo-blue to-logo-green hover:from-logo-blue/90 hover:to-logo-green/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl">
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

export default Blog;
