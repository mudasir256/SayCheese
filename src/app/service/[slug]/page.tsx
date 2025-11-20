import { notFound } from 'next/navigation';
import Orthodontics from '@/components/Orthodontics';
import SedationDentistry from '@/components/SedationDentistry';
import SpecialNeeds from '@/components/SpecialNeeds';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saycheesekidsdental.com';

const serviceComponents: Record<string, React.ComponentType> = {
  'orthodontics': Orthodontics,
  'sedation-dentistry': SedationDentistry,
  'special-needs-care': SpecialNeeds,
};

const serviceMetadata: Record<string, Metadata> = {
  'orthodontics': {
    title: 'Orthodontics & Braces for Kids | Chino, CA',
    description: 'Expert orthodontic treatment for children and teens in Chino, CA. Traditional braces, clear ceramic braces, Invisalign Teen, and early orthodontic intervention. Call (909) 479-6030.',
    keywords: [
      'orthodontics Chino',
      'braces for kids',
      'Invisalign Teen',
      'children orthodontist',
      'kids braces',
      'orthodontic treatment',
      'early orthodontic intervention'
    ],
    openGraph: {
      title: 'Orthodontics & Braces for Kids | Say Cheese Kids Dental',
      description: 'Expert orthodontic treatment for children and teens. Traditional braces, clear ceramic braces, and Invisalign Teen available.',
      url: `${baseUrl}/service/orthodontics`,
      type: 'website',
    },
  },
  'sedation-dentistry': {
    title: 'Sedation Dentistry for Children | Chino, CA',
    description: 'Gentle sedation dentistry options for anxious children at Say Cheese Kids Dental in Chino, CA. Nitrous oxide and oral sedation available. Making dental visits comfortable and stress-free.',
    keywords: [
      'sedation dentistry',
      'pediatric sedation',
      'nitrous oxide',
      'dental anxiety',
      'anxious children dentist',
      'sedation for kids',
      'comfortable dental visits'
    ],
    openGraph: {
      title: 'Sedation Dentistry for Children | Say Cheese Kids Dental',
      description: 'Gentle sedation options for anxious children. Making dental visits comfortable and stress-free.',
      url: `${baseUrl}/service/sedation-dentistry`,
      type: 'website',
    },
  },
  'special-needs-care': {
    title: 'Special Needs Dental Care | Chino, CA',
    description: 'Comprehensive dental care for children with special needs in Chino, CA. Specially designed private rooms and accommodations. Patient, experienced team dedicated to your child\'s comfort.',
    keywords: [
      'special needs dentist',
      'special needs dental care',
      'children with disabilities dentist',
      'autism friendly dentist',
      'special needs pediatric dentist',
      'accessible dental care'
    ],
    openGraph: {
      title: 'Special Needs Dental Care | Say Cheese Kids Dental',
      description: 'Comprehensive dental care for children with special needs. Specially designed accommodations and patient, experienced team.',
      url: `${baseUrl}/service/special-needs-care`,
      type: 'website',
    },
  },
};

export async function generateStaticParams() {
  return [
    { slug: 'orthodontics' },
    { slug: 'sedation-dentistry' },
    { slug: 'special-needs-care' },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const metadata = serviceMetadata[slug];
  
  if (!metadata) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [
        {
          url: `${baseUrl}/Images/logosaycheese.png`,
          width: 1200,
          height: 630,
          alt: metadata.openGraph?.title || 'Service',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.openGraph?.title || metadata.title?.toString() || '',
      description: metadata.description?.toString() || '',
      images: [`${baseUrl}/Images/logosaycheese.png`],
    },
    alternates: {
      canonical: `${baseUrl}/service/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const ServiceComponent = serviceComponents[slug];

  if (!ServiceComponent) {
    notFound();
  }

  return <ServiceComponent />;
}

