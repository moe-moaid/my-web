"use client";
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {}

export default function Typer({}: Props) {
    const [text, count] = useTypewriter({
        words:["coffee, coding, chess", "<Next.js 13 website/>"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <h1 className='text-2xl lg:text-6xl font-semibold px-10 z-20'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#D3FBD8'/>
    </h1>
  )
}