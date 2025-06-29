import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 w-full px-2 sm:px-4 md:px-12 bg-gray-100" data-aos="fade-up">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Contact Form */}
        <div data-aos="fade-right" className="bg-white shadow-lg rounded-2xl p-4 md:p-8 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-ecoOrange mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
            Have questions, suggestions, or want to support our mission? Get in touch with us!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 text-left">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ecoOrange text-base md:text-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ecoOrange text-base md:text-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 md:px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-ecoOrange text-base md:text-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-ecoOrange text-white font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded hover:bg-orange-600 transition duration-300 text-base md:text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div data-aos="fade-left" className="flex flex-col gap-6 md:gap-8 items-center md:items-start w-full">
          <div className="bg-ecoGreen/10 rounded-xl p-4 md:p-6 w-full">
            <h3 className="text-lg md:text-xl font-bold text-ecoGreen mb-2">Our Office</h3>
            <p className="text-gray-700 text-base md:text-lg">Near police station, Borivali, Mumbai, India – 77889</p>
          </div>
          <div className="bg-ecoGreen/10 rounded-xl p-4 md:p-6 w-full">
            <h3 className="text-lg md:text-xl font-bold text-ecoGreen mb-2">Call Us</h3>
            <p className="text-gray-700 text-base md:text-lg">+91 785384773</p>
          </div>
          <div className="bg-ecoGreen/10 rounded-xl p-4 md:p-6 w-full">
            <h3 className="text-lg md:text-xl font-bold text-ecoGreen mb-2">Email</h3>
            <p className="text-gray-700 text-base md:text-lg">contact@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
