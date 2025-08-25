import Navbar from "../components/Navbar";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { Button } from "../components/ui/Button";
import { useState } from "react";

export default function SignupPage() {
  const [referral, setReferral] = useState("");

  const validateReferral = () => {
    if (referral && referral !== "tmdf28dns") {
      alert("Invalid referral code");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-lg mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Create Account
        </h1>
        <form className="space-y-4">
          <Input type="text" placeholder="Full Name" required />
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Password" required />
          <Input type="tel" placeholder="Phone Number" required />
          <Select required>
            <option value="">Select Country</option>
            <option value="ca">Canada (CAD)</option>
            <option value="us">United States (USD)</option>
            <option value="uk">United Kingdom (GBP)</option>
            <option value="de">Germany (EUR)</option>
          </Select>
          <Input
            type="text"
            placeholder="Referral Code (Optional)"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
            onBlur={validateReferral}
          />
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}
