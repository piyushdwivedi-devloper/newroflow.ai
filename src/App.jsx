import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { CursorGlow } from './components/CursorGlow';
import { BackToTop } from './components/BackToTop';

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-[100dvh] w-full bg-background text-foreground flex flex-col relative selection:bg-primary/30">
      <CursorGlow />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <TrustedBy />
        <Features />
        <Pricing />
        <Testimonials />
        <CtaBanner />
        <FaqAccordion />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
