import Sidebar from "../components/Sidebar";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function WithdrawPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Withdraw Funds
        </h1>
        <form className="space-y-4 max-w-md">
          <Input type="number" placeholder="Enter Amount (min $70)" required />
          <Input type="text" placeholder="Your Wallet Address" required />
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
            Request Withdrawal
          </Button>
        </form>
      </main>
    </div>
  );
}
