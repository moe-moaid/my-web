import React from 'react'
import { SVGIconProps } from '@/typings';

type props = {};

export const SVGIcon: React.FC<SVGIconProps> = ({ svg }) => {
  return (
    <div className='w-10 h-10 rounded-full my-2 md:my-0' dangerouslySetInnerHTML={{__html:svg}}/>
  )
}