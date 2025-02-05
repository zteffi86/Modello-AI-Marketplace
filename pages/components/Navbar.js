import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">Modello</span>
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/models" className="hover:text-gray-300">AI Models</Link></li>
          <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
