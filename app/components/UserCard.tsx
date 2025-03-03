import React from "react";
import Image from "next/image";
import developerImage from "@/public/assets/personal.jpg";
import { SocialIcon } from "react-social-icons";

export default function UserCard() {
  return (
    <div className="flex flex-col gap-y-[24px] items-center rounnded-lg w-[300px] bg-white rounded-2xl py-[48px] absolute top-10 right-2">
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={developerImage}
        width={120}
        height={120}
        alt="developer image"
      />
      <div>
        <p className="text-[20px] font-bold text-center">Moe Moaid F.</p>
        <p className="text-[12px] text-center font-medium">Frontend Engineer</p>
      </div>
      <div className="flex flex-row justify-start gap-x-2 items-center bg-[#D9D9D9] px-3 py-1 rounded-full w-[90%]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 8.59998L20.5 9.97498L18 12.35V20.5H21.5C22.3285 20.5 23 19.8285 23 19V8.59998Z"
            fill="#4CAF50"
          />
          <path
            d="M2 8.59998L3.807 9.45498L7 12.35V20.5H3.5C2.6715 20.5 2 19.8285 2 19V8.59998Z"
            fill="#1E88E5"
          />
          <path
            d="M18 6.09998L12.5 10.225L7 6.09998L6.5 8.99998L7 12.35L12.5 16.475L18 12.35L18.5 8.99998L18 6.09998Z"
            fill="#E53935"
          />
          <path
            d="M2 6.649V8.6L7 12.35V6.1L5.438 4.9295C5.066 4.6505 4.614 4.5 4.149 4.5C2.962 4.5 2 5.462 2 6.649Z"
            fill="#C62828"
          />
          <path
            d="M23 6.649V8.6L18 12.35V6.1L19.562 4.9295C19.934 4.6505 20.386 4.5 20.851 4.5C22.038 4.5 23 5.462 23 6.649Z"
            fill="#FBC02D"
          />
        </svg>
        <p className="text-[#1E1E1E] text-[14px]">mohammadmoaid@gmail.com</p>
      </div>
      <div>
        <SocialIcon
          url="https://www.github.com/moe-moaid"
          bgColor="transparent"
          fgColor="black"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/mohammad-moaid"
          bgColor="transparent"
          fgColor="#2196F3"
        />
      </div>
      <button className="bg-[#E4E4E4] px-5 py-2 rounded-full text-[#2E8CFA] text-[12px] font-medium">Logout</button>
    </div>
  );
}
