"use client";

import { motion } from "framer-motion";
import { FaBookOpen, FaUserFriends, FaEnvelope } from "react-icons/fa";
import Navbaar from "../../components/Navbar";

export default function AboutUs() {
  return (
    <>
    <Navbaar 
    home="Home"
    logout="Logout"
    contactUs="Contact Us"
    />
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800">About Study Hub</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Study Hub is your one-stop platform for learning, collaboration, and growth. 
            We aim to simplify education by providing interactive study resources, 
            project collaboration, and personalized tools for students.
          </p>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 Our Mission</h2>
          <p className="text-gray-600">
            To create a community-driven platform where students can access 
            resources, discuss topics, work on projects, and grow together.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">💼 What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-xl hover:shadow-lg transition">
              <h3 className="font-bold text-xl text-blue-600">Study Materials</h3>
              <p className="text-gray-600 mt-2">
                Notes, guides, and tutorials tailored for students in various fields.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl hover:shadow-lg transition">
              <h3 className="font-bold text-xl text-purple-600">Project Collaboration</h3>
              <p className="text-gray-600 mt-2">
                Find peers, team up, and build projects together for hackathons & learning.
              </p>
            </div>
            <div className="p-6 bg-pink-50 rounded-xl hover:shadow-lg transition">
              <h3 className="font-bold text-xl text-pink-600">Q&A Discussions</h3>
              <p className="text-gray-600 mt-2">
                Get answers from fellow learners and mentors in real-time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800">🚀 Join Us Today</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Whether you’re a student, teacher, or professional, Study Hub has 
            something for you. Start your journey of learning and collaboration now!
          </p>
        </motion.div>
      </div>
    </div>
    </>
  );
}
