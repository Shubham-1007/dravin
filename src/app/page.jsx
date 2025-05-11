"use client";
import Becomeforextrader from "@/Components/HomepageComponents/Becomeforextrader";
import Hero from "@/Components/HomepageComponents/Hero";
import Whatwedo from "@/Components/HomepageComponents/Whatwedo";
import Image from "next/image";
import Link from "next/link";




export default function Home() {


  return (
    <div>
      
    {/* Section 1 */}

    <div>
      <Hero />
    </div>


    {/* Section 2 */}
    <div>
      <Becomeforextrader />
    </div>


    {/* Section 3 */}

    <div>
      <Whatwedo />
    </div>


    </div>
  );
}










