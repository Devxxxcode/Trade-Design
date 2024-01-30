import React from 'react'
import logo from "../assest/thefiptrades logo.svg"
import { IoMailUnreadSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#463a5c]'>
        <div className='page-width py-10'>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='flex flex-col gap-5'>
                    <div><img src={logo} alt="" className='h-[3rem]' /></div>
                    <p className='!text-white/50'>We want you to not just Trade in the world’s financial markets, but also with a simple and user friendly online platform.</p>
                </div>

                <div className='flex flex-col gap-3'>
                <div className='border-l-8 border-textMuted pl-2 text-white font-semibold text-xl h-4 flex items-center mb-3'>
                Useful Links
                    </div>
                    <div className='text-white/50 '>About</div>
                    <div className='text-white/50'>Features</div>
                    <div className='text-white/50 '>Process</div>
                </div>

                <div className='flex flex-col gap-3'>
                <div className='border-l-8 border-textMuted pl-2 text-white font-semibold text-xl h-4 flex items-center mb-3'>
               Markets
                    </div>
                    <div className='text-white/50 '>Forex</div>
                    <div className='text-white/50'>indices</div>
                    <div className='text-white/50 '>Commodities</div>
                </div>
                <div className='flex flex-col gap-3'>
                <div className='border-l-8 border-textMuted pl-2 text-white font-semibold text-xl h-4 flex items-center mb-3'>
              Contact
                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoMailUnreadSharp className='text-white'/>
                        <div className='text-white/50 '>info@thefiptrades.com</div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <MdCall className='text-white'/>
                        <div className='text-white/50 '>+16192890994</div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaLocationPin className='text-white'/>
                        <div className='text-white/50 '>2174 North point pleasant road, Texas</div>
                    </div>
                </div>
                
             </div>

             <div className='text-center mt-16 text-white/50'>© TheFipTrades 2023. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Footer