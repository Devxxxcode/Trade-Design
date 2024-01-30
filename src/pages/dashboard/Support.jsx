import React, { useState } from 'react'
import { FaInbox } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb"
import { SupportTable } from '../../components/tables/SupportTable';

const Support = () => {
    const [method , setMethod] = useState("")

    const handleClick = (method)=>{
        setMethod(method)
    }
  return (
    <div className=" bg-[#050d1a] w-full h-full md:p-5 p-1 overflow-auto">
        <div className='flex justify-between items-center flex-wrap'>
            <div className='flex md:gap-10 lg:gap-16   border-b-[1px] border-white/10 text-white p-3 flex-wrap w-full md:w-auto justify-between' >
                <div className='flex gap-1 items-center cursor-pointer ' onClick={()=>handleClick("")}>
                    <FaInbox className={`  text-xl ${method==="" && "!text-customYellow"}`}/>
                    <h3 className={` text-textMuted ${method==="" && "!text-customYellow"}`}>All Ticket</h3>
                    <h3 className={` bg-customYellow px-1 rounded text-black `}>0</h3>
                </div>
                <div className='flex gap-1 items-center cursor-pointer' onClick={()=>handleClick("answered")}>
                    <h3 className={` text-textMuted ${method==="answered" && "!text-customYellow"}`}>Answered</h3>
                    <h3 className=' bg-customYellow px-1 rounded text-black'>0</h3>
                </div>
                <div className='flex gap-1 items-center cursor-pointer' onClick={()=>handleClick("pending")}>
                    <h3 className={` text-textMuted ${method==="pending" && "!text-customYellow"}`}>Pending</h3>
                    <h3 className=' bg-customYellow px-1 rounded text-black'>0</h3>
                </div>
            </div>

                <div className='bg-customYellow flex gap-2 items-center p-2 px-4 shadow rounded mt-5 mx-auto md:mt-0 md:mx-0'>
                    <h3>create ticket</h3>
                    <TbMessageCircle2Filled />
                </div>
        </div>

        <div>
            <SupportTable/>
        </div>
    </div>
  )
}

export default Support