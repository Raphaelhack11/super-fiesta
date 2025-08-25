import Sidebar from "../components/Sidebar";

export default function AdminPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Pending Deposits</h2>
            <p>No pending deposits</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Pending Withdrawals</h2>
            <p>No pending withdrawals</p>
          </div>
        </div>
      </main>
    </div>
  );
}
