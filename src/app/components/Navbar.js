"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ signIn, signUp, logOut, home, aboutUs, contactUs }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
      <nav className="bg-indigo-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold">MyApp</div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 font-medium">
              {!isLoggedIn ? (
                <>
                  <li>
                    <Link href="/" className="hover:text-yellow-300 transition">
                      {home || "Home"}
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/signin" className="hover:text-yellow-300 transition">
                      {signIn}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/signup"
                      className="px-3 py-1 rounded-lg font-semibold hover:text-yellow-300 transition"
                    >
                      {signUp}
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/about" className="hover:text-yellow-300 transition">
                      {aboutUs}
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/contact" className="hover:text-yellow-300 transition">
                      {contactUs}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/pages/dashboard" className="hover:text-yellow-300 transition">
                      {logOut}
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="bg-white text-indigo-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-200 transition"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-indigo-700 px-6 py-4 space-y-4 animate-slide-down">
            <ul className="flex flex-col space-y-4 font-medium">
              {!isLoggedIn ? (
                <>
                  <li>
                    <Link
                      href="/"
                      className="block hover:text-yellow-300 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {home || "Home"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/signin"
                      className="block hover:text-yellow-300 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {signIn}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/signup"
                      className="block px-3 py-2 rounded-lg font-semibold hover:text-yellow-300 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {signUp}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/about"
                      className="block hover:text-yellow-300 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {aboutUs}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/contact"
                      className="block hover:text-yellow-300 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {contactUs}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/pages/dashboard"
                      className="block hover:text-yellow-300 transition"
                      onClick={() => setIsOpen(false)}
                    >
                      {logOut}
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
