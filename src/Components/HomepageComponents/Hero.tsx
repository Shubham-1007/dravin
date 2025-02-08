import React from "react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import animationData from "./../../../public/mouse-animation.json"; // Use the converted JSON file

function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen text-white">
        <h1 className="text-5xl lg:text-7xl font-allrounder font-light leading-tight mt-10 px-5">
          Technical & Derivatives<br /> Excellence
        </h1>

        {/* Lottie Animation */}
        <div className="absolute bottom-20">
          {/* <Player
            autoplay
            loop
            src={animationData}  // Load JSON animation file
            style={{ height: "50px", width: "50px" }}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
