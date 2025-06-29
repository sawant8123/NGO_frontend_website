import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-ecoGreen text-white pt-12">
      <div className="w-full max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8 justify-items-center text-center">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <img src="/images/image.png" alt="Nishant Trust Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-ecoOrange">Nishant Trust</span>
          </div>
          <p className="text-sm opacity-80 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
          </p>
        </div>
        <div>
          <h3 className="text-ecoOrange font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-ecoOrange transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-ecoOrange transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-ecoOrange transition-colors">Destination</a></li>
            <li><a href="#" className="hover:text-ecoOrange transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-ecoOrange font-semibold mb-3">Other Pages</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-ecoOrange transition-colors">Privacy & Policy</a></li>
            <li><a href="#" className="hover:text-ecoOrange transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-ecoOrange transition-colors">Disclaimer</a></li>
            <li><a href="#" className="hover:text-ecoOrange transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-ecoOrange font-semibold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 justify-center"><MapPinIcon className="w-5 h-5 text-ecoOrange mt-0.5" />Near police station, Borivali, Mumbai, India – 77889</li>
            <li className="flex items-center gap-2 justify-center"><PhoneIcon className="w-5 h-5 text-ecoOrange" />+91 785384773</li>
            <li className="flex items-center gap-2 justify-center"><EnvelopeIcon className="w-5 h-5 text-ecoOrange" />contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center gap-4 pb-6 text-center px-4">
        <h3 className="text-lg font-bold text-white">Social</h3>
        <div className="flex gap-4">
          <a href="#" className="bg-white/10 hover:bg-ecoOrange text-white hover:text-white rounded-full p-2 transition"><FaFacebookF size={22} /></a>
          <a href="#" className="bg-white/10 hover:bg-ecoOrange text-white hover:text-white rounded-full p-2 transition"><FaInstagram size={22} /></a>
          <a href="#" className="bg-white/10 hover:bg-ecoOrange text-white hover:text-white rounded-full p-2 transition"><FaTwitter size={22} /></a>
          <a href="#" className="bg-white/10 hover:bg-ecoOrange text-white hover:text-white rounded-full p-2 transition"><FaLinkedinIn size={22} /></a>
          <a href="#" className="bg-white/10 hover:bg-ecoOrange text-white hover:text-white rounded-full p-2 transition"><FaYoutube size={22} /></a>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto border-t border-white/10 py-4 text-center text-xs opacity-80 px-4">
        &copy; {new Date().getFullYear()} Nishant Charitable Trust. All rights reserved.
      </div>
    </footer>
  );
}
