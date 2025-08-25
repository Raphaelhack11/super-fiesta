import Sidebar from "../components/Sidebar";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export default function DashboardPage() {
  const plans = [
    {
      name: "Basic",
      price: "$100 - $499",
      returnRate: "5% Weekly",
      color: "bg-gray-100 dark:bg-gray-800",
    },
    {
      name: "Gold",
      price: "$500 - $1,999",
      returnRate: "7% Weekly",
      color: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      name: "Master",
      price: "$2,000 - $4,999",
      returnRate: "10% Weekly",
      color: "bg-yellow-200 dark:bg-yellow-800",
    },
    {
      name: "Premium",
      price: "$5,000+",
      returnRate: "15% Weekly",
      color: "bg-yellow-300 dark:bg-yellow-700",
    },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Dashboard
        </h1>

        {/* Balance Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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

        {/* Plans Section */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-yellow-400 mb-4">
          Investment Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow-lg ${plan.color} hover:scale-105 transition-transform`}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {plan.name} Plan
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{plan.price}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {plan.returnRate}
              </p>
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
                Subscribe
              </Button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
