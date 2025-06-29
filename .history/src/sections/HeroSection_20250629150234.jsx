import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="min-h-[80vh] bg-center bg-cover flex items-center text-white px-4 md:px-12"
      style={{ backgroundImage: "url('/images/BANNER-33.jpg')" }}
    >
      <div className="text-left max-w-screen-xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 70, duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Nishant Charitable Trust
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl mb-4">
            Empowering Lives Through Education and Support
          </p>
          <p className="text-md md:text-lg mb-6 max-w-2xl">
            We believe that every child deserves a chance at a brighter future. Through quality education,
            community programs, and dedicated care, we strive to uplift the underprivileged and create lasting change.
          </p>
          <a
            href="#donate"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white transition"
          >
            Donate Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
