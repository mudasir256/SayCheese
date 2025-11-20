import HeroSection from "@/components/HeroSection/index";
import WhyChoose from "@/components/WhyChoose/index";
import AboutSection from "@/components/About/index";
import Comprehensive from "@/components/Comprehensive/index";
import WhyChoosetwo from "@/components/WhyChoosetwo/index";
import ReadyToGive from "@/components/ReadyToGive/index";
import Reviews from "@/components/Reviews/index";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Pediatric Dentist in Chino, CA | Kids Dental & Orthodontics",
  description: "Say Cheese Kids Dental & Orthodontics in Chino, CA. Expert pediatric dental care for children. Braces, cleanings, emergency care, and more. Call (909) 479-6030.",
  keywords: [
    "pediatric dentist Chino",
    "kids dentist Chino CA",
    "children's dentist",
    "orthodontist Chino",
    "braces for kids",
    "pediatric dental care",
    "Invisalign Teen",
    "emergency pediatric dentist",
    "family dentist Chino"
  ],
  openGraph: {
    title: "Pediatric Dentist in Chino, CA | Say Cheese Kids Dental",
    description: "Expert pediatric dental and orthodontic care for children in Chino, CA. Creating beautiful, healthy smiles in a fun, child-friendly environment.",
    url: baseUrl,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "Say Cheese Kids Dental & Orthodontics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pediatric Dentist in Chino, CA | Say Cheese Kids Dental",
    description: "Expert pediatric dental and orthodontic care for children in Chino, CA.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function Home() {
  return (
    <main >
      <HeroSection />
      <WhyChoose />
      <AboutSection />
      <Comprehensive />
      <WhyChoosetwo />
      <ReadyToGive />
      <Reviews />
    </main>
  );
}
