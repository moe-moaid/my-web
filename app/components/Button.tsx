import React from 'react'
type Props = {
    type: 'primary' | 'secondary';
    fullWidth: boolean;
    text: string;
}
export default function Button({ type, fullWidth, text }:Props) {
  return (
      <button className={`${fullWidth ? 'w-full py-2' : 'px-2 py-1'} ${type === 'primary' ? 'bg-[#2E8CFA]' : ''} font-medium text-[12px] text-white rounded-md`}>{ text }</button>
  )
}
