import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-red-600">Nishant Trust</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-red-600">About</Link>
          <Link to="causes" smooth duration={500} className="cursor-pointer hover:text-red-600">Causes</Link>
          <Link to="impact" smooth duration={500} className="cursor-pointer hover:text-red-600">Impact</Link>
          <Link to="donate" smooth duration={500} className="cursor-pointer hover:text-red-600">Donate</Link>
        </nav>
      </div>
    </header>
  );
}