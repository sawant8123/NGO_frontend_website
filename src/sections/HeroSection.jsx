import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 1000); // wait for initial animations
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-[100vh] md:min-h-[95vh] bg-center bg-cover flex items-center justify-center text-white w-full px-2 sm:px-4 md:px-12 pt-24"
      style={{ backgroundImage: "url('/images/digital-screen-with-environment-day.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative text-left max-w-screen-xl w-full space-y-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Nishant Charitable Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white"
        >
          Empowering Lives Through Education and Support
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-md md:text-lg max-w-2xl text-white"
        >
          {showTypewriter && (
            <Typewriter
              words={[
                "We believe that every child deserves a chance at a brighter future. Through quality education, community programs, and dedicated care, we strive to uplift the underprivileged and create lasting change.",
              ]}
              loop={false}
              typeSpeed={40}
              cursor
              cursorStyle="|"
            />
          )}
        </motion.p>
      </div>
    </section>
  );
}
