'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-100 flex items-center justify-center py-32 md:py-48">
      {/* Background accents with subtle motion and blur */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full opacity-20 blur-3xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 20 }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full opacity-20 blur-3xl"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 25 }}
        />
      </div>


      {/* Main content */}
      <div className="relative z-10 text-center px-6 md:px-0 max-w-3xl mx-auto">
        {/* Headline with gradient text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-md">
          Take Control of Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Expenses</span> With Intelligence
        </h1>


        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto opacity-0 animate-fadeIn">
          FlowPay helps you track, manage, and optimize your spending with a sleek, minimal interface. Make your money flow smarter.
        </p>


        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 hover:scale-105 transition transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Get Started
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
          <Link href="/about">
            <button className="px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 hover:scale-105 transition transform focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
