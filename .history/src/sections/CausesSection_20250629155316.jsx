import { Marquee } from "../components/Marquee";

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
      image: "/images/nursing.jpg", // or your nutrition image
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
    <div className="h-full w-72 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transform transition duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-[#F4821F] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="causes" className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 tracking-wide">
          Our <span className="text-[#F4821F]">Focus Areas</span>
        </h2>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            <div className="flex gap-8 px-4">
              {causes.map((cause, idx) => (
                <CauseCard key={idx} {...cause} />
              ))}
            </div>
          </Marquee>

          {/* Gradient fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-orange-100 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-orange-100 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
