import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="min-h-[80vh] bg-center bg-cover flex items-center text-white px-4 md:px-12"
      style={{ backgroundImage: "url('/images/BANNER-33.jpg')" }}
    >
      <div className="text-left max-w-screen-xl w-full space-y-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold"
        >
          Nishant Charitable Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          className="text-xl md:text-2xl"
        >
          Empowering Lives Through Education and Support
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-md md:text-lg max-w-2xl"
        >
          We believe that every child deserves a chance at a brighter future. Through quality education,
          community programs, and dedicated care, we strive to uplift the underprivileged and create lasting change.
        </motion.p>

        <motion.a
          href="#donate"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="inline-block bg-orange-00 hover:bg-orange-700 px-6 py-3 rounded-lg text-white transition"
        >
          Donate Now
        </motion.a>
      </div>
    </section>
  );
}
