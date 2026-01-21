import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import HowItWorks from '@/components/HowItWorks';
import Flavors from '@/components/Flavors';
import CakeGallery from '@/components/CakeGallery';
import Hero from '@/components/Hero';


export default function Home() {
  return (
    <>
      <Hero />
      <CakeGallery />
      <Flavors />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}