import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Welcome to Profit Bliss
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Your trusted crypto investment platform with real growth potential.
        </p>
        <div className="flex gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-xl bg-yellow-400 font-bold text-gray-900 hover:bg-yellow-500 transition"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-xl border dark:border-yellow-400 text-gray-900 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
