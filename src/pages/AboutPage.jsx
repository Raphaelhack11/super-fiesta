import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          About Profit Bliss
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Profit Bliss is a modern cryptocurrency investment platform designed to
          help individuals grow their wealth through secure and transparent
          crypto investment plans. We offer flexible staking plans, real-time
          notifications, and easy-to-use dashboards to track your growth.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Our mission is to make crypto investments simple, accessible, and
          rewarding for everyone.
        </p>
        <div className="mt-10 text-gray-900 dark:text-gray-300">
          <p className="font-semibold">📍 Location:</p>
          <p>1234 Market Street, San Francisco, CA, USA</p>
        </div>
      </div>
    </div>
  );
}
