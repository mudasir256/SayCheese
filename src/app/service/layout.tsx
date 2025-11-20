import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Pediatric Dental Services | Chino, CA",
  description: "Comprehensive pediatric dental and orthodontic services in Chino, CA. Preventive care, restorative dentistry, orthodontics, emergency care, and more. Expert care for children and teens.",
  keywords: [
    "pediatric dental services",
    "kids dental services",
    "children's dentistry",
    "orthodontics services",
    "preventive dental care",
    "emergency pediatric dentist",
    "braces for kids",
    "dental services Chino"
  ],
  openGraph: {
    title: "Pediatric Dental Services | Say Cheese Kids Dental",
    description: "Comprehensive dental and orthodontic services designed specifically for children and teenagers in Chino, CA.",
    url: `${baseUrl}/service`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "Pediatric Dental Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pediatric Dental Services | Say Cheese Kids Dental",
    description: "Comprehensive dental and orthodontic services for children and teenagers.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: `${baseUrl}/service`,
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

