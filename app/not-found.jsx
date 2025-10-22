// app/not-found.js
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-6">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold tracking-tight text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="mt-3 text-gray-500 leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track.
        </p>

        <div className="mt-8">
          <Link href="/">
            <Button className="px-6 py-2 text-base font-medium rounded-xl shadow-sm bg-gray-900 hover:bg-gray-800 text-white flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>

      <footer className="mt-12 text-sm text-gray-400">
        © {new Date().getFullYear()} FlowPay — Track Smarter. Spend Better.
      </footer>
    </div>
  );
}
