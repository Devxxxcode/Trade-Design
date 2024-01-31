import React from 'react'
import image1 from "../../assest/hm.jpg"
import image2 from "../../assest/ptt.png"
import { useNavigate, useNavigation } from 'react-router-dom'

const Estate = () => {
  const navigate = useNavigate()
  return (
    <div className='page-width mt-10 ' id='home-page'>
        <div className='mt-10 flex  justify-between items-center md:w-10/12 lg:8/12 mx-auto flex-wrap' >
            <div className='md:w-1/2 lg:w-5/12'>
                <h3 className='font-semibold text-3xl text-customDark'>
                Welcome to the future of real estate investing
                </h3>
                <p>Simple, low-cost, and more powerful than ever.</p>
            </div>
            <div className='md:w-1/2 lg:w-5/12'>
                <img src={image1} alt="" className='h-[25rem]'/>
            </div>
        </div>

       <div className='flex flex-col gap-3 md:w-10/12 lg:8/12 mx-auto'>
       <h3 className=' text-customDark text-5xl font-semibold mt-5'>Real Estate</h3>
        <p className='text-lg opacity-95'>Your portfolio is powered by high-quality, resilient assets</p>
        <img src={image2} alt="" className='h-[25rem] w-[25rem]'/>

       <p> Your portfolio is powered by high-quality, resilient assets. Our assets drive your returns. We pair our extensive network and expertise with the collective buying power of our investor community to acquire high-quality assets ranging from debt to equity, commercial to residential, and more.</p>

<p>We follow a "value investing" strategy of acquiring assets for less than what we believe is their intrinsic value, and typically less than their replacement cost. Our team then works to increase the value of each asset over time through hands-on management and in partnership with local operators.</p>

<p>We've specifically built the TheFipTrades portfolio with the intention of being able to withstand prolonged periods of economic distress. Nothing can be guaranteed, but because of our conservative approach and extensive underwriting processes, we believe the TheFipTrades portfolio is, from a risk-adjusted-return standpoint, well positioned to be able to sustain a severe economic downturn.</p>

<button className=' text-white bg-customOrange py-2 w-[9rem] rounded-md mt-5 mb-32' onClick={()=>navigate("/signup")}>Get Started</button>
       </div>
    </div>
  )
}

export default Estate