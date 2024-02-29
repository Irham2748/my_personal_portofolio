import React from 'react'
import Strings from '../Shared/Strings'
import {BiSolidQuoteAltLeft, BiSolidQuoteAltRight} from "react-icons/bi"

function About() {
  return (
    <div className='mt-5 px-16 text-center flex flex-col items-center'>
        <h2 className='text-[35px] font-medium text-black tracking-wide'>{Strings.ABOUT_HEADING}</h2>
        <BiSolidQuoteAltLeft className='bg-slate-700 p-2 rounded-full text-[30px] text-white mt-5'/>
        <h2 className='my-2 text-gray-500 text-[16px]'>{Strings.ABOUT_DESC}</h2>
        <BiSolidQuoteAltRight className='bg-slate-700 p-2 rounded-full text-[30px] text-white' />
    </div>
  )
}

export default About