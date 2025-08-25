import Navbar from "../components/Navbar";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-md mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Login
        </h1>
        <form className="space-y-4">
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
