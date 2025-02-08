import React from 'react'
import Link from 'next/link'

function HomeIntro() {
  return (
    <div className="max-w-screen-xl mx-auto py-32 container px-5">
        <div className="flex items-center gap-8 mb-12">
          <div className="flex items-center justify-center w-[75px] h-[75px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-[75px] h-[75px]">
              <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill="none" stroke="black" strokeWidth="2" />
              <text x="50%" y="50%" textAnchor="middle" fill="black" fontSize="20" fontWeight="bold" dominantBaseline="middle">
                01
              </text>
            </svg>
          </div>
          <p className="text-lg font-semibold">ABOUT US</p>
        </div>

        <h2 className="text-5xl lg:text-7xl mb-10 font-allrounder font-normal capitalize">Firm Overview</h2>
        <p className="text-xl leading-9 mb-12">
          At Dravin Capital, we redefine wealth management by delivering expert guidance across the Indian stock market,
          derivatives, and global forex markets. With a vision to create long-term value and a disciplined approach to capital
          preservation, we empower clients to thrive in a dynamic financial environment. Our strategies are built on deep market
          insights, robust research, and a commitment to excellence, ensuring that every investment aligns with your unique
          financial goals.
        </p>
        <Link href="/dashboard" className="flex items-center gap-6">
          <p className="font-semibold">More Details</p>
          <div className="flex items-center justify-center w-[45px] h-[45px] bg-black rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M8 4l8 8-8 8" />
            </svg>
          </div>
        </Link>
      </div>
  )
}

export default HomeIntro