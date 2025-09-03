"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar"; // adjust path if needed";

export default function SignUpPage() {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: ""
  });


  /*
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Sign Up Data:", form);
      
    }; */
  const onSignup = async (e) => { }

  return (
    <>
      <Navbar
        signIn="Sign In"
        contactUs="Contact Us"
      />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
         
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
            Create an Account ✨
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Join us and start your journey today
          </p>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={user.name}
                onChange={(e) => setuser({ ...user, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={user.email}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                value={user.password}
                onChange={(e) => setuser({ ...user, password: e.target.value })}
              />
            </div>

            <button
              onClick={onSignup}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Extra Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/pages/signin" className="text-indigo-600 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
