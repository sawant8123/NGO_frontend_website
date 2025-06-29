import CountUp from 'react-countup';

export default function ImpactSection() {
  const stats = [
    { label: "Beneficiaries", value: 5000 },
    { label: "Volunteers", value: 200 },
    { label: "Projects", value: 120 },
  ];

  return (
    <section id="impact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white shadow-md p-8 rounded-lg">
              <h3 className="text-4xl font-bold text-red-600 mb-2">
                <CountUp end={stat.value} duration={2} />+
              </h3>
              <p className="text-gray-700 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}