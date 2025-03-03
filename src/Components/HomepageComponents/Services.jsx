// import React, { useState, useEffect } from "react";

// function Services() {
//   // Content for each card
//   const servicesContent = [
//     {
//       title: "Service 1",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       title: "Service 2",
//       description: "Pellentesque volutpat dui id orci egestas, vel euismod enim suscipit.",
//     },
//     {
//       title: "Service 3",
//       description: "Aenean fringilla ante id ipsum faucibus, eget fringilla lorem suscipit.",
//     },
//     {
//       title: "Service 4",
//       description: "Duis euismod ex eu ante facilisis, nec vestibulum sapien congue.",
//     },
//   ];

//   // State to track which service is currently in view
//   const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

//   // Handle the scroll event to detect which card is in view
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.querySelector(".scrollable-cards");
//       const cards = section.querySelectorAll(".service-card");

//       cards.forEach((card, index) => {
//         const rect = card.getBoundingClientRect();
//         if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//           setCurrentServiceIndex(index);
//         }
//       });
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center py-20 bg-black">
//       <div className="max-w-screen-xl mx-auto flex-col md:flex-row flex gap-12 relative px-5">
//         {/* Left Side - Fixed Text */}
//         <div
//           className="text-center md:text-left basis-1/2 md:sticky top-[22%] h-[50vh] transition-opacity duration-500 ease-in-out"
//           style={{ opacity: currentServiceIndex !== null ? 1 : 0 }}
//         >
//           <h2 className="text-5xl lg:text-6xl text-white mb-8 font-allrounder font-normal leading-tight">
//             {servicesContent[currentServiceIndex]?.title}
//           </h2>
//           <p className="text-gray-300 text-lg lg:pr-32">
//             {servicesContent[currentServiceIndex]?.description}
//           </p>
//         </div>

//         {/* Right Side - Scrollable Cards */}
//         <div className="basis-1/2 relative overflow-hidden">
//           <div className="lg:h-[200vh] grid grid-cols-2 lg:flex lg:flex-col gap-8 scrollable-cards">
//             {/* 4 Cards */}
//             {servicesContent.map((service, index) => (
//               <div
//                 key={index}
//                 className="service-card h-[400px] lg:h-[60vh] flex items-center justify-center bg-gray-100 shadow-md rounded-xl text-2xl font-semibold"
//               >
//                 {service.title}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;


