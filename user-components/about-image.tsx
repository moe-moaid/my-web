"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import developerImage from "@/app/assets/titan.jpg";
import developerImage from "../public/assets/me.png";
type Props = {};

export default function AboutImage({}: Props) {
  return (
    <>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{once:true}} // this preventing animation from repeating on scroll
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          className="mt-[120px] md:mt-0 flex-shrink-0 object-cover rounded-full h-56 w-56 md:w-64 md:h-96 md:rounded-lg xl:w-[500px] xl:h-[600px]"
          src={developerImage}
          height={300}
          width={300}
          alt="about image"
        />
        {/* <img className="mt-[150px] md:mt-0 flex-shrink-0 object-cover rounded-full h-56 w-56 md:h-95 md:w-64 md:rounded-lg xl:w-[500px] xl:h-[600px]" src="/assets/titan.jpg" alt="" /> */}
      </motion.div>
      <motion.div
      initial={{
        y: 50,
        opacity: 0
      }}
      whileInView={{
        y:0,
        opacity: 1
      }}
      transition={{duration: 1.2}}
       className="space-y-10 px-0 md:px-10 mt-10 md:mt-0 md:w-[70%]">
        <h4 className="text-xl md:text-2xl lg:text-4xl font-semibold">here is a <span className="underline decoration-[#00C6CF]/50">little</span> background about me</h4>
        <p className="text-sm md:text-base text-justify">
            First of all I would like to welcome you on my personal custom platform built with Next.js using lates server components and server actions, I will keep improving this platform over the time. I am an enthusiast crazy Frontend developer with no limits, I have a curiosity of a cat, I like to experience all sorts of technologies around me, and get comfortable with them so easily in no time. I started on 2018 as a web developer doing freelance projects, I worked on all sorts of projects from e-commerece to single landing page websites, started from WordPress, then gradually built my experience and started developing themes from scratch then moved to plugins developement, but I didn't like being restricted to WP hooks, so I started exploring around, and knowing more about frontend, having a good grip on JavaScript was essential, after that I learnt React.js, and Next.js and since then till now, I work as a frontend develoepr, currently Sr.Frontend develoepr @ 9D Technologies wihich is a tech gient in Pakistan.
        </p>
      </motion.div>
    </>
  );
}
