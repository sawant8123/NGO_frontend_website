import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="min-h-[80vh] bg-center bg-cover flex items-center text-white px-4 md:px-12"
      style={{ backgroundImage: "url('/images/BANNER-33.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-left max-w-screen-xl w-full"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Nishant Charitable Trust</h1>
        <p className="text-lg md:text-xl mb-6">Empowering Lives Through Education and Support</p>
        <a
          href="#donate"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white transition"
        >
          Donate Now
        </a>
      </motion.div>
    </section>
  );
}
