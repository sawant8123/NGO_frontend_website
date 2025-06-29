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
import ContactSection from './sections/ContactSection';

function App() {
  useEffect(() => {
    try {
      AOS.init({ 
        once: false,
        duration: 1000,
        offset: 100,
        delay: 0
      });
    } catch (error) {
      console.warn('AOS initialization failed:', error);
    }
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
      <main>
        <AboutSection />
        <CausesSection />
        <ImpactSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;