import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/index";
import Header from "@/components/Header/index";
import CustomCursor from "@/components/CustomCursor";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';
const siteName = "Say Cheese Kids Dental & Orthodontics";
const defaultDescription = "Creating beautiful, healthy smiles for children in Chino, CA. Gentle, comprehensive dental care in a fun, child-friendly environment. Expert pediatric dentistry and orthodontics services.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "pediatric dentist",
    "kids dentist",
    "children's dentist",
    "orthodontist",
    "braces for kids",
    "Chino dentist",
    "pediatric dental care",
    "children's orthodontics",
    "kids braces",
    "Invisalign Teen",
    "dental care for children",
    "Chino CA dentist",
    "pediatric dentistry",
    "family dentist",
    "emergency pediatric dentist"
  ],
  authors: [{ name: "Dr. Joshua Kohan" }],
  creator: "Say Cheese Kids Dental & Orthodontics",
  publisher: "Say Cheese Kids Dental & Orthodontics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: siteName,
    title: siteName,
    description: defaultDescription,
    images: [
      {
        url: `${baseUrl}/Images/logosaycheese.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: [`${baseUrl}/Images/logosaycheese.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "Healthcare",
  classification: "Pediatric Dentistry",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "Say Cheese Kids Dental & Orthodontics",
  "description": "Pediatric dental and orthodontic practice in Chino, CA providing comprehensive dental care for children and teenagers.",
  "url": baseUrl,
  "telephone": "+19094796030",
  "email": "saycheesekidsdental@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12113 Central Ave",
    "addressLocality": "Chino",
    "addressRegion": "CA",
    "postalCode": "91710",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "34.0122",
    "longitude": "-117.6891"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "image": `${baseUrl}/Images/logosaycheese.png`,
  "logo": `${baseUrl}/Images/logosaycheese.png`,
  "sameAs": [
    // Add social media links if available
  ],
  "areaServed": {
    "@type": "City",
    "name": "Chino",
    "sameAs": "https://en.wikipedia.org/wiki/Chino,_California"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pediatric Dental Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pediatric Dental Care",
          "description": "Comprehensive dental care for children"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Orthodontics",
          "description": "Braces and orthodontic treatment for children and teens"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Emergency Dental Care",
          "description": "24/7 emergency pediatric dental services"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fredoka.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <div className=" hidden lg:block">
          <CustomCursor />
        </div>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
