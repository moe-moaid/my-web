'use client';
import AboutImage from "@/user-components/about-image";
import React from "react";

export default function About() {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center overflow-auto">
      <h3 className="absolute top-10 md:top-20 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
      <AboutImage/>
      
    </div>
  );
}
