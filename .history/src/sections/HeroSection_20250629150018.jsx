import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="min-h-[80vh] bg-center bg-cover flex items-center text-white px-4 md:px-12"
      style={{ backgroundImage: "url('/images/BANNER-33.jpg')" }}
    >
      <div className="text-left max-w-screen-xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Nishant Charitable Trust
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl mb-6">
            Empowering Lives Through Education and Support
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
