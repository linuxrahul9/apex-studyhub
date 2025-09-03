"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../../components/Navbar";

export default function ContactUs() {
  return (
    <>
      <Navbar signIn="Sign In" signUp="Sign Up" />

      <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 min-h-screen flex flex-col">

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center py-16 px-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Have questions or ideas? WeWe&apos;d love to hear from you!  
          Fill out the form or reach us directly via the info below.
        </p>
      </motion.section>

      {/* Contact Section */}
      <section className="flex-1 px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-6">Get in Touch</h2>
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-center space-x-4">
                <FaPhoneAlt className="text-indigo-600 text-xl" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="text-indigo-600 text-xl" />
                <span>support@studyhub.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl p-8 border border-gray-100 space-y-6"
          >
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Send a Message</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition transform hover:scale-105 shadow-lg"
            >
              🚀 Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </div>

    </>
  );
}
