import { FaUsers, FaHandsHelping, FaProjectDiagram } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const icons = [FaUsers, FaHandsHelping, FaProjectDiagram];
const iconBg = ["bg-ecoOrange/20", "bg-ecoGreen/20", "bg-ecoYellow/20"];
const iconColor = ["text-ecoOrange", "text-ecoGreen", "text-ecoYellow"];

export default function ImpactSection() {
  const stats = [
    { label: "Beneficiaries", value: 5000 },
    { label: "Volunteers", value: 200 },
    { label: "Projects", value: 120 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="impact" className="py-20 bg-gray-50 w-full px-2 sm:px-4 md:px-0" ref={ref} data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 md:mb-14" data-aos="fade-up">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat, idx) => {
          const Icon = icons[idx];
          return (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-3xl shadow-xl border-b-4 border-ecoOrange p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl min-w-0"
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
            >
              <div className={`mb-4 md:mb-6 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full ${iconBg[idx]}`}>
                <Icon className={`w-8 h-8 md:w-12 md:h-12 ${iconColor[idx]}`} />
              </div>
              <h3 className="text-3xl md:text-5xl font-extrabold text-ecoGreen mb-2">
                <CountUp end={isInView ? stat.value : 0} duration={2} />+
              </h3>
              <p className="text-base md:text-lg font-semibold text-gray-700 mt-2 tracking-wide">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}