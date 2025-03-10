import React from 'react'
type Props = {
    placeHolder?: string;
}
export default function Input({placeHolder}: Props) {
  return (
    <input type="text" placeholder={`${placeHolder ? placeHolder : ''}`} className='p-2 outline-none border-b border-[#2EC4CE] w-full placeholder:text-black text-black' />
  )
}
