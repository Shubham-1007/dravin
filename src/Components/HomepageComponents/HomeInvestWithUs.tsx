// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// function HomeInvestWithUs() {
//   return (
//     <div className="w-full py-16">
//       <div className="text-center max-w-screen-xl mx-auto mb-12">
//         <h3 className="text-5xl mb-6 font-allrounder font-normal">
//           Why Invest With Us?
//         </h3>
//         <p className="text-lg max-w-[850px] mx-auto">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>

//       {/* Swiper Carousel */}
//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={30}
//         slidesPerView={3}
//         className="max-w-screen-xl mx-auto"
//       >
//         {["Wealth Management", "Investment Strategy", "Risk Analysis","Wealth Management", "Investment Strategy", "Risk Analysis"].map((title, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-96 group perspective">
//               <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
//                 {/* Front Side with Image and Overlay */}
//                 <div
//                   className="absolute inset-0 bg-cover bg-center flex items-center justify-center text-white text-center p-6 backface-hidden rounded-lg"
//                   style={{
//                     backgroundImage: `url(/hero.jpg)`, // Replace with your actual image path
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
//                   <div className="relative z-10">
//                     <h4 className="text-2xl font-semibold mb-2">{title}</h4>
//                     <p className="text-lg">Discover the future of smart investing.</p>
//                   </div>
//                 </div>

//                 {/* Back Side */}
//                 <div className="absolute inset-0 rounded-lg bg-gray-900 text-white flex flex-col items-center justify-center px-8 text-center rotate-y-180 backface-hidden">
//                   <h4 className="text-2xl mb-4 font-semibold">
//                     {title} Insights
//                   </h4>
//                   <p>
//                     Get in-depth strategies and expert advice on how to manage
//                     investments, maximize profits, and mitigate risks.
//                   </p>
//                   <button className="mt-6 bg-white text-black px-6 py-2 rounded-md font-medium">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default HomeInvestWithUs;




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper/modules";

// function HomeInvestWithUs() {

//     const slides = [
//         "Wealth Management",
//         "Investment Strategy",
//         "Risk Analysis",
//         "Portfolio Optimization",
//         "Tax Planning",
//         "Retirement Savings",
//       ];

//   return (
//     <div className="w-full pt-5 pb-16 ">
//       <div className="text-center mb-20 px-5">
//         <h3 className="text-5xl mb-6 font-allrounder font-normal">
//           Why Invest With Us?
//         </h3>
//         <p className="text-lg max-w-[850px] mx-auto">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>

//       {/* Swiper Carousel with Coverflow Effect */}
//       <Swiper
//       slidesPerView={3}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
        
//         loop={true}                      // Infinite loop
//         initialSlide={Math.floor(slides.length / 2)} // Start from the middle slide
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 200,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={{ }}
//         modules={[EffectCoverflow, Pagination]}
//         className=""
//       >
//         {["Wealth Management", "Investment Strategy", "Risk Analysis", "Wealth Management", "Investment Strategy", "Risk Analysis"].map((title, index) => (
//           <SwiperSlide key={index} className="w-96">
//             <div className="relative w-full h-96 group">
//               {/* Front Side with Image and Overlay */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center flex items-center justify-center text-white text-center p-6 rounded-lg"
//                 style={{
//                   backgroundImage: `url(/hero.jpg)`, // Replace with your image path
//                 }}
//               >
//                 <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
//                 <div className="relative z-10">
//                   <h4 className="text-2xl font-semibold mb-2">{title}</h4>
//                   <p className="text-lg">Discover the future of smart investing.</p>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default HomeInvestWithUs;





import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function HomeInvestWithUs() {
  const slides = [
    "Wealth Management",
    "Investment Strategy",
    "Risk Analysis",
    "Portfolio Optimization",
    "Tax Planning",
    "Retirement Savings",
  ];

  return (
    <div className="w-full pt-5 pb-16 px-5 md:px-0">
      <div className="text-center mb-20 ">
        <h3 className="text-4xl lg:text-5xl mb-6 font-allrounder font-normal">
          Why Invest With Us?
        </h3>
        <p className="text-lg max-w-[850px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Swiper Carousel with Coverflow Effect */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        initialSlide={Math.floor(slides.length / 2)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1, // Show 1 slide on mobile
          },
          768: {
            slidesPerView: 2, // Show 2 slides on tablets
          },
          1024: {
            slidesPerView: 3, // Show 3 slides on desktops
          },
        }}
        className=""
      >
        {slides.map((title, index) => (
          <SwiperSlide key={index} className="w-96">
            <div className="relative w-full h-96 group">
              {/* Front Side with Image and Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center flex items-center justify-center text-white text-center p-6 rounded-lg"
                style={{
                  backgroundImage: `url(/hero.jpg)`, // Replace with your image path
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-semibold mb-2">{title}</h4>
                  <p className="text-lg">Discover the future of smart investing.</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeInvestWithUs;
