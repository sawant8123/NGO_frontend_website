export default function CausesSection() {
  const causes = [
    {
      title: "Education Support",
      description: "Ensuring access to quality education through resources and tutoring.",
      image: "/images/Education.jpeg",
    },
    {
      title: "Healthcare Initiatives",
      description: "Providing medical aid, check-ups, and wellness camps for communities.",
      image: "/images/Environment.jpg",
    },
    {
      title: "Nutrition Programs",
      description: "Distributing nutritious food and promoting healthy eating habits.",
      image: "/images/nursing.jpg",
    },
    {
      title: "COVID-19 Food Relief",
      description: "Distributing meals and essentials during pandemic lockdowns.",
      image: "/images/covid_food_donate.png",
    },
    {
      title: "Ration Drive",
      description: "Providing daily essentials and groceries to underprivileged families.",
      image: "/images/ration_drive.jpg",
    },
    {
      title: "Animal Welfare",
      description: "Supporting stray animals with food, shelter, and medical care.",
      image: "/images/furrey_friend.jpg",
    },
  ];

  const CauseCard = ({ title, description, image }) => (
    <div className="min-w-[18rem] max-w-[18rem] bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#F4821F]">{title}</h3>
        <p className="text-gray-600 text-sm mt-1 leading-snug">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="causes" className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Our <span className="text-[#F4821F]">Focus Areas</span>
        </h2>

        {/* Infinite marquee */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll w-max">
            {causes.concat(causes).map((cause, idx) => (
              <CauseCard key={idx} {...cause} />
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-orange-100 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-orange-100 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
