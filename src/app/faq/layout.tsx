import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Pediatric Dentist Chino, CA",
  description: "Find answers to common questions about pediatric dental care, orthodontics, braces, and what to expect at Say Cheese Kids Dental in Chino, CA.",
  keywords: [
    "pediatric dentist FAQ",
    "kids dentist questions",
    "orthodontics FAQ",
    "braces questions",
    "pediatric dental care FAQ",
    "children's dentist Chino"
  ],
  openGraph: {
    title: "Frequently Asked Questions | Say Cheese Kids Dental",
    description: "Find answers to common questions about pediatric dental care, orthodontics, and braces for children.",
    url: `${baseUrl}/faq`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "FAQ - Say Cheese Kids Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Say Cheese Kids Dental",
    description: "Find answers to common questions about pediatric dental care and orthodontics.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

