"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar"; // adjust path if needed

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🚀 Replace with real API call later
    setMessage("✅ Password reset link has been sent to your email!");
  };

  return (
    <>
    <Navbar
        signIn="Sign In"
        signUp="Sign Up"
        contactUs="Contact Us"
      />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Forgot Password 🔑
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Enter your email and we’ll send you a reset link
          </p>

          {/* Show message */}
          {message && (
            <p className="text-green-600 text-sm text-center mb-4">{message}</p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to login */}
          <div className="mt-6 text-center">
            <Link href="/pages/signin" className="text-sm text-indigo-600 hover:underline">
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
