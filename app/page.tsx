import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Marquee from '@/components/Marquee';
import SelectedWork from '@/components/SelectedWork';
import Playground from '@/components/Playground';
import Experience from '@/components/Experience';
import Process from '@/components/Process';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FortuneGame from '@/components/FortuneGame';

export const metadata = {
  title: 'Jesna Elizabeth Jolly — UI/UX Designer & Creative Technologist',
  description:
    'Portfolio of Jesna Elizabeth Jolly, a UI/UX Designer, Product Designer, and Creative Technologist based in Kerala, India.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Marquee />
      <Introduction />
      <SelectedWork />
      <Playground />
      <Experience />
      <Process />
      <Skills />
      <Contact />
      <Footer />
      <FortuneGame />
    </main>
  );
}
