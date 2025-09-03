import Navbar from "./components/Navbar";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar
        firstValue="Login"
        secondValue="Sign Up"
        thirdValue="Dashboard"
      />
       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Your Smart Learning Space –{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Study Hub
          </span>{" "}
          🎓
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Learn smarter, not harder! Get access to notes, quizzes, and a global
          community – all in one beautiful platform built for learners like you.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/pages/signup"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            🚀 Get Started Free
          </Link>
          <Link
            href="/pages/signin"
            className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition"
          >
            Log In
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "📚 Smart Resources",
            desc: "Access high-quality notes, guides, and study materials across subjects.",
          },
          {
            title: "📝 Interactive Quizzes",
            desc: "Challenge yourself with AI-powered quizzes and track your progress.",
          },
          {
            title: "🤝 Global Community",
            desc: "Collaborate, discuss, and grow with learners from around the world.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/60 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-2xl font-bold text-indigo-600">{item.title}</h3>
            <p className="mt-3 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why Choose{" "}
          <span className="text-indigo-600">Study Hub?</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Study Hub is not just another learning site. It’s a{" "}
          <span className="font-semibold">smart ecosystem</span> built to make
          learning more fun, efficient, and engaging.  
          From personalized quizzes to collaborative study rooms – we’ve got it
          all covered for you.
        </p>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="p-12 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Level Up Your Learning? 🚀
          </h2>
          <p className="mt-4 text-indigo-100 text-lg">
            Join thousands of learners today and make your study journey fun,
            social, and effective.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/pages/signup"
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl shadow hover:bg-indigo-100 transition"
            >
              Start for Free
            </Link>
            <Link
              href="/pages/signin"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/20 transition"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>
    </div>

    </>
  );
}