import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-gray-950 to-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-white text-2xl font-semibold tracking-tight">FlowPay</h1>
          <p className="text-sm text-gray-500 mt-1">Track smarter. Spend wiser.</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-8 text-sm">
          <a href="#" className="uppercase tracking-wide hover:text-white hover:underline transition-all duration-300">Dashboard</a>
          <a href="#" className="uppercase tracking-wide hover:text-white hover:underline transition-all duration-300">Features</a>
          <a href="#" className="uppercase tracking-wide hover:text-white hover:underline transition-all duration-300">Pricing</a>
          <a href="#" className="uppercase tracking-wide hover:text-white hover:underline transition-all duration-300">About</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all transform hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} FlowPay Inc. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white hover:underline transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white hover:underline transition-all duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};