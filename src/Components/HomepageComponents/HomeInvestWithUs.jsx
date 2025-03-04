
// import React from "react";

// function HomeInvestWithUs() {
//   const cards = [
//     "Global Macro",
//     "Long/Short Equity",
//     "Quantitative Strategies",
//     "Event-Driven",
//     "Tactical Opportunities",
//     "Retirement Savings",
//   ];

//   return (
//     <div className="w-full py-16">
//       <div className="text-center max-w-screen-xl mx-auto mb-12">
//         <h3 className="text-5xl mb-6 font-allrounder font-normal">
//         Investment Strategies
//         </h3>
//         <p className="text-lg max-w-[850px] mx-auto">
//         Our Approach to Capitalizing on Market Inefficiencies
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {cards.map((title, index) => (
//           <div key={index} className="relative w-full h-96 group">
//             <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
//               {/* Front Side with Image and Overlay */}
//               <div
//                 className="absolute inset-0 bg-cover bg-center flex items-center justify-center text-white text-center p-6 backface-hidden rounded-lg"
//                 style={{
//                   backgroundImage: `url(/hero.jpg)`, // Replace with your actual image path
//                 }}
//               >
//                 <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
//                 <div className="relative z-10">
//                   <h4 className="text-2xl font-semibold mb-2">{title}</h4>
//                   <p className="text-lg">Discover the future of smart investing.</p>
//                 </div>
//               </div>

//               {/* Back Side */}
//               <div className="absolute inset-0 rounded-lg bg-gray-900 text-white flex flex-col items-center justify-center px-8 text-center rotate-y-180 backface-hidden">
//                 <h4 className="text-2xl mb-4 font-semibold">{title} Insights</h4>
//                 <p>
//                   Get in-depth strategies and expert advice on how to manage
//                   investments, maximize profits, and mitigate risks.
//                 </p>
//                 <button className="mt-6 bg-white text-black px-6 py-2 rounded-md font-medium">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomeInvestWithUs;



import React from "react";

function HomeInvestWithUs() {
  // Updated array with titles, subtitles, and image URLs for the first 5 cards
  const cards = [
    {
      title: "Global Macro",
      subtitle: "Tactical bets on macroeconomic trends, interest rates, and geopolitical shifts.",
      imageUrl: "1.jpg", // Replace with actual image paths
    },
    {
      title: "Long/Short Equity",
      subtitle: "Fundamental stock-picking paired with dynamic hedging to balance risk/reward.",
      imageUrl: "2.jpg",
    },
    {
      title: "Quantitative Strategies",
      subtitle: "Algorithmic trading powered by machine learning and big data analytics.",
      imageUrl: "3.jpg",
    },
    {
      title: "Event-Driven",
      subtitle: "Capitalizing on corporate actions, mergers, and restructuring opportunities.",
      imageUrl: "4.jpg",
    },
    {
      title: "Tactical Opportunities",
      subtitle: "Short-term, high-conviction plays in undervalued assets.",
      imageUrl: "5.jpg",
    },
    {
      title: "Retirement Savings",
      subtitle: "Strategies for growing wealth over the long term for retirement.",
      imageUrl: "6.jpg",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="text-center max-w-screen-xl mx-auto mb-12 px-5">
        <h3 className="text-5xl mb-6 font-allrounder font-normal">
          Investment Strategies
        </h3>
        <p className="text-lg max-w-[850px] mx-auto">
          Our Approach to Capitalizing on Market Inefficiencies
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 ">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full h-96 group perspective-1000">
            <div className="relative w-full h-full transform-style-3d transition-transform duration-700 group-hover:rotate-y-180">
              {/* Front Side with Image and Title */}
              <div
                className="absolute inset-0 bg-cover bg-center flex items-center justify-center text-white text-center p-6 backface-hidden rounded-lg"
                style={{
                  backgroundImage: `url(${card.imageUrl})`, // Dynamic image URL
                }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-semibold mb-2">{card.title}</h4>
                </div>
              </div>

              {/* Back Side with Title, Subtitle, and Button */}
              <div className="absolute inset-0 rounded-lg bg-gray-900 text-white flex flex-col items-center justify-center px-8 text-center rotate-y-180 backface-hidden">
                <h4 className="text-2xl mb-4 font-semibold">{card.title} Insights</h4>
                <p className="mb-4">{card.subtitle}</p>
                <button className="mt-6 bg-white text-black px-6 py-2 rounded-md font-medium opacity-70">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeInvestWithUs;
