import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Insurance & Payment Options | Pediatric Dentist Chino, CA",
  description: "Say Cheese Kids Dental accepts most dental insurance plans including Delta Dental, Cigna, MetLife, and Medi-Cal. Flexible payment options and CareCredit financing available.",
  keywords: [
    "dental insurance",
    "pediatric dentist insurance",
    "Delta Dental",
    "Cigna dental",
    "Medi-Cal dental",
    "CareCredit",
    "dental payment plans",
    "insurance accepted Chino"
  ],
  openGraph: {
    title: "Insurance & Payment Options | Say Cheese Kids Dental",
    description: "We accept most dental insurance plans and offer flexible payment options including CareCredit financing.",
    url: `${baseUrl}/insurance`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "Insurance & Payment Options - Say Cheese Kids Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance & Payment Options | Say Cheese Kids Dental",
    description: "We accept most dental insurance plans and offer flexible payment options.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: `${baseUrl}/insurance`,
  },
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

