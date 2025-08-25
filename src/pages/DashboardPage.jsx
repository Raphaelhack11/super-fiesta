import Sidebar from "../components/Sidebar";
import { Card, CardContent } from "../components/ui/Card";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <h2 className="text-lg font-bold text-gray-900 dark:text-yellow-400">
                Account Balance
              </h2>
              <p className="text-2xl mt-2 text-gray-800 dark:text-gray-200">
                $0.00
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="text-lg font-bold text-gray-900 dark:text-yellow-400">
                Active Plan
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                None subscribed yet
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
