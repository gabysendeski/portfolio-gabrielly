import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageEffects } from "@/components/PageEffects";

export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <PageEffects />
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Services />
        <Projects />
        <Capabilities />
        <Experience />
        <Stack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
