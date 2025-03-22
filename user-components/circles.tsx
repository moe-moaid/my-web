'use client';
import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function Circles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0], 
        borderRadius:["20%", "20%", "50%", "80%", "20%"],
    }}
    transition={{
        duration: 2.5
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute mt-52 border border-[#333333] animate-ping rounded-full h-[200px] w-[200px] md:h-[200px] lg:w-[200px]'/>
        <div className='absolute mt-52 border border-[#333333] rounded-full h-[220px] w-[220px] md:h-[300px] md:w-[300px]'/>
        <div className='absolute mt-52 border border-[#333333] rounded-full h-[250px] w-[250px] md:h-[500px] md:w-[500px]'/>
        <div className='rounded-full border border-[#00C6CF] opacity-20 h-[320px] w-[320px] md:h-[650px] md:w-[650px] absolute mt-52 animate-pulse'/>
        <div className='absolute mt-52 border border-[#333333] rounded-full h-[360px] w-[360px] md:h-[800px] md:w-[800px]'/>
    </motion.div>
  )
}