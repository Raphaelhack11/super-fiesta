import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 dark:bg-gray-800 shadow-lg p-4 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-yellow-400 mb-6">Profit Bliss</h2>
      <Link to="/dashboard" className="hover:text-yellow-500 dark:hover:text-yellow-400">Dashboard</Link>
      <Link to="/deposit" className="hover:text-yellow-500 dark:hover:text-yellow-400">Deposit</Link>
      <Link to="/withdraw" className="hover:text-yellow-500 dark:hover:text-yellow-400">Withdraw</Link>
      <Link to="/history" className="hover:text-yellow-500 dark:hover:text-yellow-400">History</Link>
      <Link to="/admin" className="hover:text-yellow-500 dark:hover:text-yellow-400">Admin</Link>
    </aside>
  );
}
