import { useEffect, useRef } from "react";
import Image from "next/image";

export default function LogoSlider() {
  const sliderRef = useRef(null);
  const cloneRef = useRef(null);
  let speed = 1.5; // Adjust speed for scrolling
  let position = 0;

  useEffect(() => {
    const slider = sliderRef.current;
    const clone = cloneRef.current;

    const animate = () => {
      position -= speed;
      if (Math.abs(position) >= slider.clientWidth) {
        position = 0; // Reset seamlessly when fully out
      }
      slider.style.transform = `translateX(${position}px)`;
      clone.style.transform = `translateX(${position}px)`;
    };

    const interval = setInterval(animate, 16); // ~60 FPS
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="py-24 bg-[#f5f4fd] overflow-hidden">
      <div className="max-w-screen-xl mx-auto text-center">

        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap" style={{ overflow: "hidden" }}>
            {/* Main Slider */}
            <div className="flex gap-1 w-full" ref={sliderRef}>
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="w-1/6 flex justify-center items-center">
                    <Image
                      src={`/hero.jpg`}
                      alt={`Logo ${index + 1}`}
                      width={120}
                      height={80}
                      className="w-[120px] h-auto object-contain"
                    />
                  </div>
                ))}
            </div>

            {/* Cloned Slider for Seamless Looping */}
            <div className="flex absolute left-full w-full gap-1" ref={cloneRef}>
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <div key={index + 8} className="w-1/6 flex justify-center items-center">
                    <Image
                      src={`/hero.jpg`}
                      alt={`Logo ${index + 1}`}
                      width={120}
                      height={80}
                      className="w-[120px] h-auto object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
