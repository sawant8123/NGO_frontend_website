import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-blue-100 rounded-full opacity-30 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 relative inline-block">
            About the Trust
            <span className="block w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full" />
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We aim to provide better opportunities and improve lives through education, awareness, and support programs.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <motion.img
            src="public/images/About.jpg"
            alt="About Nishant Trust"
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          />

          {/* Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong className="text-blue-600">Nishant Charitable Trust</strong> is committed to uplifting underprivileged communities through focused initiatives in education, healthcare, and sustainable livelihood. Our mission is to create a more inclusive and empowered society by bridging the gap between potential and opportunity.
            </p>

            <ul className="mt-6 list-disc list-inside text-gray-600">
              <li>Educational workshops & scholarships</li>
              <li>Health check-up & awareness camps</li>
              <li>Vocational training for employment</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
