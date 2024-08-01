import React from 'react'
import {MdOutlineKeyboardArrowDown,IoIosSearch,RxSpeakerModerate,GoPerson } from '../utils/imports'

const Header = () => {
  return (
    <header className='flex items-right justify-end mb-8'>
        <div className='flex items-center'>
            <button className='flex items-center text-white text-xs uppercase bg-blue-600 px-2 py-2'>+ Payout
                <span className='mx-2'>
                <span className='border-r border-gray-900 h-3 inline-block align-middle'></span>
                </span>
                <MdOutlineKeyboardArrowDown/></button>
            <button className='text-blue-600 ml-2 text-lg font-bold'><IoIosSearch /></button>
            <button className='text-orange-600 ml-2 text-lg font-bold'><RxSpeakerModerate/></button>
            <button className='text-blue-600 ml-2 text-lg font-bold flex p-0'><GoPerson/> <span>< MdOutlineKeyboardArrowDown className='mr-2'/></span></button>
        </div>
    </header>
  )
}

export default Header
