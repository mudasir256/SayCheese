import { notFound } from 'next/navigation';
import Orthodontics from '@/components/Orthodontics';
import SedationDentistry from '@/components/SedationDentistry';
import SpecialNeeds from '@/components/SpecialNeeds';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const serviceComponents: Record<string, React.ComponentType> = {
  'orthodontics': Orthodontics,
  'sedation-dentistry': SedationDentistry,
  'special-needs-care': SpecialNeeds,
};

export async function generateStaticParams() {
  return [
    { slug: 'orthodontics' },
    { slug: 'sedation-dentistry' },
    { slug: 'special-needs-care' },
  ];
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const ServiceComponent = serviceComponents[slug];

  if (!ServiceComponent) {
    notFound();
  }

  return <ServiceComponent />;
}

