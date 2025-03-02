"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';
import Link from "next/link";

type Props = {};

export default function Socials({}: Props) {
  return (
    <>
      <motion.div
      initial={{
        opacity: 0,
        x: -500,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
       className="flex flex-row items-center">
        <SocialIcon
          url="https://www.github.com/moe-moaid"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/mohammad-moaid"
          bgColor="transparent"
          fgColor="gray"
        />
      </motion.div>

      <motion.div
      initial={{
        opacity: 0,
        x: 500,
        scale: 0
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className="cursor-pointer flex flex-row items-center">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="capitalize hidden md:inline-flex text-gray-500 text-sm">get in touch</p>
      </motion.div>
    </>
  );
}
