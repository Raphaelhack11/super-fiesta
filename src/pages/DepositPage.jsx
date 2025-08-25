import Sidebar from "../components/Sidebar";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function DepositPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Deposit Funds
        </h1>
        <form className="space-y-4 max-w-md">
          <Input type="number" placeholder="Enter Amount (min $50)" required />
          <div className="space-y-2">
            <p className="text-gray-700 dark:text-gray-300">Choose Payment Method:</p>
            <div className="space-y-2">
              <div className="p-3 border rounded-lg bg-white dark:bg-gray-700">
                <p>Bitcoin Address:</p>
                <p className="text-sm break-all">bc1q4c6f7xzsekkpvd2guwkaww4m7se9yjlrxnrjc7</p>
              </div>
              <div className="p-3 border rounded-lg bg-white dark:bg-gray-700">
                <p>USDT (ERC20) Address:</p>
                <p className="text-sm break-all">0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA</p>
              </div>
              <div className="p-3 border rounded-lg bg-white dark:bg-gray-700">
                <p>Ethereum Address:</p>
                <p className="text-sm break-all">0x08cFE6DDC3b58B0655dD1c9214BcfdDBD3855CCA</p>
              </div>
            </div>
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
            Confirm Deposit
          </Button>
        </form>
      </main>
    </div>
  );
}
