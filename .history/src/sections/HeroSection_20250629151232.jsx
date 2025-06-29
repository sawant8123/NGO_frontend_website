import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <section
      className="min-h-[80vh] bg-center bg-cover flex items-center text-white px-4 md:px-12"
      style={{ backgroundImage: "url('/images/BANNER-33.jpg')" }}
    >
      <div className="text-left max-w-screen-xl w-full space-y-6">
        {/* h1 - From Top */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold"
        >
          Nishant Charitable Trust
        </motion.h1>

        {/* First p - From Left */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-xl md:text-2xl"
        >
          Empowering Lives Through Education and Support
        </motion.p>

        {/* Second p - Typing effect, From Bottom */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="text-md md:text-lg max-w-2xl"
        >
          <Typewriter
            words={[
              'We believe that every child deserves a chance at a brighter future. Through quality education, community programs, and dedicated care, we strive to uplift the underprivileged and create lasting change.'
            ]}
            loop={false}
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={1000}
            cursor
            cursorStyle="|"
          />
        </motion.p>

        {/* Button - From Left
        <motion.a
          href="#donate"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
          className="inline-block bg-orange-400 hover:bg-orange-300 px-6 py-3 rounded-lg text-white transition"
        >
          Donate Now
        </motion.a> */}
      </div>
    </section>
  );
}
