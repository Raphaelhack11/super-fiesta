import Sidebar from "../components/Sidebar";

export default function HistoryPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Transaction History
        </h1>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <p className="text-gray-600 dark:text-gray-300">No transactions yet</p>
        </div>
      </main>
    </div>
  );
}
