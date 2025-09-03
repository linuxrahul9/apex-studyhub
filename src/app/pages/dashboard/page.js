"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function Dashboard() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = { name: "Rahul Singh" };
    setUsername(user.name);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const user = localStorage.getItem("user");
      if (user) setIsLoggedIn(true);
    }, 900000);
  }, []);

  return (
    <>
      <Navbar
        home="Home"
        aboutUs="About Us"
        contactUs="Contact Us"
        logOut="Log Out"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {username ? username.charAt(0).toUpperCase() : "U"}
            </div>
            <h1 className="mt-6 text-4xl font-bold text-gray-800">
              {username}
            </h1>
            <p className="text-lg text-gray-500">Full Stack Developer</p>
            <p className="mt-3 text-gray-600 max-w-xl">
              🚀 Passionate about building beautiful, scalable, and modern web
              applications with React, Next.js, and Node.js.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-indigo-600">12</h3>
            <p className="text-gray-600">Projects</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-purple-600">5</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-pink-600">30+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-gray-800">
                E-Commerce App
              </h3>
              <p className="text-gray-500 mt-2">
                Full-stack e-commerce platform with Next.js, Node.js, and
                MongoDB.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-gray-800">
                Portfolio Website
              </h3>
              <p className="text-gray-500 mt-2">
                Responsive personal portfolio using React, Tailwind, and Framer
                Motion.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold text-gray-800">
                Chat App
              </h3>
              <p className="text-gray-500 mt-2">
                Real-time chat app using Socket.IO and Firebase authentication.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Have a project idea? Let&apos;s build something amazing together!
          </p>

          <Link
            href="/contactus"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Contact Me
          </Link>
        </section>
      </div>
    </>
  );
}
