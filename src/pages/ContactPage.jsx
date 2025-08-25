import Navbar from "../components/Navbar";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="max-w-xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-yellow-400 mb-6">
          Contact Us
        </h1>
        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows="4"
            required
          ></textarea>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
