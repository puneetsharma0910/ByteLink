import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-wide">
        <Link href="/">ByteLink</Link>
      </div>

      {/* Navigation + Buttons */}
      <div className="flex items-center gap-8">
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link href="/shorten">Shorten</Link>
          </li>
          <li className="hover:text-purple-300 transition-all duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link href="/shorten">
            <button className="bg-white text-purple-700 px-5 py-2 rounded-full font-bold shadow-md hover:bg-purple-200 transition-all">
              Try Now
            </button>
          </Link>

          <Link href="/github">
            <button className="border border-white px-5 py-2 rounded-full font-bold hover:bg-white hover:text-purple-700 transition-all">
              GitHub
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
