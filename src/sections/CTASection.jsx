import { useState } from 'react';

export default function CTASection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    amount: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your donation!');
    setForm({ firstName: '', lastName: '', email: '', phone: '', state: '', amount: '' });
  };

  return (
    <section
      id="donate"
      className="relative min-h-[80vh] w-full flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-0"
      style={{ backgroundImage: "url('/images/digital-screen-with-environment-day.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-8 sm:py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-ecoOrange mb-6" data-aos="fade-down">
          DONATE & HELP <br />  CHILDREN FOR EDUCATION
        </h2>
        {/* Donate Form Card */}
        <div
          className="mx-auto w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col items-center"
          data-aos="zoom-in"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center text-ecoOrange mb-6 tracking-wide">DONATE NOW</h3>
          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen text-base bg-white placeholder-gray-400 shadow-sm transition"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen text-base bg-white placeholder-gray-400 shadow-sm transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen text-base bg-white placeholder-gray-400 shadow-sm transition col-span-1 md:col-span-2"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen text-base bg-white placeholder-gray-400 shadow-sm transition col-span-1 md:col-span-2"
            />
            <div className="col-span-1 md:col-span-2">
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen text-base bg-white text-gray-700 shadow-sm transition appearance-none"
                style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'%23666666\' stroke-width=\'2\' viewBox=\'0 0 24 24\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'/></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Delhi">Delhi</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <input
              type="number"
              name="amount"
              placeholder="Amount "
              value={form.amount}
              onChange={handleChange}
              required
              min="1"
              className="col-span-1 md:col-span-2 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen text-base bg-white placeholder-gray-400 shadow-sm transition"
            />
            <button
              type="submit"
              className="col-span-1 md:col-span-2 mt-2 bg-ecoOrange text-white font-bold py-2 rounded-lg hover:bg-ecoGreen transition text-base tracking-wide shadow-md"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}