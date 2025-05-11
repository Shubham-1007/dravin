import React from "react";
import { Check, Circle } from "lucide-react";
import Link from "next/link";

function Becomeforextrader() {
  return (
    <div className="my-20 max-w-screen-xl mx-auto px-8">
      <h1 className="text-5xl font-semibold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-700 text-transparent bg-clip-text">
        Become a Forex Trader
      </h1>
      <p className="text-center mb-14">
        Master the market with our proven learning path. Start for free, then
        level up your skills.
      </p>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-[#202938] rounded-lg overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-blue-400 to-blue-700 h-2 w-full"></div>
          <div className="flex flex-col p-8">
            <div className="rounded-full bg-gray-200 p-4 mx-auto">
              <Circle size={32} />
            </div>
            <h4 className="text-lg font-semibold mt-4">Why Choose Us?</h4>
            <ul className="list-none mt-4 space-y-2 text-sm text-white">
              <li className="flex ">
                <Check className="text-green-500 mr-2" />
                Comprehensive Learning Path
              </li>
              <li className="flex ">
                <Check className="text-green-500 mr-2" />
                Expert Mentorship
              </li>
              <li className="flex">
                <Check className="text-green-500 mr-2" />
                Proven Strategies
              </li>
            </ul>
            <p className="mt-4 font-semibold">
              Join thousands of successful traders who started their journey
              with us.
            </p>
            <Link href="/get-started">
              <p className="mt-6 text-center bg-gradient-to-r from-blue-500 to-blue-800 text-white py-2 px-4 rounded-md">
                Get Started
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-[#202938] rounded-lg overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 h-2 w-full"></div>
          <div className="flex flex-col p-8">
            <div className="rounded-full bg-gray-200 p-4 mx-auto">
              <Circle size={32} />
            </div>
            <h4 className="text-lg font-semibold mt-4">Paid Bootcamp!</h4>
            <ul className="list-none mt-4 space-y-2 text-sm text-white">
              <li className="flex ">
                <Check className="text-green-500 mr-2" />
                Comprehensive Learning Path
              </li>
              <li className="flex ">
                <Check className="text-green-500 mr-2" />
                Expert Mentorship
              </li>
              <li className="flex">
                <Check className="text-green-500 mr-2" />
                Proven Strategies
              </li>
            </ul>
            <p className="mt-4 font-semibold">
              Join thousands of successful traders who started their journey
              with us.
            </p>
            <Link href="/get-started">
              <p className="mt-6 text-center bg-gradient-to-r from-blue-800 to-blue-600 text-white py-2 px-4 rounded-md">
                Get Started
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-[#202938] rounded-lg overflow-hidden border border-gray-700">
          <div className="bg-gradient-to-r from-blue-400 to-blue-700 h-2 w-full"></div>
          <div className="flex flex-col p-8">
            <div className="rounded-full bg-gray-200 p-4 mx-auto">
              <Circle size={32} />
            </div>
            <h4 className="text-lg font-semibold mt-4">1:1 Mentorship</h4>
            <ul className="list-none mt-4 space-y-2 text-sm text-white">
              <li className="flex ">
                <Check className="text-green-500 mr-2" />
                Comprehensive Learning Path
              </li>
              <li className="flex ">
                <Check className="text-green-500 mr-2" />
                Expert Mentorship
              </li>
              <li className="flex">
                <Check className="text-green-500 mr-2" />
                Proven Strategies
              </li>
            </ul>
            <p className="mt-4 font-semibold">
              Join thousands of successful traders who started their journey
              with us.
            </p>
            <Link href="/get-started">
              <p className="mt-6 text-center bg-gradient-to-r from-blue-700 to-blue-500 text-white py-2 px-4 rounded-md">
                Get Started
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 bg-[#202938] my-20 rounded-lg p-16 border border-gray-700">
        <div></div>
        <div>
          <h2 className="text-4xl font-bold mb-5">See What You&apos;ll Learn</h2>
          <p className="text-gray-400 mb-8">
            This preview Lesson shows how we break down complex trading concepts
            into simple, actionable steps. No confusing jargon - just practical
            knowledge
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-200 p-3">
                <Circle size={32} />
              </div>
              <div>
                <h5 className="font-semibold text-base">Chart Pattern Analysis</h5>
                <p className="text-sm text-gray-400">
                  Identify highiprobability setups that are repeated in Markets.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-200 p-3">
                <Circle size={32} />
              </div>
              <div>
                <h5 className="font-semibold text-base">Chart Pattern Analysis</h5>
                <p className="text-sm text-gray-400">
                  Identify highiprobability setups that are repeated in Markets.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-gray-200 p-3">
                <Circle size={32} />
              </div>
              <div>
                <h5 className="font-semibold text-base">Chart Pattern Analysis</h5>
                <p className="text-sm text-gray-400">
                  Identify highiprobability setups that are repeated in Markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Becomeforextrader;
