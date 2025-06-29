export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">About the Trust</h2>
          <p className="text-gray-600 mt-4">We aim to provide better opportunities and improve lives through education, awareness, and support programs.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <img src="/assets/about.jpg" alt="About" className="w-full md:w-1/2 rounded-lg" />
          <div className="md:ml-8 mt-6 md:mt-0">
            <p className="text-gray-700 text-lg">Nishant Charitable Trust is dedicated to uplifting underprivileged communities with various initiatives in education, health, and livelihood.</p>
          </div>
        </div>
      </div>
    </section>
  );
}