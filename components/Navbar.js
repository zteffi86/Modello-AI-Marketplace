// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between">
        <Link href="/">
          <span className="font-bold text-xl cursor-pointer">Modello AI</span>
        </Link>
        <div className="space-x-4">
          <Link href="/models"><span className="cursor-pointer">Models</span></Link>
          <Link href="/pricing"><span className="cursor-pointer">Pricing</span></Link>
          <Link href="/about"><span className="cursor-pointer">About</span></Link>
          <Link href="/contact"><span className="cursor-pointer">Contact</span></Link>
        </div>
      </div>
    </nav>
  );
}
