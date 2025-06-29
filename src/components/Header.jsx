import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 py-6">
        <div className="flex items-center space-x-2">
          <img src="/images/image.png" alt="Nishant Trust Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-ecoOrange">Nishant Trust</span>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <nav
          className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 text-white font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-ecoGreen md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden md:flex'}`}
        >
          {['about', 'causes', 'impact', 'donate', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="cursor-pointer hover:text-ecoOrange transition-colors px-6 py-3 md:px-0 md:py-0 text-left md:text-center w-full md:w-auto"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
