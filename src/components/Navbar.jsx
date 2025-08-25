import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-yellow-400 dark:bg-gray-800 shadow-md">
      <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-yellow-400">
        Profit Bliss
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-900 dark:text-gray-200">Home</Link>
        <Link to="/about" className="text-gray-900 dark:text-gray-200">About</Link>
        <Link to="/contact" className="text-gray-900 dark:text-gray-200">Contact</Link>
        <Link to="/signup" className="text-gray-900 dark:text-gray-200">Signup</Link>
        <Link to="/login" className="text-gray-900 dark:text-gray-200">Login</Link>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded-lg border bg-white dark:bg-gray-700 dark:text-yellow-400"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
