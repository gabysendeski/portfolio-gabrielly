import Hero from '@/components/Hero';
import About from '@/components/About';
import TechnologiesCarousel from '@/components/TechnologiesCarousel';
import Projects from '@/components/Projects'; // Adicione esta linha
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechnologiesCarousel />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}