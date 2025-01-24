import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Rocket, Facebook, Instagram, Mail } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="w-8 h-8" />
            <span className="text-xl font-bold">Quixcel</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-purple-200 transition">Home</Link>
            <Link to="/about" className="hover:text-purple-200 transition">About</Link>
            <Link to="/services" className="hover:text-purple-200 transition">Services</Link>
            <Link to="/case-studies" className="hover:text-purple-200 transition">Case Studies</Link>
            <Link to="/industries" className="hover:text-purple-200 transition">Industries</Link>
            <Link to="/blog" className="hover:text-purple-200 transition">Blog</Link>
            <Link to="/contact" className="hover:text-purple-200 transition">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Rocket className="w-6 h-6" />
              <span className="font-bold">Quixcel</span>
            </div>
            <div className="flex space-x-6">
              <Facebook className="w-6 h-6 hover:text-purple-400 cursor-pointer transition" />
              <Instagram className="w-6 h-6 hover:text-purple-400 cursor-pointer transition" />
              <Mail className="w-6 h-6 hover:text-purple-400 cursor-pointer transition" />
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Quixcel. While You Rest, We Excel.
          </div>
        </div>
      </footer>
    </div>
  );
}