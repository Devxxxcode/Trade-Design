import React from 'react'
import { ImCheckmark } from "react-icons/im";

const Indices = () => {
  return (
    <div className='page-width mt-10 ' id='home-page'>
         <h3 className=' text-customDark text-5xl font-semibold'>Indices traders speculate on price movements in stock Indices like the FTSE 100, the Dow Jones and DAX.</h3>

         <p className='text-xl !text-textColor mt-3'>Indices are a measurement of the performance of a group of shares that are listed on an exchange. Because there is no underlying physical asset to exchange when trading indices, most indices trading is done with financial derivatives like CFDs.</p>

         <p className='mt-5'>Indices price movements and volatility are impacted by factors like political events, major factors which affect companies in a particular sector, economic data like employment figures and big changes in the currencies markets. Global Indices markets are dominated by what are sometimes referred to as “benchmark Indices,” these are the stock Indices which have an outsize impact on economies and are generally held as reliable indicators of the economic health of a particular country or area.</p>

         <p className='mt-5'>Some of the most heavily traded live Indices markets include:</p>

        <div className='flex flex-col gap-3 mt-5 md:w-8/12 lg:w-6/12'>
        <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> The FTSE 100 – Sometimes called the ‘UK 100,’ this represents the UK’s hundred biggest companies by market capital</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Dow Jones – Often referred to as simply ‘Wall Street’ this comprises 30 of the US’ biggest publicly owned companies</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> The DAX – Referred to as the ‘Germany 30,’ this index is made up of 30 major German companies</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> NASDAQ 100 –The ‘US Tech 100,’ is a capitalization-weighted index made up of over 100 tech companies in the US</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Nikkei 225 – Japan’s biggest price-weighted index is comprised of 225 of the country’s biggest companies</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> CAC 40 – Simply referred to as the France 40 this comprises 40 of France’s biggest companies by capitalization</p>
        </div>

        <p className='mt-5 mb-32'> Trading global Indices with TheFipTrades allows you to go both long and short on price movements in major Indices from the UK, US, Asia, Australia and Europe. You’ll also benefit from market movement across not just a single sector, but a wide variety of different types of companies, providing greater opportunity as well as potentially lowering the risk of exposure to extreme volatility.</p>
    </div>
  )
}

export default Indices