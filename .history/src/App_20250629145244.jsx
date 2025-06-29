import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CausesSection from './sections/CausesSection';
import ImpactSection from './sections/ImpactSection';
import CTASection from './sections/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CausesSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;