"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from 'framer-motion';
import Link from "next/link";

type Props = {};

export default function AdminSocials({}: Props) {
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
        />
        <SocialIcon
          className="mx-2"
          url="https://www.linkedin.com/in/mohammad-moaid"
        />
        <SocialIcon
          url="https://www.facebook.com/mohammad.moaid"
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
            url="hhtps://www.google-plus.com"
            fgColor="gray"
            bgColor="transparent"
          />
          {/* <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          /> */}
          <p className="capitalize hidden md:inline-flex text-gray-500 text-sm">get in touch</p>
      </motion.div>
    </>
  );
}
