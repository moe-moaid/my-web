import { addAbout } from '@/actions/aboutSectionActions'
import React from 'react'

type Props = {}

export default function AboutForm({}: Props) {
  return (
    <div className='mt-5'>
      <form className='flex flex-col space-y-5' action={addAbout}>
          <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='title' type="text" placeholder='title' required/>
          <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='description' type="text" placeholder='about you' required/>
          <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='aboutImage' type="file" placeholder='about you' required/>
          <button className='bg-blue-500 rounded-md p-2 font-semibold text-white/80'>Enter Value</button>
        </form>
    </div>
  )
}