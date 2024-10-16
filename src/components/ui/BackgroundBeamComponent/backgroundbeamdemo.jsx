"use client";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { MeteorsDemo } from "../meteors/meteorsdemo";
import MoonScene from "../../../components/MoonScene";
import { BackgroundGradientDemo } from "../Box/box";

export function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full pt-10 pl-20 rounded-md bg-neutral-950 relative flex flex-col items-left justify-left antialiased overflow-auto"> 
      <div className="max-w-2xl p-4 flex-1"> 
        <h1 className="relative z-10 ml-5 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-left font-sans font-bold mb-8 mt-[-40px]">
          Contact Us!
        </h1>
        <p className="text-left">
          {/* Add any additional text here if needed */}
        </p>
        <div className="m-1">
          <MeteorsDemo />
        </div>
      </div>
      <div>
        <BackgroundGradientDemo />
      </div>
      {/* Ensure the moon container is positioned correctly */}
     

      <BackgroundBeams />
    </div>
  );
}
