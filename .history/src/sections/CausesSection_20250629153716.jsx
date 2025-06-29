export default function CausesSection() {
  const causes = [
    { title: "Education", description: "Providing access to quality education for all.", image: "public/images/Education.jpeg" },
    { title: "Health", description: "Organizing health camps and providing medical support.", image: "/assets/health.jpg" },
    { title: "Women Empowerment", description: "Empowering women with skills and resources.", image: "/assets/women.jpg" },
  ];

  return (
    <section id="causes" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-red-600 mb-2">{cause.title}</h3>
                <p className="text-gray-600">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}