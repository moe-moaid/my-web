import Circles from "@/user-components/circles";
import Typer from "@/user-components/typer";
import Image from "next/image";
import React from "react";
import developerImage from "@/public/assets/personal.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Circles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={developerImage}
        width={250}
        height={250}
        alt="developer image"
      />
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px] z-20">
        Senior Frontend Developer
      </h2>
      <Typer />
      <div className="pt-5 z-20">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}
