import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1b2232] to-[#0d1017] pt-48 pb-24">
      <div className="grid grid-cols-2 gap-10 max-w-screen-xl mx-auto px-8 h-full items-center justify-center">
        <div className="text-white h-full">
          <h1 className="text-6xl font-bold mb-2">Trade Forex your Way:</h1>
            <h1 className="text-6xl font-bold pb-8 bg-gradient-to-r from-purple-400 to-purple-800 text-transparent bg-clip-text">
            Learn or Earn Passively.
            </h1>
          <p className="mb-8">Master trading in 90 Days - or let us grow your money while you sleep.</p>
          <div className="flex gap-5 mb-6">
            <Link
              href="/learn"
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2 rounded"
            >
              Free Beginner&apos;s Guide
            </Link>
            <Link href="/earn" className="border-2 border-purple-700 text-white px-4 py-2 rounded">
              Start Managed Account
            </Link>
          </div>
              <p>Join <span className="font-bold text-purple-500">4000+</span> Traders who started this Month.</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
