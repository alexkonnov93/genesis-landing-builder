import { NavBar } from '@/components/layout';
import { HeroSection } from '@/components/sections';

interface LandingPageProps {
  params: Promise<{ slug: string }>;
}

const navLinks = [
  { label: 'Menu Item', href: '#' },
  { label: 'Menu Item', href: '#' },
  { label: 'Menu Item', href: '#' },
  { label: 'Menu Item', href: '#' },
];

const navActions = [
  { label: 'Ghost Button', href: '#', variant: 'ghost' as const },
  { label: 'Secondary Button', href: '#', variant: 'tertiary' as const },
  { label: 'Primary Button', href: '#', variant: 'primary' as const },
];

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;

  return (
    <>
      <NavBar links={navLinks} actions={navActions} />
      <HeroSection
        tag="Tag"
        headline={`Landing: ${slug}`}
        subline="Section-by-section landing page"
        imageSrc="/images/hero-image.jpg"
        imageAlt="Skyscrapers viewed from below"
      />
    </>
  );
}
