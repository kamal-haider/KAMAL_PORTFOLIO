import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedWork from '@/components/FeaturedWork';
import OtherProjects from '@/components/OtherProjects';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedWork />
      <OtherProjects />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}

