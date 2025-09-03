"use client";

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-gray-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-lg font-bold text-white">📘 Study Hub</h2>
          <p className="mt-2 text-gray-400 leading-snug">
            Notes, quizzes & community – learn smarter 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white">Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About</a></li>
            <li><a href="/features" className="hover:text-yellow-300">Features</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white">Resources</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="/notes" className="hover:text-yellow-300">Notes</a></li>
            <li><a href="/quizzes" className="hover:text-yellow-300">Quizzes</a></li>
            <li><a href="/community" className="hover:text-yellow-300">Community</a></li>
            <li><a href="/help" className="hover:text-yellow-300">Help</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-white">Follow</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-3 text-xl">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-3 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Study Hub · Made with ❤️
      </div>
    </footer>
  );
}
