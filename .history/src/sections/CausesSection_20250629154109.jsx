import { Marquee } from "@/components/magicui/marquee";

export default function CausesSection() {
  const causes = [
    {
      title: "Education",
      description: "Providing access to quality education for all.",
      image: "/images/Education.jpeg",
    },
    {
      title: "Health",
      description: "Organizing health camps and providing medical support.",
      image: "/images/Environment.jpg",
    },
    {
      title: "Women Empowerment",
      description: "Empowering women with skills and resources.",
      image: "/images/nursing.jpg",
    },
    {
      title: "Child Care",
      description: "Ensuring a safe and nurturing environment for children.",
      image: "/images/childcare.jpg",
    },
    {
      title: "Environment",
      description: "Promoting sustainable and eco-friendly practices.",
      image: "/images/environment-2.jpg",
    },
  ];

  // ✅ Remove type annotations here
  const CauseCard = ({ title, description, image }) => (
    <div className="h-full w-64 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4 hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-red-600">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="causes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Focus Areas</h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:25s]">
            {causes.map((cause, idx) => (
              <CauseCard key={idx} {...cause} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
