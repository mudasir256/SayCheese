import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Patient Reviews | Pediatric Dentist Chino, CA",
  description: "Read reviews from parents about Say Cheese Kids Dental & Orthodontics in Chino, CA. 4.9/5 star rating based on 200+ Google reviews. See why families love our pediatric dental care.",
  keywords: [
    "pediatric dentist reviews",
    "kids dentist reviews",
    "Chino dentist reviews",
    "pediatric dental reviews",
    "Say Cheese Kids Dental reviews",
    "patient testimonials"
  ],
  openGraph: {
    title: "Patient Reviews | Say Cheese Kids Dental",
    description: "4.9/5 star rating based on 200+ Google reviews. Read what parents say about our pediatric dental care in Chino, CA.",
    url: `${baseUrl}/reviews`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "Patient Reviews - Say Cheese Kids Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Reviews | Say Cheese Kids Dental",
    description: "4.9/5 star rating based on 200+ Google reviews. See why families love our pediatric dental care.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: `${baseUrl}/reviews`,
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

