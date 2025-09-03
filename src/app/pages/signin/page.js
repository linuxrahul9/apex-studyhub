"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ for redirect
import Link from "next/link";
import Navbar from "../../components/Navbar"; // adjust path if needed

export default function SignInPage() {
  const router = useRouter(); // ✅ Next.js navigation hook
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // store error messages

  // Handle Sign In
  const onSignin = async (e) => {
    e.preventDefault();

    // 🚨 Dummy authentication logic (replace with real API call later)
    if (user.email === "test@gmail.com" && user.password === "123456") {
      // ✅ Save user in localStorage (or JWT/session in real apps)
      localStorage.setItem("user", JSON.stringify({ name: "Rahul Sharma" }));

      // Redirect user to dashboard
      router.push("/dashboard");
    } else {
      setError("Invalid email or password. Try again!");
    }
  };

  return (
    <>
    <Navbar
        signUp="Sign Up"
        contactUs="Contact Us"
      />
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to continue to your account
        </p>

        {/* Show error message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={onSignin}>
          {/* Email */}
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
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Extra Links */}
        <div className="mt-6 text-center">
          <Link
            href="/pages/password-forgot"
            className="text-sm text-indigo-600 hover:underline block mb-2"
          >
            Forgot your password?
          </Link>
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href="/pages/signup" className="text-indigo-600 hover:underline">
              Sign Up
            </Link>
            
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
