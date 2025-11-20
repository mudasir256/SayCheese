import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

export const metadata: Metadata = {
  title: "Contact Us | Pediatric Dentist Chino, CA",
  description: "Contact Say Cheese Kids Dental & Orthodontics in Chino, CA. Call (909) 479-6030 or visit us at 12413 Central Ave, Chino, CA 91710. Open Monday-Friday 8AM-5PM, Saturday 8AM-2PM.",
  keywords: [
    "contact pediatric dentist",
    "dentist Chino CA",
    "kids dentist contact",
    "pediatric dental office",
    "Chino dentist address",
    "dental office hours"
  ],
  openGraph: {
    title: "Contact Us | Say Cheese Kids Dental Chino",
    description: "Get in touch with Say Cheese Kids Dental. Call (909) 479-6030 or visit us at 12413 Central Ave, Chino, CA 91710.",
    url: `${baseUrl}/contact`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: "Contact Say Cheese Kids Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Say Cheese Kids Dental",
    description: "Call (909) 479-6030 or visit us at 12413 Central Ave, Chino, CA 91710.",
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

