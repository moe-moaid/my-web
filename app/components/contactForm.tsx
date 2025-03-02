import { addContactInfo } from '@/actions/aboutSectionActions'
import React from 'react'

type Props = {}

export default function ContactForm({}: Props) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-orange-300 font-semibold text-[18px] tracking-wider'>Add or Edit your Contact info here</h1>
      <form className='flex flex-col mt-7 space-y-5 w-2/6' action={addContactInfo}>
        <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='platform' type="text" placeholder='title' required/>
        <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='link' type="text" placeholder='about you' required/>
        <button className='bg-[#ffa500] rounded-md p-2 font-semibold text-white/80'>Add Contact</button>
      </form>
    </div>

  )
}