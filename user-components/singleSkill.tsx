"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {
  directionLeft: boolean;
  content: string;
  percentage: number;
};

export default function SingleSkill({ directionLeft, content, percentage }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.svg
        initial={{
          x: directionLeft ? -150 : 150,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        fill="#5ED3F3"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        dangerouslySetInnerHTML={{ __html:content }}
      >
      </motion.svg>
      <motion.div
        initial={{
        x: directionLeft ? -150 : 150,
        opacity: 0,
      }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-0 group-hover:opacity-100 transition duration-300 eas-in-out">{ percentage }%</p>
        </div>
      </motion.div>
    </div>
  );
}
