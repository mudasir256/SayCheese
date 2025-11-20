import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Pediatric Dental Health Blog | Chino, CA",
  description: "Expert advice from Chino's trusted pediatric dentist on children's oral health, orthodontics, and creating positive dental experiences for kids. Tips, guides, and dental health information.",
  keywords: [
    "pediatric dental blog",
    "kids dental health",
    "children's oral health",
    "orthodontics blog",
    "pediatric dentist tips",
    "dental health for kids"
  ],
  openGraph: {
    title: "Pediatric Dental Health Blog | Say Cheese Kids Dental",
    description: "Expert advice on children's oral health, orthodontics, and creating positive dental experiences for kids.",
    url: `${baseUrl}/blogs`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "Pediatric Dental Health Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pediatric Dental Health Blog | Say Cheese Kids Dental",
    description: "Expert advice on children's oral health and orthodontics.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: `${baseUrl}/blogs`,
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

