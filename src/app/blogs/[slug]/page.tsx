import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Phone } from "lucide-react";
import blogPosts from "@/data/blogPosts.json";
import type { Metadata } from "next";
import Button from "@/components/Button";

interface ContentBlock {
  type: "heading" | "paragraph" | "list";
  level?: number;
  text?: string;
  items?: string[];
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: ContentBlock[];
}

export async function generateStaticParams() {
  return (blogPosts as BlogPost[]).map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p: BlogPost) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';
  
  return {
    title: `${post.title} | Say Cheese Kids Dental`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `${baseUrl}/blogs/${post.slug}`,
      images: [
        {
          url: `${baseUrl}/Images/logosaycheese.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}/Images/logosaycheese.png`],
    },
    alternates: {
      canonical: `${baseUrl}/blogs/${post.slug}`,
    },
  };
}

const renderContent = (content: ContentBlock[]) => {
  return content.map((block, index) => {
    switch (block.type) {
      case "heading":
        const level = block.level || 2;
        const headingClasses = {
          2: "text-2xl sm:text-3xl md:text-4xl font-bold mt-10 md:mt-12 mb-4 md:mb-6 text-logo-blue border-b-2 border-logo-blue/20 pb-3",
          3: "text-xl sm:text-2xl md:text-3xl font-bold mt-8 md:mt-10 mb-3 md:mb-4 text-logo-green",
          4: "text-lg sm:text-xl md:text-2xl font-semibold mt-6 md:mt-8 mb-2 md:mb-3 text-logo-yellow"
        };
        const className = headingClasses[level as keyof typeof headingClasses] || headingClasses[2];

        if (level === 2) {
          return <h2 key={index} className={className}>{block.text}</h2>;
        } else if (level === 3) {
          return <h3 key={index} className={className}>{block.text}</h3>;
        } else if (level === 4) {
          return <h4 key={index} className={className}>{block.text}</h4>;
        } else {
          return <h2 key={index} className={className}>{block.text}</h2>;
        }

      case "paragraph":
        return (
          <p
            key={index}
            className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6"
          >
            {block.text}
          </p>
        );

      case "list":
        return (
          <ul
            key={index}
            className="list-disc pl-6 md:pl-8 mb-4 md:mb-6 text-base sm:text-lg text-gray-700 space-y-2"
          >
            {block.items?.map((item, itemIndex) => (
              <li key={itemIndex} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  });
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p: BlogPost) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const tagColors = [
    'bg-logo-blue/20 text-logo-blue border-logo-blue/30',
    'bg-logo-green/20 text-logo-green border-logo-green/30',
    'bg-logo-yellow/20 text-logo-yellow border-logo-yellow/30',
    'bg-logo-pink/20 text-logo-pink border-logo-pink/30'
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Say Cheese Kids Dental & Orthodontics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saycheesekidsdental.lovable.app/lovable-uploads/0b4422d5-7d15-4834-97d2-9764ff0900b7.png"
      }
    },
    "keywords": post.tags.join(", ")
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blogs">
              <button className="flex items-center gap-2 text-logo-blue hover:text-logo-blue/80 mb-6 md:mb-8 transition-colors group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium text-sm md:text-base">Back to Blog</span>
              </button>
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="mb-4 md:mb-6 flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`${tagColors[index % tagColors.length]} border px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-600 mb-6 md:mb-8">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 md:p-2 bg-logo-blue/10 rounded-full">
                    <User className="h-4 w-4 md:h-5 md:w-5 text-logo-blue" />
                  </div>
                  <span className="font-medium text-sm md:text-base">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 md:p-2 bg-logo-green/10 rounded-full">
                    <Calendar className="h-4 w-4 md:h-5 md:w-5 text-logo-green" />
                  </div>
                  <span className="text-sm md:text-base">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 md:p-2 bg-logo-yellow/10 rounded-full">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-logo-yellow" />
                  </div>
                  <span className="text-sm md:text-base">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
                {renderContent(post.content)}
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 via-logo-yellow/5 to-logo-pink/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="border-2 border-logo-blue/30 bg-gradient-to-br from-logo-blue/10 via-logo-green/10 to-logo-yellow/10 backdrop-blur-sm shadow-lg rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                <span className="text-logo-blue">Have Questions About Your Child's</span> <span className="text-logo-green">Dental Health?</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8">
                Our Chino pediatric dental team is here to help! Schedule a consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a href="tel:9094796030">
                  <Button
                    text="Call (909) 479-6030"
                    variant="blue"
                    size="lg"
                    rounded="lg"
                  />
                </a>
                <Link href="/contact">
                  <Button
                    text="Schedule Appointment"
                    variant="outline"
                    size="lg"
                    rounded="lg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
