"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <nav className="container mx-auto flex items-center justify-between px-8 py-5 min-h-[85px]">
        {/* Logo: Large, far left, minimal hover */}
        <Link 
          href="/" 
          className="flex items-center -ml-12 md:-ml-16 lg:-ml-20 transition-opacity hover:opacity-80 duration-200"
        >
          <span className="sr-only">FlowPay</span>
          <Image
            src="/logo.png"
            alt="FlowPay"
            width={520}
            height={130}
            priority
            quality={95}
            className="h-16 md:h-22 lg:h-26 w-auto object-contain"
          />
        </Link>

        {/* Actions: Minimal, elegant spacing */}
        <div className="flex items-center gap-3">
          <SignedIn>
            <Link href="/dashboard">
              <Button 
                size="sm" 
                className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:shadow transition-all duration-200 px-5 py-2.5 rounded-lg font-medium"
              >
                <LayoutDashboard size={16} strokeWidth={2} />
                <span className="hidden md:inline text-sm">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center gap-2 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 transition-all duration-200 px-5 py-2.5 rounded-lg font-medium"
              >
                <PenBox size={16} strokeWidth={2} />
                <span className="hidden md:inline text-sm">Add</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button 
                variant="outline" 
                size="sm"
                className="border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white text-slate-700 transition-all duration-200 px-6 py-2.5 rounded-lg font-medium text-sm"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 ring-1 ring-slate-200 hover:ring-slate-300 transition-all duration-200",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};