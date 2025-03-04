"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import LogoSlider from "../Components/HomepageComponents/LogoSlider"
import Hero from "@/Components/HomepageComponents/Hero";
import HomeIntro from "@/Components/HomepageComponents/HomeIntro";
import HomeInvestWithUs from "@/Components/HomepageComponents/HomeInvestWithUs";
import Services from "./../Components/HomepageComponents/Services"



export default function Home() {

  const marqueeRef = useRef(null);
  const cloneRef = useRef(null);

  const cardData = [
    {
      title: "Customized Risk & Profit Strategies",
      imageSrc: "/1.jpg", // Replace with your actual image paths
      subtext: "Our team provides tailored strategies according to clients' risk capacities and profit expectations."
    },
    {
      title: "Automated Trading",
      imageSrc: "/2.jpg", // Replace with your actual image paths
      subtext: "We are able to deliver a consistent and high average return with our affiliated trading bot."
    },
    {
      title: "Prop Shop",
      imageSrc: "/3.jpg", // Replace with your actual image paths
      subtext: "We support our clients through the evaluation phase of proprietary firms and other obstacles."
    },
    {
      title: "Expertise Delivered",
      imageSrc: "/4.jpg", // Replace with your actual image paths
      subtext: "Our team offers customised strategies based on the risk tolerance and financial goals of our clients."
    }
  ];
  

  useEffect(() => {
    const marquee = marqueeRef.current;
    const clone = cloneRef.current;
    let speed = 1; // Adjust speed for scrolling
    let position = 0;

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= marquee.clientWidth) {
        position = 0; // Reset seamlessly when fully out
      }
      marquee.style.transform = `translateX(${position}px)`;
      clone.style.transform = `translateX(${position}px)`;
    };

    const interval = setInterval(animate, 16); // ~60 FPS
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      {/* Section 1 */}

      <div className="w-full">
        <Hero />
      </div>

      {/* Section 2 */}
      <div className="w-full">
        <HomeIntro />
      </div>






      {/* Section 3 - Flip Cards */}
      <div className="w-full py-32 bg-[#f5f4fd]">
        <HomeInvestWithUs />
      </div>



      {/* Section  4*/}
      {/* <div className="w-full min-h-screen flex justify-center items-center py-20 bg-black">
        <div className="max-w-screen-xl mx-auto flex-col md:flex-row flex gap-12 relative px-5">
          
          <div className=" text-center md:text-left basis-1/2 md:sticky top-[22%] h-[50vh] ">
            <h2 className="text-5xl lg:text-6xl text-white mb-8 font-allrounder font-normal leading-tight  ">Our Unique Services</h2>
            <p className="text-gray-300 text-lg lg:pr-32">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet inventore, ratione cum eligendi similique architecto. Consequuntur aliquid nemo distinctio assumenda hic ullam a, placeat est eligendi recusandae. Adipisci, velit! Omnis sequi ullam debitis, perspiciatis natus, enim aspernatur repellat quod ab maiores aperiam deleniti non magni dicta sint eius optio.</p>
          </div>

          
          <div className="basis-1/2 relative overflow-hidden">
            <div className="lg:h-[200vh] grid grid-cols-2 lg:flex lg:flex-col gap-8">
              
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="h-[400px] lg:h-[60vh] flex items-center justify-center bg-gray-100 shadow-md rounded-xl text-2xl font-semibold"
                >
                  Service {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* <Services /> */}
      

      <div className="w-full min-h-screen flex justify-center items-center py-20 bg-black">
  <div className="max-w-screen-xl mx-auto flex-col md:flex-row flex gap-12 relative px-5">
    
    {/* Left Side - Static Content */}
    <div className="text-center md:text-left basis-1/2 md:sticky top-[22%] h-[50vh]">
      <h2 className="text-5xl lg:text-6xl text-white mb-8 font-allrounder font-normal leading-tight">
        Our Unique Services
      </h2>
      <p className="text-gray-300 text-lg lg:pr-32">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet inventore, ratione cum eligendi similique architecto. Consequuntur aliquid nemo distinctio assumenda hic ullam a, placeat est eligendi recusandae. Adipisci, velit! Omnis sequi ullam debitis, perspiciatis natus, enim aspernatur repellat quod ab maiores aperiam deleniti non magni dicta sint eius optio.
      </p>
    </div>

    {/* Right Side - Cards with Image, Title, Sub-text, and Button */}
    <div className="basis-1/2 relative overflow-hidden">
      <div className="lg:h-[145vh] grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-8 text-white">
        
        {/* Loop through cardData to render each card */}
        {cardData.map((card, index) => (
          <div
            key={index}
            className=" flex justify-center bg-[#0c0c0c] border shadow-md rounded-xl" 
          >
            

            {/* Image at the top of each card */}
            <img
              src={card.imageSrc} // Dynamically set image source
              alt={`Image for ${card.title}`}
              className="w-full object-cover rounded-xl max-w-[190px] "
            />
            
            {/* Card Content: Title, Sub-text, and Button */}
            <div className="p-6">
              <h3 className="text-3xl font-semibold mb-4">{card.title}</h3>
              <p className="text-lg mb-4">{card.subtext}</p>
              <button className="bg-white text-black px-6 py-2 rounded-md font-medium">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>






      {/* Section  */}

      {/* <div className=" py-24 bg-[#f5f4fd]">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-4xl text-center font-allrounder font-normal">Trusted Over +1200 Clients in The World</h3>
          <LogoSlider />

        </div>
      </div> */}





      {/* Section */}

      {/* <div className="w-full py-20 px-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex">
            <div className="w-full md:basis-3/4">
              <p className="text-xl mb-2">Our Expertise</p>
              <h3 className="text-5xl mb-4 font-allrounder font-normal">Why Invest With us?</h3>
              <p className="text-lg max-w-[650px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="hidden  basis-1/4 md:flex items-center justify-end">
              <Link className="bg-black text-lg text-white px-8 py-2 rounded-md" href="">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-24">
            <div className="basis-1/3 bg-gray-100 border border-gray-200">
              <Image src="/hero.jpg" alt="" width={300} height={300} className="w-full" />
              <div className="p-8">
                <h4 className="text-2xl mb-3">Trusted by Investor</h4>
                <p className="mb-2">Lorem ipsum dolor consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, sit amet pulvinar dapibus leo.​</p>
                <Link href="/dashboard" className="flex items-center gap-2">
                  <p className="font-semibold">More Details</p>
                  <div className="flex items-center justify-center w-[25px] h-[25px] bg-black rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M8 4l8 8-8 8" />
                    </svg>
                  </div>
                </Link>

              </div>
            </div>
            <div className="basis-1/3 bg-gray-100 border border-gray-200 md:-mt-8 mb-8">
              <Image src="/hero.jpg" alt="" width={300} height={300} className="w-full" />
              <div className="p-8">
                <h4 className="text-2xl mb-3">Trusted by Investor</h4>
                <p className="mb-2">Lorem ipsum dolor consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, sit amet pulvinar dapibus leo.​</p>
                <Link href="/dashboard" className="flex items-center gap-2">
                  <p className="font-semibold">More Details</p>
                  <div className="flex items-center justify-center w-[25px] h-[25px] bg-black rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M8 4l8 8-8 8" />
                    </svg>
                  </div>
                </Link>

              </div>
            </div>
            <div className="basis-1/3 bg-gray-100 border border-gray-200 md:-mt-16 mb-16">
              <Image src="/hero.jpg" alt="" width={300} height={300} className="w-full" />
              <div className="p-8">
                <h4 className="text-2xl mb-3">Trusted by Investor</h4>
                <p className="mb-2">Lorem ipsum dolor consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, sit amet pulvinar dapibus leo.​</p>
                <Link href="/dashboard" className="flex items-center gap-2">
                  <p className="font-semibold">More Details</p>
                  <div className="flex items-center justify-center w-[25px] h-[25px] bg-black rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M8 4l8 8-8 8" />
                    </svg>
                  </div>
                </Link>

              </div>
            </div>
          </div>

        </div>

      </div> */}

      {/* Section */}

      <div className="w-full overflow-hidden bg-[#121212] py-6 relative">
        <div className="flex whitespace-nowrap">
          {/* Main Marquee */}
          <div className="flex justify-around w-full" ref={marqueeRef}>
            <span className="text-3xl lg:text-6xl text-white font-bold ">
              Investments & Finance &nbsp; ● &nbsp;
            </span>
            <span className="text-3xl lg:text-6xl text-white font-bold ">
              Portfolio Management &nbsp; ● &nbsp;
            </span>
          </div>

          {/* Cloned Marquee for Seamless Looping */}
          <div className="flex absolute left-full w-full justify-around  " ref={cloneRef}>
            <span className="text-3xl lg:text-6xl text-white font-bold ">
              Investments & Finance &nbsp; ● &nbsp;
            </span>
            <span className="text-3xl lg:text-6xl text-white font-bold">
              Investments & Finance &nbsp; ● &nbsp;
            </span>
          </div>
        </div>
      </div>



    </div>
  );
}










