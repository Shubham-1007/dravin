import React, { useState } from "react";
import { Circle } from "lucide-react";
import Link from "next/link";

function Accordion({ title, description }: { title: string; description: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-700 rounded-md p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-purple-300 font-semibold focus:outline-none"
      >
        {title}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen mt-2" : "max-h-0"
        }`}
      >
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function Whatwedo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#111828] to-black">
      <div className="max-w-screen-xl mx-auto px-8">
        <h1 className="text-5xl font-bold text-center mb-6">What we do</h1>
        <p className="text-center text-gray-400 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          architecto repellat repudiandae delectus dicta?
        </p>
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-[#171f2c] rounded-lg border border-gray-700 p-6">
            <div className="rounded-full mb-3 bg-gradient-to-br from-purple-500 to-purple-800 p-3 inline-block">
              <Circle size={32} color="white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              Youth Mentors
            </h3>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              quod neque dolorem animi placeat laudantium dolore laborum aliquam
              et, vitae doloremque quasi tempora praesentium quis id nisi
              excepturi inventore necessitatibus?
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-900 rounded-md text-center flex items-center justify-center aspect-square">
                  <p className="text-3xl font-bold">AJ</p>
                </div>
                <p className="text-md font-semibold mt-3">Alex Jordan</p>
                <p className="text-purple-300 text-sm">Head Trader, 27</p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-900 rounded-md text-center flex items-center justify-center aspect-square">
                  <p className="text-3xl font-bold">SM</p>
                </div>
                <p className="text-md font-semibold mt-3">Sarah Mendez</p>
                <p className="text-purple-300 text-sm">Strategy Coach, 25</p>
              </div>
            </div>
            <Link
              href="/team"
              className="block w-full bg-gradient-to-r mt-6 from-purple-500 to-purple-800 text-white text-center py-2 rounded-md font-semibold"
            >
              Meet Full Team
            </Link>
          </div>
          <div className="bg-[#171f2c] rounded-lg border border-gray-700 p-6">
            <div className="rounded-full mb-3 bg-gradient-to-br from-purple-500 to-purple-800 p-3 inline-block">
              <Circle size={32} color="white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              Third Party Verified Results
            </h3>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              quod neque dolorem animi placeat laudantium dolore laborum aliquam
              et, vitae doloremque quasi tempora praesentium quis id nisi
              excepturi inventore necessitatibus?
            </p>
            <Link
              href="/team"
              className="block w-full bg-gradient-to-r mt-6 from-purple-500 to-purple-800 text-white text-center py-2 rounded-md font-semibold"
            >
              View Complete Track Record
            </Link>
          </div>
          <div className="bg-[#171f2c] rounded-lg border border-gray-700 p-6">
            <div className="rounded-full mb-3 bg-gradient-to-br from-purple-500 to-purple-800 p-3 inline-block">
              <Circle size={32} color="white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-purple-300">
              No Hidden Fees
            </h3>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
              quod neque dolorem animi placeat laudantium dolore laborum aliquam
              et, vitae doloremque quasi tempora praesentium quis id nisi
              excepturi inventore necessitatibus?
            </p>
            <Link
              href="/team"
              className="block w-full bg-gradient-to-r mt-6 from-purple-500 to-purple-800 text-white text-center py-2 rounded-md font-semibold"
            >
              Meet Full Team
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0a0e16] to-[#0b0f17] border border-gray-700 rounded-lg p-6 mt-20 grid grid-cols-2 gap-10">
            <div>
                <h2 className="text-purple-300 text-3xl font-semibold mb-7">The Numbers Don&apos;t Lie</h2>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#0f131f] rounded-md p-5 border border-gray-700">
                        <p className="text-purple-400 text-3xl font-bold">2000 +</p>
                        <p className="text-sm text-gray-400"> Active Students</p>
                    </div>
                    <div className="bg-[#0f131f] rounded-md p-5 border border-gray-700">
                        <p className="text-purple-400 text-3xl font-bold">500 +</p>
                        <p className="text-sm text-gray-400"> Managed Accounts</p>
                    </div>
                    <div className="bg-[#0f131f] rounded-md p-5 border border-gray-700">
                        <p className="text-purple-400 text-3xl font-bold"> INR 20,000/-</p>
                        <p className="text-sm text-gray-400"> Avg. Monthly ROI</p>
                    </div>
                    <div className="bg-[#0f131f] rounded-md p-5 border border-gray-700">
                        <p className="text-purple-400 text-3xl font-bold"> 95.99%</p>
                        <p className="text-sm text-gray-400"> Satisfaction Rate</p>
                    </div>


                </div>
            </div>
            <div>
                <h2 className="text-purple-300 text-3xl font-semibold mb-7">Common Questions</h2>
                <div>
                    <div className="space-y-4">
                        <Accordion title="What is Dravin Capital?" description="Dravin Capital is a financial services company specializing in trading education, managed accounts, and strategy coaching. We aim to empower individuals to achieve financial independence." />
                        <Accordion title="How do I get started?" description="Getting started is simple! Visit our 'Join Us' page, choose a plan that suits your needs, and follow the instructions to sign up. Our team will guide you through the process." />
                        <Accordion title="What makes you different?" description="We pride ourselves on transparency, third-party verified results, and a team of experienced mentors who are dedicated to your success. No hidden fees, just results." />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Whatwedo;
