import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

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
          <Typewriter
            words={['Nishant Charitable Trust']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.3, duration: 1, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl mb-4 shimmer-text">
            Empowering Lives Through Education and Support
          </p>
          <p className="text-md md:text-lg mb-6 max-w-2xl">
            We believe that every child deserves a chance at a brighter future. Through quality education,
            community programs, and dedicated care, we strive to uplift the underprivileged and create lasting change.
          </p>
          <a
            href="#donate"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white transition shimmer-button inline-block"
          >
            Donate Now
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -700px 0;
          }
          100% {
            background-position: 700px 0;
          }
        }

        .shimmer-text {
          background: linear-gradient(
            to right,
            #ffffff 4%,
            #e0e0e0 25%,
            #ffffff 36%
          );
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2s infinite linear;
        }

        .shimmer-button {
          position: relative;
          overflow: hidden;
        }

        .shimmer-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
