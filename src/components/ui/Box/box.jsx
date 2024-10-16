"use client";
import React from "react";
import { BackgroundGradient } from "../Box/backgroungrad";
import MoonScene from "../../MoonScene";


// Create a Card component to display individual cards
const Card = ({ src, alt, title, price, designation }) => (
  <BackgroundGradient className="rounded-[22px] max-w-xs p-4 sm:p-2 bg-transparent backdrop-blur-md bg-white/40 m-2.5">
    <div className="flex items-center">
      <img
        src={src}
        alt={alt}
        height="50" // Circular image height and width
        width="50"
        className="object-cover rounded-full"
      />
      <div className="ml-4"> {/* Increased margin for better spacing */}
        <p className="text-base sm:text-xl text-black dark:text-neutral-200">
          {title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{designation}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-3">
          <span className="bg-slate-600 text-white px-1 py-1 rounded">
            {price}
          </span>
        </p>
      </div>
    </div>
  </BackgroundGradient>
);


// Main component to render the card layout
export function BackgroundGradientDemo() {
    return (
      <div className="flex items-start"> {/* Flex container to align moon and boxes */}
        <div style={{ marginRight: '20px' }}> {/* Add margin for space between moon and boxes */}
          <MoonScene /> {/* Render the moon */}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[300px] mt-[-580px] ml-[185px] p-10"> {/* Adjust gap here */}
          {/* First column: Two cards stacked vertically */}
          <div className="flex flex-col gap-[100px]"> {/* Vertical gap of 100px */}
            <Card src="src/assets/ankur-CT47N7Lx.webp" alt="ankur" title="Ankur Kumar" designation="Fest Coordinator"price="+91-7991902068" />
            <Card src="src/assets/atul-Drpa6N45.webp" alt="atul" title="Atul Panwar" designation="Fest Coordinator" price="+91-8306579717" />
          </div>
          {/* Second column: Two cards stacked vertically */}
          <div className="flex flex-col gap-[100px]"> {/* Vertical gap of 100px */}
            <Card src="src/assets/aditya-DrGe1tSi.webp" alt="Aditya Kumar" title="Aditya Kumar" designation="Sponsorship Team" price="+91-6201828322" />
            <Card src="src/assets/ayush-BYHSoySR.webp" alt="Ayush Tripathi" title="Ayush Tripathi" designation="Technical Team" price="+91-8400270616" />
          </div>
        </div>
      </div>
    );
  }
